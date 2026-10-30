---
status: accepted
date: 2026-10-29
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 11
---
# Handling of Malformed Assertions and Values in Matching Rules

## Context and Problem Statement

Under the current API for implementing X.500 directory matching rules, and for
the API planned in the upcoming breaking release, assertions and values are
passed in undecoded (e.g. as `ASN1Element` or a subclass of it).

Decoding is a fallible process, meaning that both an assertion and a value can
fail to be decoded in the process of evaluating a matching rule.

An invalid assertion encoding is to be handled differently from an invalid
value. An invalid assertion means that none of the subsequent matches will ever
succeed. An invalid value could simply mean that a single value in the
directory's backing data store is corrupted, and the match can still be
evaluated on other values.

Hence, it is desirable to somehow indicate to the caller whether the assertion
or value failed to decode. Currently, failed assertion and value decodings
throw their errors with no way to distinguish which encoding is at fault.

## Decision Outcome

I realized that errors when evaluating values can be caught internally, per
the new API approach, and therefore the only errors that should be propagated
up the call chain should be those associated with decoding the assertion.

The current plan for the matching API is such that, for each attribute, the
assertion is decoded once up-front, then the decoded assertion is used to
evaluate values of the attribute in a loop. For each value evaluation, the
errors get caught and the match is treated as returning `UNDEFINED`. If the
`DEBUG` flag is passed in, the offending attribute type and value index can be
logged to the console. Therefore, the only place where a thrown error can
actually escape the matcher is from decoding the assertion. Hence, the caller
shall treat all errors thrown as errors with decoding the assertions.
