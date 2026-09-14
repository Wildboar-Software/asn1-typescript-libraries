import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RejectPDU,
    _decode_RejectPDU,
    _encode_RejectPDU,
} from "../modules/ISO-9506-MMS-1/RejectPDU.ta.mjs";

/**
 * Decode `el` as `T`, falling back to `RejectPDU` when that fails.
 *
 * ISO 9506 duplicates several CHOICE tags as both a service response `T` and
 * `IMPLICIT RejectPDU`. Primitive types (`NULL`, `INTEGER`) are distinguishable
 * from `RejectPDU` (always a constructed `SEQUENCE`). Some of those primitive
 * decoders in `@wildboar/asn1` do not throw on constructed encodings, so this
 * helper also treats a constructed encoding that successfully "decodes" as
 * `null` or an integer as a `RejectPDU` when that decode succeeds.
 *
 * @param el The (possibly implicitly tagged) element to decode.
 * @param decodeT Decoder for the service-response type.
 * @returns The decoded `T` or `RejectPDU`.
 */
export
function decodeWithRejectPDUFallback<T>(
    el: _Element,
    decodeT: $.ASN1Decoder<T>,
): T | RejectPDU {
    try {
        const decoded = decodeT(el);
        if (el.construction === _Construction.constructed
            && (decoded === null || typeof decoded === "number" || typeof decoded === "bigint")) {
            try {
                return _decode_RejectPDU(el);
            } catch {
                return decoded;
            }
        }
        return decoded;
    } catch (tError) {
        try {
            return _decode_RejectPDU(el);
        } catch {
            throw tError;
        }
    }
}

/**
 * Encode `value` as implicitly tagged `T`, or as `RejectPDU` when `value` is a
 * `RejectPDU` instance.
 *
 * @param tagNumber Context-specific tag number of the CHOICE alternative.
 * @param encodeT Encoder for the service-response type.
 * @returns An encoder for `T | RejectPDU`.
 */
export
function encodeWithRejectPDUFallback<T>(
    tagNumber: number,
    encodeT: $.ASN1Encoder<T>,
): $.ASN1Encoder<T | RejectPDU> {
    return (value: T | RejectPDU, elGetter: $.ASN1Encoder<any>): _Element => (
        value instanceof RejectPDU
            ? $._encode_implicit(_TagClass.context, tagNumber, () => _encode_RejectPDU, $.BER)(value, elGetter)
            : $._encode_implicit(_TagClass.context, tagNumber, () => encodeT, $.BER)(value, elGetter)
    );
}
