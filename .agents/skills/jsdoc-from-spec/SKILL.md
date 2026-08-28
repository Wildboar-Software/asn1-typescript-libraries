---
name: jsdoc-from-spec
description: Add JSDoc details from relevant technical specifications
---

## When to Use

This is only to be used when invoked by a human explicitly.

## Instructions

The user should provide you with specification files, or a URL from whence they
can be fetched. The user will also name a package (or multiple packages) within
this repository to which these specifications apply.

You are to read these specifications (after fetching them, if necessary), and
apply documentation as JSDoc to the types, symbols, values, exports, fields of
classes and interfaces, etc. that are defined in the named packages. If the
user specifies specification names using identifiers, such as "IETF RFC 1234,"
you may fetch them without the user providing a URL if you know how to.

Some rules for this:

1. Do not dump fragments of ASN.1 in prose with no formatting. Small,
   single-line ASN.1 expressions are fine as long as you enclose them in
   backticks so that the markdown renders in monospace font. All ASN.1
   assignments already have their ASN.1 copied into the JSDoc in a codefence, so
   you do not need to add the whole ASN.1 definition for everything. If you must
   refer to other ASN.1 for some reason, and if it is multiline or appreciably
   larger in some way, put it in a codefence with language "asn1."
2. Do not restate the obvious, such as adding a sentence that just says the name
   of the symbol and its type, for example. The package user can already
   identify this, so this JSDoc would just be redundant.
3. Do not delve into the basics of ASN.1. Assume the user already knows ASN.1
   well. You do not have to tell them to omit default values from the encodings
   when encoding as DER, for example. Keep your documentation specific to the
   subject matter at hand.
4. In descriptions of structured types, do not just describe the fields.
   Field-level JSDoc belongs on the fields, not on the class or interface
   documentation. And again, field-level JSDoc does not need to mention the type
   of the field.
5. If you do not know something, and if the specification is missing the detail,
   do NOT speculate. It's fine if you do not know something or can't find some
   information. You can even say in the docs if some information is missing from
   specifications, too. Just do NOT speculate or lie. It is far worse to get the
   JSDoc wrong than to have scant detail.
6. In referencing the specifications, include section numbers. If section
   numbers are not available, then use section titles or page numbers. It's even
   better if you can include links. I know a lot of IETF RFCs are now rendered
   as HTML and you can refer to sections of them by a URL with a hash.
7. The JSDoc can be somewhat terse. You do not have to generate a huge wall-text
   of "documentation" for every symbol. I am not asking you to check a box; I
   want actually good, value-dense documentation.
8. Try to keep lines no longer than 80 columns / characters. It is okay to go
   over this if you are rendering a table or including a long URL or some
   identifier that cannot be gracefully broken across lines, or if you have
   some other good excuse.

To clarify the purpose of this: I want documentation that makes it so that the
user does not have to dig through specifications. The goal is for relevant
information from the specifications to live alongside the Typescript symbols as
JSDoc. It is time consuming and annoying for users to have to open up RFC 4511
and search for "PartialAttribute" to find out how it should be used, what data
should be put in it, etc. The JSDoc should basically contain the "business
logic," if you will.
