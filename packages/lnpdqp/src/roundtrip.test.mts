import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ProvideInstructionArg,
    _decode_ProvideInstructionArg,
    _encode_ProvideInstructionArg,
} from "./lib/modules/LNPDQP-Protocol/ProvideInstructionArg.ta.mjs";
import {
    _decode_BillingIndicators,
} from "./lib/modules/LNPDQP-Protocol/BillingIndicators.ta.mjs";
import {
    _decode_Digits,
} from "./lib/modules/LNPDQP-Protocol/Digits.ta.mjs";
import {
    _decode_OriginatingStationType,
} from "./lib/modules/LNPDQP-Protocol/OriginatingStationType.ta.mjs";

describe("LNPDQP-Protocol ProvideInstructionArg", () => {
    test("round-trips a provide-instruction argument", () => {
        const original = new ProvideInstructionArg(
            { digits: new Uint8Array([1, 2, 3, 4]) },
            new Uint8Array([5, 6, 7, 8, 9, 10, 11, 12, 13]),
            new Uint8Array([0x2a]),
        );
        const decoded = _decode_ProvideInstructionArg(
            _encode_ProvideInstructionArg(original, $.BER),
        );
        expect(decoded.calledPartyNumber.digits).toEqual(original.calledPartyNumber.digits);
        expect(decoded.digits).toEqual(original.digits);
        expect(decoded.oli).toEqual(original.oli);
    });
});

describe("LNPDQP-Protocol size constraints", () => {
    test("accepts Digits at both SIZE bounds", () => {
        const four = $._encodeOctetString(new Uint8Array([1, 2, 3, 4]), $.BER);
        const nine = $._encodeOctetString(new Uint8Array(9), $.BER);
        expect(_decode_Digits(four)).toHaveLength(4);
        expect(_decode_Digits(nine)).toHaveLength(9);
    });

    test("rejects octet strings outside their SIZE constraints", () => {
        const shortDigits = $._encodeOctetString(new Uint8Array([1, 2, 3]), $.BER);
        const longDigits = $._encodeOctetString(new Uint8Array(10), $.BER);
        const shortBilling = $._encodeOctetString(new Uint8Array([1, 2, 3]), $.BER);
        const emptyOli = $._encodeOctetString(new Uint8Array([]), $.BER);
        expect(() => _decode_Digits(shortDigits)).toThrow(ASN1SizeError);
        expect(() => _decode_Digits(longDigits)).toThrow(ASN1SizeError);
        expect(() => _decode_BillingIndicators(shortBilling)).toThrow(ASN1SizeError);
        expect(() => _decode_OriginatingStationType(emptyOli)).toThrow(ASN1SizeError);
    });
});
