/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError, ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CarrierFreq
 * @description
 *
 * Carrier frequency in hertz corresponding to a symbol rate (Table 2/V.59):
 * 1200, 1600, 1646, 1680, 1700, 1800, 1829, 1867, 1920, 1959, 2000, 2400 Hz as
 * codes 0..11. ITU-T Rec. V.59 (11/2000) §6.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CarrierFreq  ::=  CHOICE {
 *   cF1200  INTEGER(0),
 *   cF1600  INTEGER(1),
 *   cF1646  INTEGER(2),
 *   cF1680  INTEGER(3),
 *   cF1700  INTEGER(4),
 *   cF1800  INTEGER(5),
 *   cF1829  INTEGER(6),
 *   cF1867  INTEGER(7),
 *   cF1920  INTEGER(8),
 *   cF1959  INTEGER(9),
 *   cF2000  INTEGER(10),
 *   cF2400  INTEGER(11),
 *   ...
 * }
 * ```
 */
export
type CarrierFreq =
    { cF1200: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1600: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1646: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1680: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1700: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1800: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1829: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1867: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1920: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF1959: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF2000: INTEGER } /* CHOICE_ALT_ROOT */
    | { cF2400: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CarrierFreq: $.ASN1Decoder<CarrierFreq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CarrierFreq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CarrierFreq (el: _Element): CarrierFreq {
    if (!_cached_decoder_for_CarrierFreq) { _cached_decoder_for_CarrierFreq = $._decode_extensible_choice<CarrierFreq>({
        "CONTEXT 0": [ "cF1200", $._decodeInteger ],
        "CONTEXT 1": [ "cF1600", $._decodeInteger ],
        "CONTEXT 2": [ "cF1646", $._decodeInteger ],
        "CONTEXT 3": [ "cF1680", $._decodeInteger ],
        "CONTEXT 4": [ "cF1700", $._decodeInteger ],
        "CONTEXT 5": [ "cF1800", $._decodeInteger ],
        "CONTEXT 6": [ "cF1829", $._decodeInteger ],
        "CONTEXT 7": [ "cF1867", $._decodeInteger ],
        "CONTEXT 8": [ "cF1920", $._decodeInteger ],
        "CONTEXT 9": [ "cF1959", $._decodeInteger ],
        "CONTEXT 10": [ "cF2000", $._decodeInteger ],
        "CONTEXT 11": [ "cF2400", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_CarrierFreq(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "cF1200": 0, "cF1600": 1, "cF1646": 2, "cF1680": 3, "cF1700": 4, "cF1800": 5, "cF1829": 6, "cF1867": 7, "cF1920": 8, "cF1959": 9, "cF2000": 10, "cF2400": 11 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("CarrierFreq violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_CarrierFreq: $.ASN1Encoder<CarrierFreq> | null = null;

/**
 * @summary Encodes a(n) CarrierFreq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CarrierFreq, encoded as an ASN.1 Element.
 */
export
function _encode_CarrierFreq (value: CarrierFreq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CarrierFreq) { _cached_encoder_for_CarrierFreq = $._encode_choice<CarrierFreq>({
    "cF1200": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "cF1600": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "cF1646": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "cF1680": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "cF1700": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "cF1800": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "cF1829": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "cF1867": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "cF1920": $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER),
    "cF1959": $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER),
    "cF2000": $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER),
    "cF2400": $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_CarrierFreq(value, elGetter);
}

/* eslint-enable */
