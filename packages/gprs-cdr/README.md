# GPRS and 3GPP charging data record (CDR) ASN.1 in TypeScript

[3GPP TS 32.298](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1915)
Charging Data Records (CDR) ASN.1 data structures in TypeScript. This module is
ESM-only.

Import a module from its subpath, for example
`@wildboar/gprs-cdr/GPRSChargingDataTypes`. The package root does not re-export
every symbol. Assignments that are identical across modules are implemented in
`@wildboar/gprs-cdr/shared` and re-exported from each module that defines them.

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
const location = new LocationAreaAndCell(
    Uint8Array.from([0x00, 0x01]),
    Uint8Array.from([0x00, 0x2a]),
    Uint8Array.from([0x32, 0xf4, 0x10]),
);
const original = new MOCallRecord(
    RecordType_moCallRecord,
    Uint8Array.from([0x21, 0x43, 0x65]),
    Uint8Array.from([0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88]),
    Uint8Array.from([0x91, 0x21, 0x43, 0x65, 0x87]),
    Uint8Array.from([0x91, 0x11]),
    Uint8Array.from([0x91, 0x22]),
    undefined,
    undefined,
    undefined,
    Uint8Array.from([0x91, 0x44, 0x55]),
    undefined,
    undefined,
    location,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    Uint8Array.from([0x20, 0x26, 0x10, 0x20, 0x12, 0x00, 0x00, 0x00, 0x00]),
    undefined,
    undefined,
    95,
    undefined,
    undefined,
    undefined,
    undefined,
    CauseForTerm_normalRelease,
    undefined,
    Uint8Array.from([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08]),
);
const encoded = _encode_MOCallRecord(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI (Grok 4.7)
on 20 October 2026.
