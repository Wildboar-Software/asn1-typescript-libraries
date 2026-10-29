---
status: accepted
date: 2026-10-27
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 5
---
# Matching Against Entire Attributes Instead of Individual Values

## Context and Problem Statement

X.500 directory matching rule implementations are currently written to compare
an assertion against a single attribute value at a time. Generally, an
evaluation of a matching rule requires some decoding of the asserted value, and
this decoding will have to be re-done for each attribute value. If matching
rule implementations worked over a whole attribute at a time, the cost of
decoding the assertion could be amortized over possibly many attribute values
to be compared.

On the other hand, comparing a single assertion and value at a time is intuitive.

## Considered Options

There are several options.

1. Evaluate a single value at a time.
2. Evaluate a whole attribute at a time.
3. Tolerate both a single value and a whole attribute as inputs.

### Evaluating a Single Value

This approach is very intuitive. There are no loops or boilerplate:
just the pure matching rule implementation.

### Evaluating a Whole Attribute

This approach is more cumbersome. Sometimes internally, a single value is
being compared, perhaps for administrative purposes, like evaluating
password policy, rather than as part of a user operation like a search.
To have to convert the single value to an attribute prior to evaluating a
matching rule would be cumbersome.

### Tolerating Both a Single Value and a Whole Attribute

Matching rule matcher function type signatures could tolerate both a single
attribute value, in the form of an `AttributeTypeAndValue` as well as an entire
`Attribute.` This would make the API user-friendly while still enabling low
overhead use cases.

The drawbacks of this is that:

1. Each matcher function would have to translate an `AttributeTypeAndValue` to
   an `Attribute`. This means more boilerplate code.
2. Each matcher could potentially be de-optimized by the V8 engine as a result
   of receiving arguments of inconsistent types.

## Decision Outcome

I am choosing to tolerate both single values and whole attributes at a time.
The boilerplate in the matcher functions saves us from more boilerplate that
we would likely have to write at every call site anyway. The runtime engine
deoptimization is a speculated scenario, and these functions could have an
"inner" function that stays optimized.

Therefore, type signatures for matchers will look something like this
(based on the current plan):

```typescript
import type { ASN1Element } from "@wildboar/asn1";
import type {
    AttributeTypeAndValue,
    Attribute,
} from "@wildboar/x500/InformationFramework";

type AttributeType = OBJECT_IDENTIFIER;

type EqualityMatcher = (
    assertion: ASN1Element,
    valueOrValues: AttributeTypeAndValue | Attribute,
    getEqualityMatcher?: (attributeType: AttributeType) => EqualityMatcher | undefined,
    flags?: number,
) => boolean | undefined;

type OrderingMatcher = (
    assertion: ASN1Element,
    valueOrValues: AttributeTypeAndValue | Attribute,
    getOrderingMatcher?: (attributeType: AttributeType) => OrderingMatcher | undefined,
    flags?: number,
) => number | undefined;

type SubstringsMatcher = (
    assertion: ASN1Element | FilterItem_substrings_strings_Item[],
    valueOrValues: AttributeTypeAndValue | Attribute,
    getEqualityMatcher?: (attributeType: AttributeType) => EqualityMatcher | undefined,
    flags?: number,
) => boolean | undefined;
```
