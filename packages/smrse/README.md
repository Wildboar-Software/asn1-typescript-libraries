# Short Message Relay Service Element (SMRSE) in TypeScript

ASN.1 data structures for the `SMRS` module Short Message Relay Service Element
(SMRSE) from
[ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
(GSM 03.47), in the Nokia SMRP profile of that report.
This module is ESM-only. Import from `@wildboar/smrse` or `@wildboar/smrse/SMRS`.

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

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI
(Cursor Grok 4.7) on 7 October 2026.

## Usage

```typescript
const r = new RPDataMT(
    true,
    false,
    42,
    address(SMS_Address_address_type_internat_number, SMS_Address_numbering_plan_iSDN_numbering, [0x21, 0x43, 0x65]),
    address(SMS_Address_address_type_national_number, SMS_Address_numbering_plan_national_numbering, [0x87, 0x65]),
    new Uint8Array([0x01, 0x02, 0x7f]),
    withOptionals
        ? address(SMS_Address_address_type_internat_number, SMS_Address_numbering_plan_iSDN_numbering, [0x19, 0x32])
        : undefined,
    withOptionals ? 7 : undefined,
);
const encoding = _encode_RPDataMT(original, $.BER).toBytes();
```
