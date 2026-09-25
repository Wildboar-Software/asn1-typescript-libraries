---
status: accepted
date: 2026-09-24
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 1
---
# Separate Package for X.500 Distinguished Name-Related Code

## Context and Problem Statement

Both `@wildboar/pki-stub` and `@wildboar/ldap` need code for printing, parsing,
comparing, hashing, etc. the following X.500-related types:

- `AttributeTypeAndValue`
- `RelativeDistinguishedName`
- `DistinguishedName` / `RDNSequence` (identical syntax, but `DistinguishedName`
  is interpreted as starting from the root)
- `Name`
- Maybe even `GeneralName` too

Over the years, I have implemented a lot of similar code between these packages
and very recently, I have accidentally imported `@wildboar/ldap` into
`@wildboar/pki-stub` to meet some need that turns out to be common to both.

Further, this data type is so fundamental that it seems to deserve its own
package with lots of good features, testing, and so that it does not get
"buried" in a much larger package like `@wildboar/pki-stub` or `@wildboar/x500`.

## Considered Options

I considered keeping them separate, and there may be performance benefits to
having a separate implementation for LDAP: for one, LDAP represents a DN as
UTF-8 encoded in an `OCTET STRING`. Here is the ASN.1, in fact:

```asn1
LDAPString ::= OCTET STRING -- UTF-8 encoded,

-- [RFC4512]
LDAPDN ::= LDAPString -- Constrained to <distinguishedName>

-- [RFC4514]
RelativeLDAPDN ::=
  LDAPString -- Constrained to <name-component>
```

LDAP does not even define an `AttributeTypeAndValue` type, so we would have to
define some other functionally duplicated type to have something to decode
LDAP DNs into and vice versa.

## Decision Outcome

I am going to define a separate `@wildboar/dn` package that does all things
related to X.500 directory names.
