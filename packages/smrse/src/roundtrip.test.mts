import {
    ASN1OverflowError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RPDataMT,
    _decode_RPDataMT,
    _encode_RPDataMT,
} from "./lib/modules/SMRS/RPDataMT.ta.mjs";
import {
    SMS_Address,
} from "./lib/modules/SMRS/SMS-Address.ta.mjs";
import {
    SMS_Address_address_type_internat_number,
    SMS_Address_address_type_national_number,
} from "./lib/modules/SMRS/SMS-Address-address-type.ta.mjs";
import {
    SMS_Address_numbering_plan_iSDN_numbering,
    SMS_Address_numbering_plan_national_numbering,
} from "./lib/modules/SMRS/SMS-Address-numbering-plan.ta.mjs";
import {
    _decode_RP_MR,
    _encode_RP_MR,
} from "./lib/modules/SMRS/RP-MR.ta.mjs";
import {
    _decode_RP_UD,
    _encode_RP_UD,
} from "./lib/modules/SMRS/RP-UD.ta.mjs";
import {
    _decode_SM_TC,
    _encode_SM_TC,
} from "./lib/modules/SMRS/SM-TC.ta.mjs";

function address (
    addressType: number,
    numberingPlan: number,
    digits: number[],
): SMS_Address {
    return new SMS_Address(
        addressType,
        numberingPlan,
        { octet_format: new Uint8Array(digits) },
    );
}

function sampleMt (withOptionals: boolean): RPDataMT {
    return new RPDataMT(
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
}

describe("RPDataMT", () => {
    test("round-trips a mobile-terminated relay PDU with optional fields", () => {
        const original = sampleMt(true);
        const decoded = _decode_RPDataMT(_encode_RPDataMT(original, $.BER));
        expect(decoded).toEqual(original);
        expect(decoded.mt_priority_request).toBe(true);
        expect(decoded.mt_mms).toBe(false);
        expect(decoded.mt_message_reference).toBe(42);
        expect(decoded.mt_originating_address.address_value).toEqual({
            octet_format: new Uint8Array([0x21, 0x43, 0x65]),
        });
        expect(decoded.mt_origVMSCAddr?.address_type).toBe(SMS_Address_address_type_internat_number);
        expect(decoded.mt_tariffClass).toBe(7);
        expect(decoded._unrecognizedExtensionsList).toEqual([]);
    });

    test("round-trips a mobile-terminated relay PDU without optional fields", () => {
        const original = sampleMt(false);
        const decoded = _decode_RPDataMT(_encode_RPDataMT(original, $.BER));
        expect(decoded).toEqual(original);
        expect(decoded.mt_origVMSCAddr).toBeUndefined();
        expect(decoded.mt_tariffClass).toBeUndefined();
    });
});

describe("SMRS constraints", () => {
    test("accepts RP-MR and SM-TC bounds and RP-UD sizes", () => {
        expect(_decode_RP_MR(_encode_RP_MR(0, $.BER))).toBe(0);
        expect(_decode_RP_MR(_encode_RP_MR(65535, $.BER))).toBe(65535);
        expect(_decode_SM_TC(_encode_SM_TC(65535, $.BER))).toBe(65535);
        const userData = new Uint8Array(164);
        userData[0] = 9;
        expect(_decode_RP_UD(_encode_RP_UD(userData, $.BER))).toEqual(userData);
    });

    test("rejects RP-MR and SM-TC values outside 0..65535", () => {
        expect(() => _decode_RP_MR(_encode_RP_MR(-1, $.BER))).toThrow(ASN1OverflowError);
        expect(() => _decode_RP_MR(_encode_RP_MR(65536, $.BER))).toThrow(ASN1OverflowError);
        expect(() => _decode_SM_TC(_encode_SM_TC(65536, $.BER))).toThrow(ASN1OverflowError);
    });

    test("rejects RP-UD values outside SIZE (1..164)", () => {
        expect(() => _decode_RP_UD(_encode_RP_UD(new Uint8Array(0), $.BER))).toThrow(ASN1SizeError);
        expect(() => _decode_RP_UD(_encode_RP_UD(new Uint8Array(165), $.BER))).toThrow(ASN1SizeError);
    });
});
