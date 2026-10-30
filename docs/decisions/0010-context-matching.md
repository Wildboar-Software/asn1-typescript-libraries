---
status: accepted
date: 2026-10-29
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 10
---
# Context Matching Implementation

## Context and Problem Statement

The recently planned changes to the `EqualityMatcher` type means that it cannot
be used for matching context values anymore, since it explicitly makes
reference to attribute types, and takes a `matchedValues` out parameter of type
`Attribute` for providing `matchedValuesOnly` service. Such a type signature no
longer makes sense for comparing context values.

## Considered Options

1. Whether to pass in the context type OID or not.
2. Whether `fallback` needs to be considered.
3. Whether to pass in the whole context object or not.

## Decision Outcome

This was the type signature decided upon:

```typescript
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";

type AttributeType = OBJECT_IDENTIFIER;

type ContextMatcher = (
    assertion: ASN1Element,
    values: IteratableIterator<ASN1Element>,
    getEqualityMatcher?: (attributeType: AttributeType) => EqualityMatcher | undefined,
    flags?: number,
) => boolean | undefined;
```

Regarding the options considered above:

1. Context matchers have a one-to-one relation to context types, unlike
   matching rules and attribute types, so there is no need to pass in the
   context type OID.
2. `fallback` does not come into play until all contexts of that type have
   failed to match, so context matchers do not need to consider this.
3. In light of the prior two points, the whole context object does not need to
   be passed in either: all that remains is the values.

In addition to this, the values do not need to be an array. Anything iterable
will suffice.

The `getEqualityMatcher` function is passed in for the purposes of comparing
distinguished names in context values. This is needed for evaluating the
`assignmentContext` defined for use in SS7 INAP, and probably other context
types I will define myself in the future.
