---
status: accepted
date: 2026-10-27
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 6
---
# `matchedValuesOnly` Handling

## Context and Problem Statement

The `matchedValuesOnly` extension used in X.500 directory services causes a
directory server to return only the values that contributed to a match in an
operation (which is typically a `search` operation). Filter evaluation, as
provided by the `@wildboar/x500` package, needs some way to return to the
caller which of the values contributed to the match. As the API for matching
rule implementations has recently been planned for breaking changes--in
particular that the matcher functions are going to take entire attributes
rather than individual values at a time--we need some way to return which of
these values contributed to the match. Before these API changes, the return
value of the matcher was sufficient, since there was only a single value.

## Considered Options

Matchers could return a tuple whose first element is the conventional
return value: whether there was a match or not, then the second element
could be an array, `Map`, or some other data structure for returning values.
This is somewhat undesirable because:

1. It requires an object allocation on each return, even if `matchedValuesOnly`
   is not used.
2. The return value, if accidentally used in its entirety, would always
   evaluate to truthy in an expression. We do not want to silently introduce
   bugs like this.

This leaves an _out_ parameter as the alternative. It seems like the correct
data structure for this is an `Attribute`, since that is what would be returned
to the caller.

## Decision Outcome

I have decided that individual matchers are going to take an `Attribute` as a
nullable out parameter. If this parameter is provided, the matcher function is
to iterate over all values of the attribute and push them to the out `Attribute`.
This will require the fields of `Attribute` being made mutable (not `readonly`).
