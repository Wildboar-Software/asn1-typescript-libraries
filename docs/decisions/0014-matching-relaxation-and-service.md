---
status: accepted
date: 2026-11-03
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 14
---
# Relaxation, Tightening, and Service Administration APIs for Matching

## Context and Problem Statement

I am making a huge breaking change to the X.500 directory matching rules API,
and to avoid making another breaking change in the future, I want this API to be
right this time. One thing I want to consider is whether the matching rule
implementations, whose type signature is `Matcher`, needs to consider things
like relaxation, tightening, mapping-based matching, `extendedArea`, or other
parameters related to X.500 directory service administration as described in
ITU-T Recommendation X.501 (2019).

## Considered Options

Yes or no.

## Decision Outcome

No. Matching rule substitution takes place outside of the definition of
matching rules themselves. Both matching rule substitution and mapping-based
matching come down to some sort of modifying a filter, not modifying the
behavior of matching rules. I had ChatGPT review the specifications and it came
to the same conclusion.
