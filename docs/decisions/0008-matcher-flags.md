---
status: accepted
date: 2026-10-27
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 8
---
# Flags for Matching Rule Implementations ("Matcher Functions")

## Context and Problem Statement

X.500 directory matching rules generally are supposed to be deterministic in how
they match assertions against attribute values. However, there are compelling
real-world use cases for small modifications to behavior of these matching rules.

## Considered Options

Matching rules could be deterministic, but a `flags` parameter that is a bit
field encoded on a 32-bit integer is a precedent deeply established in Linux
system calls.

## Decision Outcome

Javascript `number` supports bitwise operations within the 32-bit range, even
though larger integers can be represented.

The following bit flags will be defined:

- `NO_FLAGS` (`0`). This is just a convenience constant for readability.
- `USED_FOR_NAME` (`1 << 0`). If set, the matching rule will require the
  assertion and value to have identical syntaxes, which is a requirement for
  matching rules used for name matching, per ITU-T Recommendation X.501 (2019),
  Section 8.9.5. In other words, this flag turns off any tolerance for
  heterogeneous attribute syntaxes, such as comparing a
  `FacsimileTelephoneNumber` to a `TelephoneNumber.
- `ASSERTION_NORMALIZED` (`1 << 1`). If set, the matching rule will assume
  that any normalization needed for the assertion, such as the string
  preparation described in Section 7 of ITU-T Recommendation X.520 (2019),
  is already done. This is typically done as a performance optimization,
  since the normalization typically incurs a non-negligible computational
  cost.
- `VALUE_NORMALIZED` (`1 << 2`). Exactly like `ASSERTION_NORMALIZED`, except
  it relates to the attribute value rather than the asserted value.
- `DEBUG` (`1 << 3`). If set, debugging of matching rules is enabled. This
  isn't meant to be so verbose as to log every matching outcome, but enough
  to discover unusual situations such as malformed values or infrequently
  used `CHOICE` alternatives.
- `HIGH_WORK_BUDGET` (`1 << 4`). If set, and if the matching rule uses some
  sort of computationally expensive logic that is limited by some number
  (e.g. iterations, array size, etc.), relax that number to accommodate bigger
  or more complex values, despite the higher risk of denial-of-service or
  long-running operations.
- `ASSERTION_VALIDATED` (`1 << 5`). Whether the assertion was already
  validated. This is different from being normalized as in the case
  indicated by `ASSERTION_NORMALIZED`, but normalization often results
  in or requires validation.
- `VALUE_VALIDATED` (`1 << 6`). Like `ASSERTION_VALIDATED`, but for the
  value.
- `CONSTANT_TIME` (`1 << 7`). Request constant-time techniques to compare
  values. Used in security contexts.
