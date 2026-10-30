---
status: accepted
date: 2026-10-29
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 9
---
# Matching Restriction Handling

## Context and Problem Statement

In X.500 directories, matching restrictions can be used in service administrative
areas to restrict aspects of matching in search filters. I need to determine if
I need to pass in matching restrictions to individual matcher implementations
for the purposes of deciding upon the next generation matching API.

## Considered Options

This is essentially a binary decision: pass in matching restrictions or not.

## Decision Outcome

I have decided not to pass in matching restrictions. The X.500 specifications
say that matching restrictions are checked during search validation, before any
entries are ever validated. This is specified in X.501 §16.12 and X.511 §15.4,
2019 editions.
