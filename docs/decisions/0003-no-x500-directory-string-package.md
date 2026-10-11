---
status: accepted
date: 2026-10-26
decision-makers: Jonathan M. Wilbur
consulted: N/A
informed: N/A
authored-by-ai: false
nav_order: 3
---
# Separate Package for Directory Strings

## Context and Problem Statement

Both the `dn` and `gn` packages--which are themselves intended to be a
refactoring--have a use case for X.500 directory string-related code.
For a little background, X.500 directory strings are defined as such
in ASN.1:

```asn1
UnboundedDirectoryString ::= CHOICE {
  teletexString    TeletexString(SIZE (1..MAX)),
  printableString  PrintableString(SIZE (1..MAX)),
  bmpString        BMPString(SIZE (1..MAX)),
  universalString  UniversalString(SIZE (1..MAX)),
  uTF8String       UTF8String(SIZE (1..MAX)) }

DirectoryString{INTEGER:maxSize} ::= CHOICE {
  teletexString    TeletexString(SIZE (1..maxSize,...)),
  printableString  PrintableString(SIZE (1..maxSize,...)),
  bmpString        BMPString(SIZE (1..maxSize,...)),
  universalString  UniversalString(SIZE (1..maxSize,...)),
  uTF8String       UTF8String(SIZE (1..maxSize,...)) }
```

These are used very widely in X.500 directories. Among the standard attributes
defined in X.520, they are the most common attribute syntax, in fact.

They are not dumb data structures: there is functionality (although somewhat
small) that goes along with them:

1. Converting them to a simple native `string`
2. Preparing them for comparison according to the procedures in
   ITU-T Recommendation X.520 (2019), Section 7.
3. Encoding and decoding
4. Determining encoded length
5. ASN.1 display

There could be use case for a helper function that converts `string` into an
`UnboundedDirectoryString` using the `printableString` variant if the input
string uses that limited set of characters and `uTF8String` otherwise.

## Considered Options

The choice here is binary: separate package, or just accept duplicate code.

## Decision Outcome

I decided to accept duplicate code. Perhaps if this were a greenfield project, I
would have started with defining this as a separate package, but it isn't worth
it now. If you look at how directory strings are used in `dn`, we only use
`prepString`. Everything else would be superfluous. If we rule this out, this
leaves only the `gn` as a candidate that might need this package, and with only
one candidate left, there's little point in making a separate package for X.500
directory strings. I accept a small duplication of code.

I may change my mind on this later if more packages arise that need this.
