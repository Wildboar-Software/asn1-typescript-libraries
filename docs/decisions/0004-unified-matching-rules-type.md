---
status: accepted
date: 2026-10-27
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 4
---
# Unified Matching Rule Matcher Signatures

## Context and Problem Statement

In X.500 directories, there are equality matching rules, ordering matching
rules, and substrings matching rules. Arguably, there are other forms of
matching, too, but in the current implementation, these are just aliases
to the aforementioned three.

Currently, the implementations of these matching rules all have different type
signatures, which are:

```typescript
type EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    flags?: number,
) => boolean;

type OrderingMatcher = (assertion: ASN1Element, value: ASN1Element) => number;

type SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
) => boolean;
```

The first two parameters of each are technically of the same type, and the
subsequent parameters are optional, so these functions can be interchanged
somewhat.

But the subsequent arguments are still important, and were generally made
optional only to preserve backwards compatibility.

I want there to be a single type signature that covers all matching rule
types, so they can be interchanged while preserving full functionality
and correctness.

The `getEqualityMatcher` is for matching subcomponents of values, such as
the distinguished name in a `NameAndOptionalUID`.

## Considered Options

The proposed unified matching rule signature looks like this:

```typescript
type Matcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
) => boolean | undefined;
```

This works for all three matching rules. All three matching rules can be described
in terms of evaluating an assertion against a value and nothing else.

### Ordering Matchers

Coercing ordering matching rules into this scheme is particularly problematic.
Ordering matchers currently return a `number` that can be used to sort according
to Javascript's `Array.sort()` predicate parameter. This is convenient and
intuitive. If we choose to coerce ordering matchers into a unified type, we can
either:

1. **Make all matchers return `number`.** This will silently (and very badly)
   break a lot of code. If `0` means "equal" where `true` once did, equality
   matchers used in conditions (e.g. `if (matcher(assertion value)) { ... }`)
   will silently invert their logic.
2. **Mix `number` and `boolean` return values and let callers figure it out.**
   This still suffers the problem of silently inverting conditions. It is
   also unintuitive and will require a lot of boilerplate to handle.
3. **Make all matchers return `boolean`.** This is the most logical conclusion,
   and it adheres to the abstract logic of matching described in the X.500
   series: matching rules are described in the specifications as returning
   either TRUE, FALSE, or UNDEFINED. This also introduces an unfortunate
   performance predicament described below.

#### The Problem with Returning Only Booleans

Ordering matching rules are described as matching if the stored value is
_less than_ (but not equal to) the asserted value.

For example, ITU-T Recommendation X.511 describes the `lessOrEqual`
`FilterItem` alternative as:

> It is TRUE if, and only if there is a value of the attribute or one of its
> subtypes for which either the equality matching rule or the ordering matching
> rule applied to that value and the presented value returns TRUE, i.e., there is
> a value of the attribute which is less than or equal to the presented value.

And as a reinforcing example, ITU-T Recommendation X.520 describes the
`integerOrderingMatch` as:

> The rule returns TRUE if the attribute value is less than the presented value.

