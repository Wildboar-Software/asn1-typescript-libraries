---
status: accepted
date: 2026-10-27
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 7
---
# `checkOverspecified` / `overspecFilter` Handling

## Context and Problem Statement

X.500 directories have a user-facing service provided as an extension called
`checkOverspecified`. If supported, and if a `search` operation returns no
results, the directory server may return an "overspecified filter" that contains
only filter items that have matched some entry. As ITU-T Recommendation X.511
describes it:

> It consists of the filter supplied in the search argument with those elements of
> the filter that succeeded in matching some omitted entries. The actual procedure
> for generating the overspecFilter is a local matter.

Since filter evaluation is provided by `@wildboar/x500`, it is desirable for
this package to provide some means for determining which filter items matched
at least one candidate entry in the search.

## Considered Options

As I see it, there are broadly two options:

1. Each `evaluateFilter` recursion can construct a "mirror filter" consisting of
   only the filter items that have contributed to the match.
2. The filter items that have matched can be indexed by reference in a `Set`. In
   other words, add a filter item to a `Set<FilterItem>` if it ever matches an
   entry, and, at the end, the overspec filter can be constructed by preserving
   only the filter items of the original filter that have matched.

## Decision Outcome

Approach two seems like the obvious choice. It is far less complicated, and
incurs a lower cost per filter evaluation, and only incurs the cost of
constructing the `overspecFilter` if the search actually returns zero results.
