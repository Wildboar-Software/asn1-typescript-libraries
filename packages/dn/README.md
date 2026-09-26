# dn

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build dn` to build the library.

## Running unit tests

Run `nx test dn` to execute the unit tests via [Vitest](https://vitest.dev/).

## Should this even be a separate package?

- Would be better with `UnboundedDirectoryString` defined, but not necessary.
- No ability to print `or-address`
  - `pki-stub` already depends on `or-address` though, so this is currently not a loss to include.
- No `PostalAddress`, `UUIDPair`, `FacsimileTelephoneNumber`, or `UnboundedDirectoryString`
  - These are all pretty simple to handle as a one-off, though

RESOLVED: This will be a separate package, namely because it is useful in both X.500 and LDAP.
RESOLVED: _Defer_ including `GeneralName` functionality in this package, because:
- 

## To Do

- [ ] fromString
- [x] toString
- [ ] toKey
- [ ] compare
- [ ] validateString
- [ ] validateEncoding
- [ ] toBerBytes()
- [ ] toDerBytes()
- [ ] getX500RDN() / getLdapRDN() (maybe these should be defined in the specific packages they are used in)
- [ ] toInteropString() (no names + only #hex value syntax)
- [ ] toJSON()
- [ ] fromJSON()
- [ ] isQualifiedCertsCompliant()
- [ ] isIetfRfc4514Portable()
- [ ] toASN1Representation()
- [ ] isRootDseName()
- [ ] isEncodedLength()
- [ ] normalizeEncoding() - (convert all strings to primitive, trim padding, normalize telephone dashes to spaces)
- [ ] atavs iterator
- [ ] customizable delimiter
- [ ] toDnsName()
- [ ] fromDnsName()
- [ ] Type utilities:
  - [ ] Non-empty DN
  - [ ] Non-empty RDN
  - [ ] Multivalued RDN
  - [ ] Case Insensitive String
  - [ ] Case Sensitive String
  - [ ] DN String
  - [ ] LDAPOrderedDN
  - [ ] X500OrderedDN
- [ ] You could actually enforce entire name forms using branded types...
- [ ] fromOID() / toOID()
- [ ] `Name.toOID()`, etc.
- [ ] Does `GeneralName` code belong here too?
  - [ ] Kind of requires `or-address`, which comes with many transitive dependencies.
  - [ ] Would also require `EDIPartyName`
- [ ] Support `uid` (UID     userId (0.9.2342.19200300.100.1.1))
  - This is one of the required attributes in IETF RFC 4514