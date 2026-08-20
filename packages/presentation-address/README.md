# OSI Presentation Address in TypeScript

TypeScript implementation of the ASN.1 data structure for `PresentationAddress`
as defined in the `SelectedAttributeTypes` ASN.1 Module defined by the
[International Telecommunication Union's (ITU)](https://www.itu.int/en/Pages/default.aspx)
[recommendation X.520](https://www.itu.int/rec/T-REC-X.520/en), as well as
related functionality for printing, parsing, and comparing presentation
addresses according.

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

This library only implements the ASN.1 data structures and PDUs defined in these
specifications.

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).

## Usage

This module is mostly useful for parsing and printing `PresentationAddress`
values as
[IETF RFC 1278](https://datatracker.ietf.org/doc/html/rfc1278) strings.

Here is a showcase of a few ways of displaying `PresentationAddress`:

```typescript
import { PresentationAddress } from "@wildboar/presentation-address";
// If using the npm import, this would be: import { PresentationAddress } from "presentation-address";

const input = '"1234"/"1234"/"1234"/URL+0001+https://example.com';
const paddr = PresentationAddress.fromRfc1278String(input);
expect(paddr.toRfc1278String()).toEqual(input);
expect(paddr.toASN1String()).toBe("{ pSelector '31323334'H, sSelector '31323334'H, tSelector '31323334'H, nAddresses { 'FF000168747470733A2F2F6578616D706C652E636F6D'H } }");
expect(paddr.toString()).toEqual(input);
expect(paddr.toJSON()).toEqual({
    pSelector: '31323334',
    sSelector: '31323334',
    tSelector: '31323334',
    nAddresses: [ 'ff000168747470733a2f2f6578616d706c652e636f6d' ],
});
expect(paddr.toHexadecimalJER()).toEqual({
    pSelector: '31323334',
    sSelector: '31323334',
    tSelector: '31323334',
    nAddresses: [ 'ff000168747470733a2f2f6578616d706c652e636f6d' ],
});
expect(paddr.toBase64JER()).toEqual({
    pSelector: 'MTIzNA==',
    sSelector: 'MTIzNA==',
    tSelector: 'MTIzNA==',
    nAddresses: [ '/wABaHR0cHM6Ly9leGFtcGxlLmNvbQ==' ],
});
```

For each of the above string displays, there is an equivalent function to parse
those strings back into a `PresentationAddress`, except for `toASN1String()`:
that's a one-way street.

And you can compare `PresentationAddress` values too:

```typescript
const selector = new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]);
const nsap1 = new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]);
const nsap2 = new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]);
const paddr1 = new PresentationAddress(
    selector,
    selector,
    selector,
    [nsap1, nsap2],
);
const paddr2 = new PresentationAddress(
    selector,
    selector,
    selector,
    [nsap2, nsap1],
);
// These match despite reversed N-addresses.
// They would not match if selectors differed or if N-addresses differed.
expect(paddr1.isNaivelyExactly(paddr2)).toBe(true);
paddr1.nAddresses.pop();
// presentation address #1 is still a subset of #2 because it has a subset of
// the N-addresses and identical selectors.
expect(paddr1.isNaivelySubsetOf(paddr2)).toBe(true);
```

Finally, you can encode `PresentationAddress` to Distinguished
Encoding Rules (DER) encoding and decode it from Basic Encoding Rules (BER).
(DER is just a more strict, simplified variation of BER, so the encodings
produced can be reversed by this module's decoding functions.)

```typescript
const paddr = new PresentationAddress(
    new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
    new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
    new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
    [
        new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
    ],
);
const encoding = paddr.toX690Bytes();
const decoded = PresentationAddress.fromX690Bytes(encoding);
expect(decoded.isNaivelyExactly(paddr)).toBe(true);
```

## This Module

Unit test coverage is close to 100% of all lines, functions, and branches. Some
of the branches not tested are trivial error handling branches or even thought
to be unreachable. This module is written in Typescript with the strictest
settings.

This module is ESM-only. I will not publish a CommonJS version. Please consider
migrating to using ESM if you are not.

I believe this module will work on all Javascript runtimes, but it does assume
the availability of `Buffer`.

## AI Usage Statement

This code was written by a human, with some assistance from Cursor IDE. I would
say about 90% of the code in this module was written by a real human.
