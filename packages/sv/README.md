# IEC 61850 Sampled Values Protocol

ASN.1 data structures for the `IEC61850` module (`SampledValues`, `SavPdu`,
and `ASDU`) describing a protocol for sampling analog values. This module is
ESM-only.

## Example Usage

```typescript
cosnt asdu = new ASDU(
    "SV-IED/LLN0",
    "DataSet1",
    4000,
    1,
    new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0a]),
    ASDU_smpSynch_global,
    4800,
    new Uint8Array([0x00, 0x01, 0xff, 0x7f]),
    ASDU_smpMod_samplesPerNormalPeriod,
    new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05, 0x06]),
);
const original: SampledValues = {
    savPdu: new SavPdu(1, [asdu]),
};
const encoded = _encode_SampledValues(original, $.BER).toBytes();
```

## Documentation

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

## ASN.1 Compiler

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

This package was onboarded from the raw Wildboar ASN.1 compiler outputs using
AI (Grok 4.7) on 7 October 2026.
