# QSIG Supplementary Service PDUs in TypeScript

ASN.1 data structures and PDUs for the QSIG ISDN signalling protocol
described in ECMA specifications by [ECMA International](https://ecma-international.org/).
This module is ESM-only.

Import a module subpath such as `@wildboar/qsig/PSS1-Service-APDUs-asn1-97`.
`ACSE-1` and `Remote-Operations-Information-Objects` are not entry points.
Symbols taken from those modules (`ACSE-apdu`, `OPERATION`, `ERROR`, and `Code`) are re-exported from `@wildboar/acse` and `@wildboar/rose`.

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
import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Address,
    type PartyNumber,
    NumberScreened,
    PublicPartyNumber,
    PublicTypeOfNumber,
    ScreeningIndicator,
} from "@wildboar/qsig/Addressing-Data-Elements-asn1-97";
import { Extension } from "@wildboar/qsig/Manufacturer-specific-service-extension-class-asn1-97";
import {
    DiversionReason,
    SubscriptionOption,
    callRerouteing_ArgumentType,
    _decode_callRerouteing_ArgumentType,
    _encode_callRerouteing_ArgumentType,
} from "@wildboar/qsig/Call-Diversion-Operations-asn1-97";

const called: PartyNumber = { unknownPartyNumber: "15551212" };
const original = new callRerouteing_ArgumentType(
    DiversionReason.cfb,
    DiversionReason.cfnr,
    new Address(called, { nSAPSubaddress: Uint8Array.from([0x01, 0x02, 0x03]) }),
    2,
    Uint8Array.from([0x04, 0x03, 0x80, 0x90, 0xa3]),
    { presentationAllowedAddress: called },
    SubscriptionOption.notificationWithDivertedToNr,
    { nSAPSubaddress: Uint8Array.from([0xaa, 0xbb]) },
    {
        presentationAllowedAddress: new NumberScreened(
            {
                publicPartyNumber: new PublicPartyNumber(
                    PublicTypeOfNumber.internationalNumber,
                    "12125551212",
                ),
            },
            ScreeningIndicator.networkProvided,
        ),
    },
    { namePresentationAllowed: { namePresentationAllowedSimple: Uint8Array.from([0x41, 0x6e, 0x6e]) } },
    { presentationRestricted: null },
    { nameNotAvailable: null },
    { namePresentationAllowed: { namePresentationAllowedSimple: Uint8Array.from([0x42, 0x6f, 0x62]) } },
    {
        multiple: [
            new Extension(ObjectIdentifier.fromString("1.2.3"), $._encodeNull(null, $.BER)),
            new Extension(ObjectIdentifier.fromString("1.2.4"), $._encodeNull(null, $.BER)),
        ],
    },
);
const encoded = _encode_callRerouteing_ArgumentType(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from raw ASN.1 compiler outputs using AI
(Grok 4.7) on 20 October 2026.
