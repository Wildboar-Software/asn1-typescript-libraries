# dn

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build dn` to build the library.

## Running unit tests

Run `nx test dn` to execute the unit tests via [Vitest](https://vitest.dev/).

## Should this even be a separate package?

- No `PostalAddress`, `UUIDPair`, `FacsimileTelephoneNumber`, or `UnboundedDirectoryString`
  - These are all pretty simple to handle as a one-off, though

## To Do

- [ ] toBerBytes()
- [ ] toDerBytes()
- [x] toInteropString() (no names + only #hex value syntax)
- [x] toASN1Representation()
- [ ] isRootDseName()
- [ ] normalizeEncoding() - (convert all strings to primitive, trim padding, normalize telephone dashes to spaces)
- [ ] atavs iterator
- [ ] `Name.toOID()`, etc.
- [ ] Support `uid` (UID userId (0.9.2342.19200300.100.1.1))
  - This is one of the required attributes in IETF RFC 4514
