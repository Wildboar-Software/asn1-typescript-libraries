---
status: accepted
date: 2026-11-01
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 13
---
# Translating `caseIgnoreListSubstringsMatch` `FilterItem` Syntax to Assertion Syntax

## Context and Problem Statement

Substring matching rules, unlike other types of X.500 directory matching rules,
take _two_ syntaxes: the syntax chosen for the assertion syntax as part of the
matching rule's definition, and the `substrings` alternative of a `FilterItem`
(referred to as the "built-in" assertion syntax).

For reference, the definition of the latter can be seen below:

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

Note that the `strings` of the `substrings` alternative use the value syntax of
the attribute. This means that, for an attribute using the `PostalAddress`
syntax (unsurprisingly including the `postalAddress` attribute), the `strings`
themselves are going to be of type `PostalAddress`--**not**
`UnboundedDirectoryString` as one might intuitively expect. The critical
ambiguity that the X.500 directory specifications do not clarify is how these
values are used to evaluate a `PostalAddress`.

Worse yet, the assertion syntax for `caseIgnoreListSubstringsMatch`, which
`postalAddress` uses, is:

```asn1
SubstringAssertion ::= SEQUENCE OF CHOICE {
  initial  [0]  UnboundedDirectoryString,
  any      [1]  UnboundedDirectoryString,
  final    [2]  UnboundedDirectoryString,
    -- at most one initial and one final component
  control       Attribute{{SupportedAttributes}},
    -- Used to specify interpretation of the following items
  ... }
```

As part of the matching rule's definition, there must be some way to translate
the built-in syntax to the assertion syntax, but how do you translate
`PostalAddress` to an `UnboundedDirectoryString`? Should its lines get broken
out into multiple `UnboundedDirectoryString` substrings?

To sum it up, there are arguably two ambiguities here, which I will phrase as
questions:

- How do you evaluate a `PostalAddress` as a substrings of another `PostalAddress`?
  - Do the asserted lines have to be consecutive?
  - Can the asserted lines appear on the same line?
- How do you translate the built-in syntax to the matching rule's assertion syntax?

I had ChatGPT locate the code in OpenLDAP to see what it does. It seems that it
_does_ expect the assertions to have a `PostalAddress` syntax, but then it joins
the lines of the assertion together and simply does a normal substrings search.
So in other words, an assertion might become the string
`123 S. Main Street$Tampa, FL`, and that assertion will be used to search within
a string of the form `123 S. Main Street$Tampa, FL$United States`.

## Considered Options

Below, I discuss a few options, plus an option to use both selectively using a
flag.

### Split Built-In Syntax into Separately Asserted Strings

One approach is to split the lines of each `PostalAddress` substring asserted
into their own separate substring. So a built-in asserted substring that is:

```asn1
any:{ printableString:"123 S. Main St.", printableString:"Tampa, FL" }
```

would get translated to the following `SubstringAssertion`:

```asn1
{
  any:printableString:"123 S. Main St.",
  any:printableString:"Tampa, FL"
}
```

The problem with this approach is that the built-in assertion might have
intended for the asserted lines to be adjacent in the value. Using our approach
above, the following values would also match:

```asn1
{ "123 S. Main St.Tampa, FL" }
{ "123 S. Main St.", "P.O. Box 44", "Tampa, FL" }
{ "90123 S. Main St.", "Tampa, FL" }
{ "123 S. Main St., P.O. Box 44", "Tampa, FL" }
```

The nice thing about this approach is that it is results in few allocations.
The strings of the built-in syntax get copied (cheaply, by reference) into the
strings of the rule-defined assertion syntax. The value must be decoded and the
strings prepped, but no further allocations are required beyond this.

### Control Attributes Hacking

There another approach we could use that can be thought of as a modification of
the above: use control attributes to enforce adjacency of lines. We could
define an attribut type called `postalAddressSubstringGroup` having a syntax of
`INTEGER (0..MAX)`, which would describe who many subsequent substrings of the
`SubstringAssertion` originate from the same asserted `PostalAddress` substring.
Then, the matching rule implementation could require all of those substrings to
appear in adjacent and contiguous (if the end of a line matched one substring,
the start of the next line continues to match) before they are consumed as a
"match."

This approach seems to be logically and possibly high-performing, but I think it
would be obnoxious to implement and test.

### Join Built-In Syntax and Value Syntax into Strings

In stating the problem, I posed the question: how do you translate a
`PostalAddress` to an `UnboundedDirectoryString`? This has already been figured
out: there is an LDAP syntax for postal addresses! Each substring of type
`PostalAddress` can get transformed by joining its lines with `$`, just as is
done in the LDAP string representation of postal addresses. If you do a similar
transformation on the strings of the stored postal address, then you can just do
a normal `caseIgnoreSubstringsMatch` using the stringified assertion and value.
This will give you the adjacency and contiguity properties sought earlier
through the use of control attributes.

This elegantly simple approach is exactly what OpenLDAP does, according to
ChatGPT. However, a modification of this approach may be desirable: LDAP
requires escaping logic so that a dollar sign that falls within a line of a
`PostalAddress` is not interpreted as delimiting lines. This escaping logic
requires us to scan strings for dollar signs and backslashes and escape those
with backslashes, which requires allocating a larger string if escapes are
needed. If we can choose a character that cannot appear in
`UnboundedDirectoryString` anyway, we can avoid this problem altogether. One
choice stands out to me, since it was designed for this very purpose: the ASCII
Unit Separator (code point `0x1F`). We can join the lines of the assertion
fragments and the values together using the ASCII unit separator, since this is
a control character that cannot appear in `UnboundedDirectoryString`. Then we
just perform a `caseIgnoreSubstringsMatch` as though these were normal directory
strings.

One huge benefit of doing this is that we'd get to piggyback off of the
constant-time substring search already implemented for
`caseIgnoreSubstringsMatch`. This would be virtually impossible to implement any
other way for `caseIgnoreListSubstringsMatch`.

For what it's worth, ChatGPT said it liked this approach.

### Partial Case: Use a Flag to Modify Behavior

We could use a match flag to choose between joining strings or breaking out the
`PostalAddress` fragments into separate substrings.

## Decision Outcome

I have decided to use the string-joining approach. It is simple, elegant, used
by OpenLDAP, and can easily provide constant-time evaluation. Any performance
concerns I have about it might be moot: it is my experience that naïve
approaches like these tend to perform much better in the Javascript runtime
than more clever approaches. We are basically only incurring the cost of a
string join. This matching rule probably isn't even going to get used that
much, so the performance is probably not much to sweat over.
