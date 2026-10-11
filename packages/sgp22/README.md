# sgp22

ASN.1 data structures for GSMA SGP.22 Remote SIM Provisioning.

`Certificate` and `Time` are imported from `@wildboar/pki-stub`.
`SubjectKeyIdentifier` is an `OCTET STRING`. A CRL in `LoadCRLRequest` and
`SegmentedCrlList` is carried as an `ASN1Element`.

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
const e = new EUICCInfo2(
    version(2, 3, 1),
    version(2, 5, 0),
    version(1, 0, 7),
    new Uint8Array([0x01, 0x02, 0x03, 0x04]),
    bits([
        UICCCapability_contactlessSupport,
        UICCCapability_usimSupport,
        UICCCapability_iotminimal,
    ]),
    version(15, 0, 0),
    version(2, 3, 0),
    bits([
        RspCapability_additionalProfile,
        RspCapability_rspServerTestProfileAllowlistCheckSupport,
    ]),
    [new Uint8Array([0xaa, 0xbb, 0xcc, 0xdd])],
    [new Uint8Array([0x11, 0x22, 0x33, 0x44])],
    EUICCInfo2_euiccCategory_basicEuicc,
    bits([PprIds_ppr1, PprIds_ppr2]),
    version(0, 2, 1),
    "SAS-UP-2026",
    new CertificationDataObject("platform-a", "https://dloa.example/registrar"),
    bits([
        EUICCInfo2_treProperties_isDiscrete,
        EUICCInfo2_treProperties_usesRemoteMemory,
    ]),
    "TRE-REF-1",
    [version(2, 1, 0), version(2, 3, 1)],
    1,
    [new Uint8Array([0x55, 0x66])],
    new Uint8Array([0x07, 0x08]),
    version(2, 6, 0),
    new IoTSpecificInfo(),
    new Uint8Array([0x03]),
);
const encoded = _encode_EUICCInfo2(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw ASN.1 compiler outputs using AI
(Grok 4.7) on October 8, 2026.
