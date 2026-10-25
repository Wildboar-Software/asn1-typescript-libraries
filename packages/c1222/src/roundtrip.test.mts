import {
    ASN1Construction,
    ASN1SizeError,
    ASN1TagClass,
    BERElement,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Calling_authentication_value_c1221,
    _decode_Calling_authentication_value_c1221,
    _encode_Calling_authentication_value_c1221,
} from "./lib/modules/C1221-Security-Mechanism/Calling-authentication-value-c1221.ta.mjs";
import {
    Calling_authentication_value_c1222,
    _decode_Calling_authentication_value_c1222,
    _encode_Calling_authentication_value_c1222,
} from "./lib/modules/C12-22-Security-Mechanism/Calling-authentication-value-c1222.ta.mjs";

function octets (length: number, fill: number): Uint8Array {
    return new Uint8Array(length).fill(fill);
}

function decodeC1221 (value: Calling_authentication_value_c1221): Calling_authentication_value_c1221 {
    return _decode_Calling_authentication_value_c1221(
        _encode_Calling_authentication_value_c1221(value, $.BER),
    );
}

describe("Calling-authentication-value-c1221", () => {
    test("round-trips an identification of three octets", () => {
        const original: Calling_authentication_value_c1221 = {
            c1221_auth_identification: new Uint8Array([0xaa, 0xbb, 0xcc]),
        };
        const encoded = _encode_Calling_authentication_value_c1221(original, $.BER);
        expect(Array.from(encoded.toBytes())).toEqual([
            0xa0, 0x05, 0x80, 0x03, 0xaa, 0xbb, 0xcc,
        ]);
        expect(encoded.tagClass).toBe(ASN1TagClass.context);
        expect(encoded.tagNumber).toBe(0);
        expect(encoded.construction).toBe(ASN1Construction.constructed);
        const decoded = _decode_Calling_authentication_value_c1221(encoded);
        expect(decoded).toEqual(original);
        expect(_encode_Calling_authentication_value_c1221(decoded, $.BER).toBytes())
            .toEqual(encoded.toBytes());
    });

    test("round-trips the other identification, request, and response sizes", () => {
        const identification = decodeC1221({
            c1221_auth_identification: octets(259, 0x11),
        });
        const request = decodeC1221({
            c1221_auth_request: octets(255, 0x22),
        });
        const response = decodeC1221({
            c1221_auth_response: new Uint8Array(),
        });
        expect(identification).toEqual({ c1221_auth_identification: octets(259, 0x11) });
        expect(request).toEqual({ c1221_auth_request: octets(255, 0x22) });
        expect(response).toEqual({ c1221_auth_response: new Uint8Array() });
    });

    test("rejects octet strings outside the declared sizes", () => {
        const rejected: Calling_authentication_value_c1221[] = [
            { c1221_auth_identification: octets(2, 1) },
            { c1221_auth_identification: octets(4, 1) },
            { c1221_auth_identification: octets(260, 1) },
            { c1221_auth_request: new Uint8Array() },
            { c1221_auth_request: octets(256, 1) },
            { c1221_auth_response: octets(256, 1) },
        ];
        for (const value of rejected) {
            expect(() => decodeC1221(value)).toThrow(ASN1SizeError);
        }
    });

    test("keeps an unrecognized extension alternative", () => {
        const extension = $._encode_implicit(
            ASN1TagClass.context,
            3,
            () => $._encodeOctetString,
            $.BER,
        )(new Uint8Array([0x7e]), $.BER);
        const encoded = $._encode_explicit(
            ASN1TagClass.context,
            0,
            () => () => extension,
            $.BER,
        )(undefined, $.BER);
        const decoded = _decode_Calling_authentication_value_c1221(encoded);
        expect(decoded).toBeInstanceOf(BERElement);
        if (!(decoded instanceof BERElement)) {
            throw new Error("expected an unrecognized extension element");
        }
        expect(decoded.tagClass).toBe(ASN1TagClass.context);
        expect(decoded.tagNumber).toBe(3);
        expect(decoded.octetString).toEqual(new Uint8Array([0x7e]));
    });
});

describe("Calling-authentication-value-c1222", () => {
    test("round-trips a key identifier and initialization vector", () => {
        const original = new Calling_authentication_value_c1222(
            new Uint8Array([0x2a]),
            new Uint8Array([0x01, 0x02, 0x03, 0x04]),
        );
        const encoded = _encode_Calling_authentication_value_c1222(original, $.BER);
        expect(Array.from(encoded.toBytes())).toEqual([
            0xa1, 0x09,
            0x80, 0x01, 0x2a,
            0x81, 0x04, 0x01, 0x02, 0x03, 0x04,
        ]);
        expect(encoded.tagClass).toBe(ASN1TagClass.context);
        expect(encoded.tagNumber).toBe(1);
        expect(encoded.construction).toBe(ASN1Construction.constructed);
        const decoded = _decode_Calling_authentication_value_c1222(encoded);
        expect(decoded).toEqual(original);
        expect(decoded.key_id_element).toEqual(new Uint8Array([0x2a]));
        expect(decoded.iv_element).toEqual(new Uint8Array([0x01, 0x02, 0x03, 0x04]));
        expect(_encode_Calling_authentication_value_c1222(decoded, $.BER).toBytes())
            .toEqual(encoded.toBytes());
    });

    test("round-trips with either or both components absent", () => {
        const keyOnly = new Calling_authentication_value_c1222(new Uint8Array([0x00]), undefined);
        const ivOnly = new Calling_authentication_value_c1222(
            undefined,
            new Uint8Array([0x0a, 0x0b, 0x0c, 0x0d]),
        );
        const neither = new Calling_authentication_value_c1222(undefined, undefined);
        expect(_decode_Calling_authentication_value_c1222(_encode_Calling_authentication_value_c1222(keyOnly, $.BER)))
            .toEqual(keyOnly);
        expect(_decode_Calling_authentication_value_c1222(_encode_Calling_authentication_value_c1222(ivOnly, $.BER)))
            .toEqual(ivOnly);
        expect(_decode_Calling_authentication_value_c1222(_encode_Calling_authentication_value_c1222(neither, $.BER)))
            .toEqual(neither);
    });

    test("rejects key identifiers and initialization vectors of the wrong length", () => {
        expect(() => new Calling_authentication_value_c1222(new Uint8Array(), undefined))
            .toThrow(ASN1SizeError);
        expect(() => new Calling_authentication_value_c1222(octets(2, 1), undefined))
            .toThrow(ASN1SizeError);
        expect(() => new Calling_authentication_value_c1222(undefined, octets(3, 1)))
            .toThrow(ASN1SizeError);
        const badKey = new BERElement();
        badKey.fromBytes(new Uint8Array([0xa1, 0x04, 0x80, 0x02, 0x01, 0x02]));
        expect(() => _decode_Calling_authentication_value_c1222(badKey)).toThrow(ASN1SizeError);
        const badIv = new BERElement();
        badIv.fromBytes(new Uint8Array([0xa1, 0x05, 0x81, 0x03, 0x01, 0x02, 0x03]));
        expect(() => _decode_Calling_authentication_value_c1222(badIv)).toThrow(ASN1SizeError);
    });
});
