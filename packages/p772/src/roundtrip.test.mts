import * as $ from "@wildboar/asn1/functional";
import {
    IPMIdentifier,
    NonReceiptFields,
    NonReceiptReasonField_ipm_discarded,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    MN,
    _decode_MN,
    _encode_MN,
} from "./lib/modules/MMSInformationObjects/MN.ta.mjs";

describe("MN", () => {
    test("round-trips a non-receipt military notification", () => {
        const original = new MN(
            new IPMIdentifier(undefined, "0001 010100120000Z"),
            undefined,
            undefined,
            undefined,
            undefined,
            {
                mn_non_receipt_fields: new NonReceiptFields(
                    NonReceiptReasonField_ipm_discarded,
                ),
            },
        );
        const decoded = _decode_MN(_encode_MN(original, $.BER));
        expect(decoded.subject_ipm.user).toBeUndefined();
        expect(decoded.subject_ipm.user_relative_identifier).toBe(
            original.subject_ipm.user_relative_identifier,
        );
        expect(decoded.ipn_originator).toBeUndefined();
        expect(decoded.ipm_intended_recipient).toBeUndefined();
        expect(decoded.conversion_eits).toBeUndefined();
        expect(decoded.notification_extensions).toBeUndefined();
        expect(decoded.choice).toEqual(original.choice);
    });
});
