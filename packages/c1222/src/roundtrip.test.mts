import { ASN1SizeError, ASN1TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Calling_authentication_value_c1222,
    _decode_Calling_authentication_value_c1222,
    _encode_Calling_authentication_value_c1222,
} from "./lib/modules/C12-22-Security-Mechanism/Calling-authentication-value-c1222.ta.mjs";
import {
    _decode_Calling_authentication_value_c1221,
    _encode_Calling_authentication_value_c1221,
} from "./lib/modules/C1221-Security-Mechanism/Calling-authentication-value-c1221.ta.mjs";

describe("Calling-authentication-value-c1221", () => {
    test("round-trips an identification whose length is in 5..259", () => {
        const original = {
            c1221_auth_identification: new Uint8Array([0x10, 0x20, 0x30, 0x40, 0x50]),
        };
        const encoded = _encode_Calling_authentication_value_c1221(original, $.BER);
        const decoded = _decode_Calling_authentication_value_c1221(encoded);
        expect(decoded).toEqual(original);
        expect(_encode_Calling_authentication_value_c1221(decoded, $.BER).toBytes())
            .toEqual(encoded.toBytes());
    });

    test("round-trips a three-octet identification, a request, and an empty response", () => {
        const identification = {
            c1221_auth_identification: new Uint8Array([0x01, 0x02, 0x03]),
        };
        const request = {
            c1221_auth_request: new Uint8Array([0xAB]),
        };
        const response = {
            c1221_auth_response: new Uint8Array(),
        };
        for (const original of [identification, request, response]) {
            const encoded = _encode_Calling_authentication_value_c1221(original, $.BER);
            const decoded = _decode_Calling_authentication_value_c1221(encoded);
            expect(decoded).toEqual(original);
            expect(_encode_Calling_authentication_value_c1221(decoded, $.BER).toBytes())
                .toEqual(encoded.toBytes());
        }
    });

    test("rejects identification, request, and response lengths outside their SIZE constraints", () => {
        const identification = _encode_Calling_authentication_value_c1221({
            c1221_auth_identification: new Uint8Array([1, 2, 3, 4]),
        }, $.BER);
        const request = _encode_Calling_authentication_value_c1221({
            c1221_auth_request: new Uint8Array(),
        }, $.BER);
        const response = _encode_Calling_authentication_value_c1221({
            c1221_auth_response: new Uint8Array(256),
        }, $.BER);
        expect(() => _decode_Calling_authentication_value_c1221(identification)).toThrow(ASN1SizeError);
        expect(() => _decode_Calling_authentication_value_c1221(request)).toThrow(ASN1SizeError);
        expect(() => _decode_Calling_authentication_value_c1221(response)).toThrow(ASN1SizeError);
    });
});

describe("Calling-authentication-value-c1222", () => {
    test("round-trips a key id and initialization vector", () => {
        const original = new Calling_authentication_value_c1222(
            new Uint8Array([0x07]),
            new Uint8Array([0x01, 0x02, 0x03, 0x04]),
        );
        const encoded = _encode_Calling_authentication_value_c1222(original, $.BER);
        const decoded = _decode_Calling_authentication_value_c1222(encoded);
        expect(decoded.key_id_element).toEqual(original.key_id_element);
        expect(decoded.iv_element).toEqual(original.iv_element);
        expect(_encode_Calling_authentication_value_c1222(decoded, $.BER).toBytes())
            .toEqual(encoded.toBytes());
    });

    test("round-trips a value with both elements absent", () => {
        const original = new Calling_authentication_value_c1222(undefined, undefined);
        const decoded = _decode_Calling_authentication_value_c1222(
            _encode_Calling_authentication_value_c1222(original, $.BER),
        );
        expect(decoded.key_id_element).toBeUndefined();
        expect(decoded.iv_element).toBeUndefined();
    });

    test("rejects a key id or initialization vector of the wrong size", () => {
        expect(() => new Calling_authentication_value_c1222(new Uint8Array([1, 2]), undefined))
            .toThrow(ASN1SizeError);
        expect(() => new Calling_authentication_value_c1222(undefined, new Uint8Array([1, 2, 3])))
            .toThrow(ASN1SizeError);
        const encoded = $._encode_implicit(
            ASN1TagClass.context,
            1,
            () => () => $._encodeSequence([
                $._encode_implicit(
                    ASN1TagClass.context,
                    0,
                    () => $._encodeOctetString,
                    $.BER,
                )(new Uint8Array([1, 2]), $.BER),
            ], $.BER),
            $.BER,
        )(undefined, $.BER);
        expect(() => _decode_Calling_authentication_value_c1222(encoded)).toThrow(ASN1SizeError);
    });
});
