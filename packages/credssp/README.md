# Credential Security Support Provider (CredSSP) in TypeScript

ASN.1 data structures based on the ASN.1 definitions for the Credential
Security Support Provider Protocol ([MS-CSSP]). This module is ESM-only.

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
const original = new TSRequest(
    6,
    [
        new NegoData_Item(new Uint8Array([0x60, 0x01])),
        new NegoData_Item(new Uint8Array([0xa0, 0x03, 0x01, 0x01, 0xff])),
    ],
    new Uint8Array([0x01, 0x02, 0x03, 0x04]),
    new Uint8Array([0xaa, 0xbb, 0xcc]),
    0,
    new Uint8Array([
        0x10, 0x11, 0x12, 0x13,
        0x14, 0x15, 0x16, 0x17,
    ]),
);
const encoded = _encode_TSRequest(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw Wildboar ASN.1 compiler outputs using
AI (Cursor Grok 4.7) on 10 October 2026.
