import {
    BERElement,
    ASN1Construction,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RejectPDU,
    _encode_RejectPDU,
} from "../modules/ISO-9506-MMS-1/RejectPDU.ta.mjs";
import {
    _decode_Unsigned32,
    _encode_Unsigned32,
} from "../modules/ISO-9506-MMS-1/Unsigned32.ta.mjs";
import {
    decodeWithRejectPDUFallback,
    encodeWithRejectPDUFallback,
} from "./decodeWithRejectPDUFallback.mjs";

function sampleRejectPDU(): RejectPDU {
    return new RejectPDU(undefined, { confirmed_responsePDU: 0 });
}

describe("decodeWithRejectPDUFallback", () => {
    test("returns T when decoding as T succeeds", () => {
        const el = _encode_Unsigned32(42, $.BER);
        expect(decodeWithRejectPDUFallback(el, _decode_Unsigned32)).toBe(42);
    });

    test("returns null for a primitive NULL encoding", () => {
        const el = $._encodeNull(null, $.BER);
        expect(decodeWithRejectPDUFallback(el, $._decodeNull)).toBeNull();
    });

    test("falls back to RejectPDU when decoding as T throws", () => {
        const reject = sampleRejectPDU();
        const el = _encode_RejectPDU(reject, $.BER);
        const decoded = decodeWithRejectPDUFallback(el, _decode_Unsigned32);
        expect(decoded).toBeInstanceOf(RejectPDU);
        if (decoded instanceof RejectPDU) {
            expect(decoded.rejectReason).toEqual({ confirmed_responsePDU: 0 });
        }
    });

    test("falls back to RejectPDU when NULL decoding would succeed on a constructed encoding", () => {
        const reject = sampleRejectPDU();
        const el = _encode_RejectPDU(reject, $.BER);
        expect(el.construction).toBe(ASN1Construction.constructed);
        const decoded = decodeWithRejectPDUFallback(el, $._decodeNull);
        expect(decoded).toBeInstanceOf(RejectPDU);
    });

    test("falls back to RejectPDU when INTEGER decoding would succeed on RejectPDU contents", () => {
        const reject = sampleRejectPDU();
        const el = _encode_RejectPDU(reject, $.BER);
        // Without the fallback, _decodeInteger would interpret the SEQUENCE bytes.
        expect(typeof $._decodeInteger(el) === "number" || typeof $._decodeInteger(el) === "bigint").toBe(true);
        expect(decodeWithRejectPDUFallback(el, $._decodeInteger)).toBeInstanceOf(RejectPDU);
    });

    test("rethrows the T error when both T and RejectPDU fail", () => {
        const el = new BERElement();
        el.octetString = new Uint8Array([0x01, 0x02, 0x03]);
        const tError = new ASN1OverflowError("T failed");
        expect(() => decodeWithRejectPDUFallback(el, () => {
            throw tError;
        })).toThrow(tError);
    });

    test("round-trips NULL and RejectPDU through encodeWithRejectPDUFallback", () => {
        const encode = encodeWithRejectPDUFallback(3, $._encodeNull);
        const asNull = encode(null, $.BER);
        expect(decodeWithRejectPDUFallback(asNull, $._decodeNull)).toBeNull();
        const reject = sampleRejectPDU();
        const asReject = encode(reject, $.BER);
        const decoded = decodeWithRejectPDUFallback(asReject, $._decodeNull);
        expect(decoded).toBeInstanceOf(RejectPDU);
        if (decoded instanceof RejectPDU) {
            expect(decoded.rejectReason).toEqual({ confirmed_responsePDU: 0 });
        }
    });

    test("round-trips INTEGER and RejectPDU through encodeWithRejectPDUFallback", () => {
        const encode = encodeWithRejectPDUFallback(54, _encode_Unsigned32);
        expect(decodeWithRejectPDUFallback(encode(7, $.BER), _decode_Unsigned32)).toBe(7);
        const decoded = decodeWithRejectPDUFallback(
            encode(sampleRejectPDU(), $.BER),
            _decode_Unsigned32,
        );
        expect(decoded).toBeInstanceOf(RejectPDU);
    });
});
