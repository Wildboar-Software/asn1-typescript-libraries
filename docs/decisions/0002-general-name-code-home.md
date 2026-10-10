---
status: deferred
date: 2026-09-24
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 2
---
# GeneralName in the `dn` Package, `pki-stub` Package, or a New `gn` Package

## Context and Problem Statement

As decided in [ADR-0001](./0001-separate-dn-package.md), there will be a
separate `@wildboar/dn` package providing functionality for all things
related to X.500 directory names.

ITU-T Recommendation X.509 describes a broader type called `GeneralName`.
It's ASN.1 definition looks like this:

```asn1
GeneralName ::= CHOICE {
  otherName                  [0]  INSTANCE OF OTHER-NAME,
  rfc822Name                 [1]  IA5String,
  dNSName                    [2]  IA5String,
  x400Address                [3]  ORAddress,
  directoryName              [4]  Name,
  ediPartyName               [5]  EDIPartyName,
  uniformResourceIdentifier  [6]  IA5String,
  iPAddress                  [7]  OCTET STRING,
  registeredID               [8]  OBJECT IDENTIFIER,
  ... }

OTHER-NAME ::= TYPE-IDENTIFIER

EDIPartyName ::= SEQUENCE {
  nameAssigner  [0]  UnboundedDirectoryString OPTIONAL,
  partyName     [1]  UnboundedDirectoryString,
  ... }
```

`Name` is itself another `CHOICE` type that has `RDNSequence` as one of its
alternatives. So basically, X.500 directory names are just one choice in
this much broader type that represents virtually any kind of name.

For this data type, we will need functionality for printing it, parsing it,
hashing it (creating hash keys), comparing them, and perhaps even ordering
them, checking membership in subtrees of them, etc. This data type is very
widely used by many specifications, including in X.509 extensions.

## Considered Options

I considered keeping `GeneralName` in `pki-stub`, but this means that the
functionality defined for this data type gets buried in `pki-stub` with
everything else, and the things that only import `GeneralName` have to
import a lot more code needlessly.

I considered putting `GeneralName` in the `dn` package, but this would bloat
that package a lot, considering that `GeneralName` isn't used in LDAP (other
than in X.509 certificates, CRLs, etc.). `GeneralName` requires `or-address`,
which would mean gigantic transitive dependencies for `ldap`--not very
lightweight indeed. `pki-stub` and `x500`, on the other hand, already have
all the code for `ORAddress` and `PresentationAddress` (recently in the form
of the `or-address` and `presentation-address` packages), so there is no loss
in doing this.

I considered putting `GeneralName` and all related functionality in a separate
`gn` package. The drawbacks to this are primarily dependency depth. Currently,
to use the `x500` package, you have these imports (after I finish moving `dn`
to its own package):

```
x500---> pki-stub---> or-address --> presentation-address --> nsap-address
    `--> ldap    `--> dn
```

(All of those depend on `@wildboar/asn1`, except `nsap-address`.)

After putting `GeneralName` in a separate `gn` package, it will look like this:

```
x500---> pki-stub --> gn --> dn --> or-address --> presentation-address --> nsap-address
    `--> ldap
```

In other words, one has to drill down _five_ dependencies currently to reach
the deepest terminal dependency; it will be _seven_ dependencies deep after
this change. I don't like that from a security perspective, because it
obfuscates changes to the code. I guess that's what SBOMs and Sigstore are
for, huh?

Still, I think this deep nesting is not frivolous: it seems to reflect the
reality of X.500 data structures. `GeneralName` is a very central data
structure that is used very widely, and there is a lot of functionality that
has to be implemented specifically for it. I think the choice is obvious.

## Decision Outcome

I will put `GeneralName` in its own separate `gn` package.
