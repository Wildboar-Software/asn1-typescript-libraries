import {
    ASN1ConstructionError,
    ASN1OverflowError,
    ASN1SizeError,
    ASN1TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrivatePartyNumber } from "./lib/modules/Addressing-Data-Elements/PrivatePartyNumber.ta.mjs";
import { PrivateTypeOfNumber_localNumber } from "./lib/modules/Addressing-Data-Elements/PrivateTypeOfNumber.ta.mjs";
import { PublicPartyNumber } from "./lib/modules/Addressing-Data-Elements/PublicPartyNumber.ta.mjs";
import { PublicTypeOfNumber_internationalNumber } from "./lib/modules/Addressing-Data-Elements/PublicTypeOfNumber.ta.mjs";
import { _decode_NumberDigits } from "./lib/modules/Addressing-Data-Elements/NumberDigits.ta.mjs";
import { _decode_GFPInvokeIDSet } from "./lib/modules/Facility-Information-Element-Components/GFPInvokeIDSet.ta.mjs";
import { _encode_InvokeId } from "./lib/modules/Facility-Information-Element-Components/InvokeId.ta.mjs";
import { EntityType } from "./lib/modules/Network-Facility-Extension/EntityType.ta.mjs";
import {
    NetworkFacilityExtension,
    _decode_NetworkFacilityExtension,
    _encode_NetworkFacilityExtension,
} from "./lib/modules/Network-Facility-Extension/NetworkFacilityExtension.ta.mjs";
import {
    NetworkProtocolProfile_acse,
    _decode_NetworkProtocolProfile,
    _encode_NetworkProtocolProfile,
} from "./lib/modules/Network-Protocol-Profile-component/NetworkProtocolProfile.ta.mjs";

describe("Q.932 encode/decode round-trips", () => {
    test("round-trips NetworkFacilityExtension with public and private party numbers", () => {
        const original = new NetworkFacilityExtension(
            EntityType.endPINX,
            {
                publicPartyNumber: new PublicPartyNumber(
                    PublicTypeOfNumber_internationalNumber,
                    "441234567890",
                ),
            },
            EntityType.anyTypeOfPINX,
            {
                privatePartyNumber: new PrivatePartyNumber(
                    PrivateTypeOfNumber_localNumber,
                    "1234",
                ),
            },
        );
        const encoded = _encode_NetworkFacilityExtension(original, $.BER);
        expect(encoded.tagClass).toBe(ASN1TagClass.context);
        expect(encoded.tagNumber).toBe(10);
        const decoded = _decode_NetworkFacilityExtension(encoded);
        expect(decoded.sourceEntity).toBe(EntityType.endPINX);
        expect(decoded.destinationEntity).toBe(EntityType.anyTypeOfPINX);
        expect(decoded.sourceEntityAddress).toEqual({
            publicPartyNumber: new PublicPartyNumber(
                PublicTypeOfNumber_internationalNumber,
                "441234567890",
            ),
        });
        expect(decoded.destinationEntityAddress).toEqual({
            privatePartyNumber: new PrivatePartyNumber(
                PrivateTypeOfNumber_localNumber,
                "1234",
            ),
        });
    });

    test("rejects values that violate Q.932 size and range constraints", () => {
        expect(() => _decode_NumberDigits($._encodeNumericString("1".repeat(21), $.BER)))
            .toThrow(ASN1SizeError);
        expect(() => _decode_GFPInvokeIDSet(_encode_InvokeId({ absent: null }, $.BER)))
            .toThrow(ASN1ConstructionError);
        expect(() => _decode_GFPInvokeIDSet(_encode_InvokeId({ present: 40000 }, $.BER)))
            .toThrow(ASN1OverflowError);
        const profile = _decode_NetworkProtocolProfile(
            _encode_NetworkProtocolProfile(NetworkProtocolProfile_acse, $.BER),
        );
        expect(Number(profile)).toBe(NetworkProtocolProfile_acse);
        expect(() => _decode_NetworkProtocolProfile(_encode_NetworkProtocolProfile(255, $.BER)))
            .toThrow(ASN1OverflowError);
    });
});
