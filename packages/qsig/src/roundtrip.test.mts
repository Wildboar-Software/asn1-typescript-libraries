import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Address } from "./lib/modules/Addressing-Data-Elements-asn1-97/Address.ta.mjs";
import { NumberScreened } from "./lib/modules/Addressing-Data-Elements-asn1-97/NumberScreened.ta.mjs";
import { PublicPartyNumber } from "./lib/modules/Addressing-Data-Elements-asn1-97/PublicPartyNumber.ta.mjs";
import { PublicTypeOfNumber } from "./lib/modules/Addressing-Data-Elements-asn1-97/PublicTypeOfNumber.ta.mjs";
import { ScreeningIndicator } from "./lib/modules/Addressing-Data-Elements-asn1-97/ScreeningIndicator.ta.mjs";
import { Extension } from "./lib/modules/Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
import { DiversionReason } from "./lib/modules/Call-Diversion-Operations-asn1-97/DiversionReason.ta.mjs";
import { SubscriptionOption } from "./lib/modules/Call-Diversion-Operations-asn1-97/SubscriptionOption.ta.mjs";
import {
    callRerouteing_ArgumentType,
    _decode_callRerouteing_ArgumentType,
    _encode_callRerouteing_ArgumentType,
} from "./lib/modules/Call-Diversion-Operations-asn1-97/callRerouteing-ArgumentType.ta.mjs";

describe("callRerouteing_ArgumentType", () => {
    test("round-trips a fully populated argument", () => {
        const called = { unknownPartyNumber: "15551212" };
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
        const decoded = _decode_callRerouteing_ArgumentType(
            _encode_callRerouteing_ArgumentType(original, $.BER),
        );
        expect(decoded).toEqual(original);
    });
});
