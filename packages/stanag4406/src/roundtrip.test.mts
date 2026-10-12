import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IPMIdentifier,
    NonReceiptFields,
    _enum_for_NonReceiptReasonField,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    _decode_Sic,
    _encode_Sic,
} from "./lib/modules/MMSHeadingExtensions/Sic.ta.mjs";
import {
    MN,
    _decode_MN,
    _encode_MN,
} from "./lib/modules/MMSInformationObjects/MN.ta.mjs";

describe("MMSInformationObjects MN", () => {
    test("round-trips a notification with non-receipt fields", () => {
        const subject = new IPMIdentifier(undefined, "MSG0001");
        const fields = new NonReceiptFields(
            _enum_for_NonReceiptReasonField.ipm_discarded,
        );
        const original = new MN(
            subject,
            undefined,
            undefined,
            undefined,
            undefined,
            { mn_non_receipt_fields: fields },
        );
        const decoded = _decode_MN(_encode_MN(original, $.BER));
        expect(decoded.subject_ipm.user).toBeUndefined();
        expect(decoded.subject_ipm.user_relative_identifier).toBe("MSG0001");
        expect(decoded.ipn_originator).toBeUndefined();
        expect(decoded.ipm_intended_recipient).toBeUndefined();
        expect(decoded.conversion_eits).toBeUndefined();
        expect(decoded.notification_extensions).toBeUndefined();
        if (!("mn_non_receipt_fields" in decoded.choice)) {
            throw new Error("MN choice was not non-receipt fields");
        }
        expect(decoded.choice.mn_non_receipt_fields.non_receipt_reason).toBe(
            _enum_for_NonReceiptReasonField.ipm_discarded,
        );
        expect(decoded.choice.mn_non_receipt_fields.discard_reason).toBeUndefined();
        expect(decoded.choice.mn_non_receipt_fields.auto_forward_comment).toBeUndefined();
        expect(decoded.choice.mn_non_receipt_fields.returned_ipm).toBeUndefined();
        expect(decoded.choice.mn_non_receipt_fields.nrn_extensions).toBeUndefined();
    });
});

describe("MMSHeadingExtensions Sic", () => {
    test("enforces lb-military-sic..ub-military-sic while decoding", () => {
        const withinBounds = "ABC";
        expect(_decode_Sic(_encode_Sic(withinBounds, $.BER))).toBe(withinBounds);
        expect(() => _decode_Sic(_encode_Sic("AB", $.BER))).toThrow(ASN1SizeError);
        expect(() => _decode_Sic(_encode_Sic("ABCDEFGHI", $.BER))).toThrow(ASN1SizeError);
    });
});
