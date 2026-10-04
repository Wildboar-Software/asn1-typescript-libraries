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

- [ ] toBerBytes()
- [ ] toDerBytes()
- [x] toInteropString() (no names + only #hex value syntax)
- [ ] toASN1Representation()
- [ ] isRootDseName()
- [ ] normalizeEncoding() - (convert all strings to primitive, trim padding, normalize telephone dashes to spaces)
- [ ] atavs iterator
- [ ] `Name.toOID()`, etc.
- [ ] Support `uid` (UID     userId (0.9.2342.19200300.100.1.1))
  - This is one of the required attributes in IETF RFC 4514
