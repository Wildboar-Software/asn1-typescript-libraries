---
id: intro
title: Introduction
---

This site documents the usage of ASN.1 libraries produced by
[Wildboar Software](https://wildboarsoftware.com/en)'s proprietary
[ASN.1 Compiler](https://wildboarsoftware.com/en/asn1-compilation). This
compiler takes ASN.1 modules and produces TypeScript definitions and functions
for encoding and decoding ASN.1 data structures using the
[asn1-ts](https://www.npmjs.com/package/asn1-ts) TypeScript library. This
compiler supports compilation of value assignments, type assignments, value set
assignments, object class assignments, object assignments, and object set
assignments--in other words, the entirety of an ASN.1 file can be compiled into
directly useful TypeScript.

For _some_ of the published TypeScript ASN.1 libraries, such as
`@wildboar/x500`, the symbols produced from compilation are not exported from
the index. They must be "deep imported" (e.g.
`module-name/src/lib/modules/AuthenticationFramework/TBSCertificate.ta`). For
each of these libraries, the symbols produced from ASN.1 module compilation will
be exported under `src/lib/modules`, then further namespaced by the module name.
There may be other things exported from a library other than just the compiled
ASN.1 modules; for instance, in `@wildboar/x500` there are functions available
that implement X.500 matching rules.

Note that the files produced by compilation end with one of these extensions:

- `.va.ts` which is a compiled ASN.1 `ValueAssignment`
- `.ta.ts` which is a compiled ASN.1 `TypeAssignment`
- `.oa.ts` which is a compiled ASN.1 `ObjectAssignment`
- `.oca.ts` which is a compiled ASN.1 `ObjectClassAssignment`
- `.vsa.ts` which is a compiled ASN.1 `ValueSetAssignment`
- `.osa.ts` which is a compiled ASN.1 `ObjectSetAssignment`

This is done because some file systems are case-insensitive, but ASN.1 allows
symbols within a module to differ only by casing. (In other words, you could
have a value assignment for `foo` and a type assignment for `Foo` within the
same ASN.1 module.) Appending the "pre-extension" based on the assignment type
mitigates any potential name collision.

In file names, hyphens are kept, but in the actual exported symbols in each
file will have their hyphens replaced with underscores (because hyphens are not
valid in identifier names in TypeScript / JavaScript.)
