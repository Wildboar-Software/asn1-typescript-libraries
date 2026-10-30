---
status: accepted
date: 2026-10-30
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 12
---
# Substring Matchers Constant-Time Evaluation of All Substrings

## Context and Problem Statement

X.500 directory substrings matching rules evaluate a combination of asserted
substrings against a value. When not providing constant-time substrings
matching, an obvious implementation detail is for the evaluation of the match to
terminate if a single substring fails to match. Since all substrings have to
match for the overall matching to return `TRUE`, we can normally immediately
return `FALSE` if a single substring fails to match without wasting compute
checking the subsequent substrings.

However, when providing constant-time substrings matching, bailing out early
due to a un-matched substring could disclose (via timing) _how much_ of the
value matched. However, the amount of time spent iterating through substrings
also discloses how large the value is: if the substrings matching bails out
early, the length of the value is less certain to an attacker using a timing
oracle.

## Considered Options

This is a binary decision: if providing constant-time matching, iterate
through all substrings unconditionally, or not.

## Decision Outcome

I have decided to iterate through all substrings, even if a non-final one
failed to match, when providing constant-time matching. The rationale for
this is that an attacker being able to discover the contents of a string
is more harmful than their ability to discover the length. In addition to
this, discovering the contents of the string could also probably help them
discover the length anyway.
