import { ASN1OverflowError, ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "./lib/modules/NIST-AES/AlgorithmIdentifier.ta.mjs";
import {
    _decode_AESAlgorithmIdentifier,
    _encode_AESAlgorithmIdentifier,
} from "./lib/modules/NIST-AES/AESAlgorithmIdentifier.ta.mjs";
import { _decode_AES_IV } from "./lib/modules/NIST-AES/AES-IV.ta.mjs";
import {
    CFBParameters,
    _decode_CFBParameters,
    _encode_CFBParameters,
} from "./lib/modules/NIST-AES/CFBParameters.ta.mjs";
import { id_aes128_CBC } from "./lib/modules/NIST-AES/id-aes128-CBC.va.mjs";
import { id_aes128_ECB } from "./lib/modules/NIST-AES/id-aes128-ECB.va.mjs";
import { _decode_NumberOfBits } from "./lib/modules/NIST-AES/NumberOfBits.ta.mjs";

describe("NIST-AES encode/decode round-trips", () => {
    test("round-trips CFBParameters", () => {
        const original = new CFBParameters(new Uint8Array(16).fill(0xab), 64);
        const decoded = _decode_CFBParameters(_encode_CFBParameters(original, $.BER));
        expect(decoded.aes_IV).toEqual(original.aes_IV);
        expect(decoded.numberOfBits).toBe(original.numberOfBits);
    });

    test("round-trips AESAlgorithmIdentifier with and without parameters", () => {
        const iv = new Uint8Array(16).fill(0x11);
        const withParameters = new AlgorithmIdentifier(
            id_aes128_CBC,
            $._encodeOctetString(iv, $.BER),
        );
        const decodedWithParameters = _decode_AESAlgorithmIdentifier(
            _encode_AESAlgorithmIdentifier(withParameters, $.BER),
        );
        expect(decodedWithParameters.algorithm.toString()).toBe(withParameters.algorithm.toString());
        expect(decodedWithParameters.parameters?.octetString).toEqual(iv);

        const withoutParameters = new AlgorithmIdentifier(id_aes128_ECB);
        const decodedWithoutParameters = _decode_AESAlgorithmIdentifier(
            _encode_AESAlgorithmIdentifier(withoutParameters, $.BER),
        );
        expect(decodedWithoutParameters.algorithm.toString()).toBe(id_aes128_ECB.toString());
        expect(decodedWithoutParameters.parameters).toBeUndefined();
    });

    test("rejects AES-IV and NumberOfBits values outside their constraints", () => {
        expect(() => _decode_AES_IV($._encodeOctetString(new Uint8Array(15), $.BER)))
            .toThrow(ASN1SizeError);
        expect(() => _decode_AES_IV($._encodeOctetString(new Uint8Array(16), $.BER)))
            .not.toThrow();
        expect(() => _decode_NumberOfBits($._encodeInteger(0, $.BER))).toThrow(ASN1OverflowError);
        expect(() => _decode_NumberOfBits($._encodeInteger(129, $.BER))).toThrow(ASN1OverflowError);
        expect(_decode_NumberOfBits($._encodeInteger(1, $.BER))).toBe(1);
        expect(_decode_NumberOfBits($._encodeInteger(128, $.BER))).toBe(128);

        const malformed = $._encodeSequence([
            $._encodeOctetString(new Uint8Array(15), $.BER),
            $._encodeInteger(8, $.BER),
        ], $.BER);
        expect(() => _decode_CFBParameters(malformed)).toThrow(ASN1SizeError);
    });
});
