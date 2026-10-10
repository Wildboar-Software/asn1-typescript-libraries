# Z39.50 ASN.1 in TypeScript

ASN.1 data structures for ANSI/NISO Z39.50, compiled from the modules in
`doc/`. This module is ESM-only.

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).

## Example Usage

```typescript
const added = new Date(Date.UTC(2026, 9, 9, 12, 0, 0));
const updated = new Date(Date.UTC(2026, 9, 1, 0, 0, 0));
const original = new DatabaseInfo(
    new CommonInfo(added, undefined, undefined, "eng", undefined),
    "catalog",
    null,
    ["cat", "opac"],
    [new IconObject_Item({ ianaType: "image/png" }, new Uint8Array([0x89, 0x50, 0x4e, 0x47]))],
    true,
    true,
    [text("eng", "Library catalog")],
    [[text("eng", "books")], [text(undefined, "serials")]],
    [text("eng", "Bibliographic records")],
    ["authorities"],
    ["books", "serials"],
    undefined,
    undefined,
    { actualNumber: 1200 },
    [text("eng", "title")],
    512,
    8192,
    undefined,
    undefined,
    updated,
    new IntUnit(7, new Unit("SI", { string_: "time" }, { numeric: 86400 }, undefined)),
    [text("eng", "1900-2026")],
    false,
    [text("eng", "Copyright 2026")],
    undefined,
    new ContactInfo("Ada Lovelace", [text("eng", "Producer")], undefined, "ada@example.com", undefined),
    undefined,
    undefined,
    new AccessInfo(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ["SI"],
    ),
);
const encoded = _encode_DatabaseInfo(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw ASN.1 compiler outputs using AI
(Grok 4.7) on October 9, 2026.