For LDAP, [IETF RFC 4511](https://www.rfc-editor.org/info/rfc4511/) describes
the `lessOrEqual` alternative of a `Filter` as:

> The matching rules for a lessOrEqual filter are defined by the ORDERING and
> EQUALITY matching rules for the attribute type or subtype. The filter is TRUE
> when either the ORDERING or EQUALITY rule returns TRUE as applied to the
> attribute or subtype and the asserted value.

Similar logic applies to `greaterOrEqual` filter items, of course.

Note that the above descriptions refer to evaluating both the equality and
ordering matching rule implementations to evaluate `lessOrEqual` filter items.
If we were to adhere to the specifications literally, we would have to invoke
two matchers for every assertion-value combination evaluated! This is
preposterous, considering that our approach of returning a `number` from
ordering matchers already provides complete information in a single matcher
invocation. Many functions used in the internals of ordering matching rules
already return a `number` that is suitable for use in `Array.sort()` or
something that can trivially get converted to one. Consider `Buffer.compare()`
or `a - b` as examples.

Therefore, it is very desirable, from a performance perspective, to return a
`number` from ordering matchers, so we can determine ordering or equality
(indicated by a return value of `0`) in a single matcher invocation. For
context, remember that most matching implementations require a decoding of
assertion or value encodings to a concrete type, which immensely increases the
overhead of invoking them. Matching rule implementations are extremely
performance sensitive: they are invoked repeatedly, perhaps millions or
billions of times, within a search operation. So optimizations like this
are _required_.

On further consideration, I realized that this only applies per-value. As far
as the evaluation of an entire attribute is concerned, it can still only return
`TRUE`, `FALSE`, or `UNDEFINED`. Hence, I think an "inner" function that
evaluates an individual value ought to return a `number` and an "outer"
function ought to use this number to determine whether any particular value
matched.

### Substrings Matchers

Substrings matchers also present a peculiar problem for matching rule
implementation: their assertions can take two forms!

One form is the assertion syntax that is give as part of the matching rule
definition. The other assertion syntax is the `substrings` alternative of
a `FilterItem`, shown below:

```asn1
FilterItem ::= CHOICE {
  equality          [0]  AttributeValueAssertion,
  substrings        [1]  SEQUENCE {
    type                   ATTRIBUTE.&id({SupportedAttributes}),
    strings                SEQUENCE OF CHOICE {
      initial           [0]  ATTRIBUTE.&Type
                              ({SupportedAttributes}{@substrings.type}),
      any               [1]  ATTRIBUTE.&Type
                              ({SupportedAttributes}{@substrings.type}),
      final             [2]  ATTRIBUTE.&Type
                              ({SupportedAttributes}{@substrings.type}),
      control                Attribute{{SupportedAttributes}},
                    -- Used to specify interpretation of following items
      ... },
    ... },
  greaterOrEqual    [2]  AttributeValueAssertion,
  lessOrEqual       [3]  AttributeValueAssertion,
  present           [4]  AttributeType,
  approximateMatch  [5]  AttributeValueAssertion,
  extensibleMatch   [6]  MatchingRuleAssertion,
  contextPresent    [7]  AttributeTypeAssertion,
  ... }
```

A `substrings` `FilterItem`, according to
[IETF RFC 4511, Section 4.5.1.7.2](https://www.rfc-editor.org/info/rfc4511/#section-4.5.1.7.2),
is "converted into an assertion value of the substrings matching rule prior to
applying the rule." I couldn't find this behavior documented in the X.500
specifications.

In theory, it could be agreed upon that the substring matchers only take an
`assertion` of type `ASN1Element` that is the encoded assertion syntax given as
part of the matching rule definition. However, this would mean that we would
have to _re-encode_ the `FilterItem.substrings` as the assertion syntax before
invoking the substrings matcher. The assertion syntaxes of the substrings
matchers are often times a data structure very much like the
`FilterItem.substrings`. Consider the definitions of `SubstringAssertion` and
`OctetSubstringAssertion`.


```asn1
SubstringAssertion ::= SEQUENCE OF CHOICE {
  initial  [0]  UnboundedDirectoryString,
  any      [1]  UnboundedDirectoryString,
  final    [2]  UnboundedDirectoryString,
    -- at most one initial and one final component
  control       Attribute{{SupportedAttributes}},
    -- Used to specify interpretation of the following items
  ... }

OctetSubstringAssertion ::= SEQUENCE OF CHOICE {
  initial  [0]  OCTET STRING,
  any      [1]  OCTET STRING,
  final    [2]  OCTET STRING,
  ... } -- at most one initial and one final component
```

To transform the `FilterItem.substrings` into a `SubstringAssertion`, then
encode it, only to immediately decode it back to a `SubstringAssertion` is
a waste. The components of a `FilterItem.substrings` can be used directly
to populate a `SubstringAssertion` without any encoding.

## Decision Outcome

There SHOULD NOT be three separate type signatures for the three types of
matching rule implementations. The only exposed differentiation between them is
that a substrings matcher can also take `FilterItem_substrings_strings_Item[]`
as the assertion. This can be trivially handled by throwing an error if a
`FilterItem_substrings_strings_Item[]` is passed into an equality matching rule
or ordering matching rule. This might result in an extra statement per matching
rule implementation, in theory, but we are going to use some higher-order APIs
to construct matcher functions that will largely take care of this case in one
place.

The type signature will look something like this:

```typescript
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";

type AttributeType = OBJECT_IDENTIFIER;

type Matcher = (
    assertion: ASN1Element | FilterItem_substrings_strings_Item[],
    valueOrValues: AttributeTypeAndValue | Attribute,
    getEqualityMatcher?: (attributeType: AttributeType) => EqualityMatcher | undefined,
    flags?: number,
) => boolean | undefined;

type EqualityMatcher = Matcher;
type OrderingMatcher = Matcher;
type SubstringsMatcher = Matcher;
```

The type of the "getter" function passed in as the third parameter will be
determined elsewhere.
