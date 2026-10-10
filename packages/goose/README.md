# Generic Object Oriented Substation Events (GOOSE) Protocol ASN.1

The PDUs and other ASN.1 data types pertaining to IEC 61850 Generic Object
Oriented Substation Events (GOOSE) protocol for smart grids. This includes
functionality for encoding and decoding these data structures as BER.
This module is ESM-only.

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
const allData: Data[] = [
    { array: [{ boolean_: false }, { integer: 7 }] },
    { structure: [{ visible_string: "st" }, { unsigned: 3 }] },
    { boolean_: true },
    { bit_string: new Uint8ClampedArray([1, 0, 1, 1]) },
    { integer: 42 },
    { unsigned: 99 },
    { floating_point: new Uint8Array([8, 0x40, 0, 0, 0]) },
    { real: 1.5 },
    { octet_string: new Uint8Array([0xde, 0xad]) },
    { visible_string: "vis" },
    { binary_time: new Uint8Array([0, 0, 1, 0]) },
    { bcd: 25 },
    { booleanArray: new Uint8ClampedArray([1, 1, 0, 0]) },
    { objId: _OID.fromParts([1, 2, 840, 10066]) },
    { mMSString: "phase" },
    { utc_time: new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0]) },
];
const original = new IECGoosePdu(
    "LD/LLN0$GO$gcb",
    1000,
    "LD/LLN0$dsGOOSE",
    "go-id",
    new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0a]),
    5,
    1,
    true,
    2,
    false,
    allData.length,
    allData,
);
const encoded = _encode_IECGoosePdu(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI
(Grok 4.7) on 9 October 2026.
