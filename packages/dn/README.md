# X.500 Directory / LDAP Distinguished Names

This is a package for all things related to X.500 directory names, notably
including distinguished names (DNs). This package defines four principal
data types:

- `AttributeTypeAndValue` (ATAV) - A single attribute type and one value
- `RelativeDistinguishedName` (RDN) - An array of ATAVs that uniquely identifies an entry within a prefix
- `DistinguishedName` (DN) - An array of RDNs that globally uniquely identifies an entry
- `Name` - A directory name, which may be (and usually is) a DN

For each of the above (with some exceptions) this package defines functions for:

- Printing according to
  [IETF RFC 4514](https://datatracker.ietf.org/doc/html/rfc4514)
- Parsing according to
  [IETF RFC 4514](https://datatracker.ietf.org/doc/html/rfc4514)
- Escaping and unescaping according to
  [IETF RFC 4514](https://datatracker.ietf.org/doc/html/rfc4514)
- Validating strings without decoding according to [IETF RFC 4514]
- Printing textual ASN.1 value notation
- Converting to and from JSON
- Converting to JSON Encoding Rules (JER)
- Decoding and encoding using the Basic Encoding Rules (BER)
  or Distinguished Encoding Rules (DER)
- Determining the BER encoded length without actually encoding
- Comparing one-to-one efficiently with few (if any) allocations
- Comparing many-to-many efficiently by converting ATAVs, RDNs, DNs, etc.
  to hashable string "keys"

Some functionality specific to `RDNSequence` and `Name` are:

- Determining if an `RDNSequence` (DN) or `Name` refers to the Root DSE
- Validating that all distinguished values are only of
  [IETF RFC 4514](https://datatracker.ietf.org/doc/html/rfc4514)-recognized
  attribute types
- Validating that all distinguished values are only of
  [IETF RFC 3739](https://datatracker.ietf.org/doc/html/rfc3739)-recognized
  attribute types (usable in qualified certificates)
- Converting `RDNSequence` (DN) or `Name` to and from a Uniform Resource Name
  (URN) per ITU-T Recommendation X.520 (2019), Annex F.3.
- Converting `RDNSequence` (DN) or `Name` to and from an Object Identifier
  per ITU-T Recommendation X.660 (2004) or ITU-T Recommendation X.520 (2019),
  Annex F.
- Converting `RDNSequence` (DN) or `Name` to and from a DNS Name (where each
  RDN is a single `domainComponent` value) per
  [IETF RFC 2247](https://datatracker.ietf.org/doc/html/rfc2247).

This package also exports the string preparation functionality as described in
ITU-T Recommendation X.520 (2019), Section 7.

This package also defines branded types (and related type guards and utilities)
for:

- Differentiating between ascending or descending-order RDN sequences / DNs
- Enforcing particular name forms at compile time: for example, ensuring that
  an RDN consists of only a single `commonName` distinguished value.
- Enforcing particular DN structures at compile time, including both length and
  name forms of all RDNs within it.

## Should this even be a separate package?

- No `PostalAddress`, `UUIDPair`, `FacsimileTelephoneNumber`, or `UnboundedDirectoryString`
  - These are all pretty simple to handle as a one-off, though

## To Do

- [ ] `oidC2` _can_ appear in the second RDN.
- [ ] Use newer `@wildboar/asn1`
- [x] Ensure everything is exported.
- [ ] Export most ATAV functions as methods on ATAV
- [x] README docs
- [ ] README showcase
- [ ] `package.json` details
- [ ] JSR publication
- [ ] Stricter Typescript
