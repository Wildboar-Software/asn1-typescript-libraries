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
 * @summary SymbolRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SymbolRate  ::=  CHOICE {
 *   sR8000  INTEGER(0),
 *   sR3429  INTEGER(1),
 *   sR3200  INTEGER(2),
 *   sR3000  INTEGER(3),
 *   sR2800  INTEGER(4),
 *   sR2743  INTEGER(5),
 *   sR2400  INTEGER(6),
 *   sR1600  INTEGER(7),
 *   sR1200  INTEGER(8),
 *   sR600   INTEGER(9),
 *   ...
 * }
 * ```
 */
export
type SymbolRate =
    { sR8000: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR3429: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR3200: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR3000: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR2800: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR2743: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR2400: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR1600: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR1200: INTEGER } /* CHOICE_ALT_ROOT */
    | { sR600: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SymbolRate: $.ASN1Decoder<SymbolRate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SymbolRate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SymbolRate (el: _Element): SymbolRate {
    if (!_cached_decoder_for_SymbolRate) { _cached_decoder_for_SymbolRate = $._decode_extensible_choice<SymbolRate>({
        "CONTEXT 0": [ "sR8000", $._decodeInteger ],
        "CONTEXT 1": [ "sR3429", $._decodeInteger ],
        "CONTEXT 2": [ "sR3200", $._decodeInteger ],
        "CONTEXT 3": [ "sR3000", $._decodeInteger ],
        "CONTEXT 4": [ "sR2800", $._decodeInteger ],
        "CONTEXT 5": [ "sR2743", $._decodeInteger ],
        "CONTEXT 6": [ "sR2400", $._decodeInteger ],
        "CONTEXT 7": [ "sR1600", $._decodeInteger ],
        "CONTEXT 8": [ "sR1200", $._decodeInteger ],
        "CONTEXT 9": [ "sR600", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_SymbolRate(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "sR8000": 0, "sR3429": 1, "sR3200": 2, "sR3000": 3, "sR2800": 4, "sR2743": 5, "sR2400": 6, "sR1600": 7, "sR1200": 8, "sR600": 9 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("SymbolRate violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_SymbolRate: $.ASN1Encoder<SymbolRate> | null = null;

/**
 * @summary Encodes a(n) SymbolRate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SymbolRate, encoded as an ASN.1 Element.
 */
export
function _encode_SymbolRate (value: SymbolRate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SymbolRate) { _cached_encoder_for_SymbolRate = $._encode_choice<SymbolRate>({
    "sR8000": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "sR3429": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "sR3200": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "sR3000": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "sR2800": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "sR2743": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "sR2400": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "sR1600": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "sR1200": $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER),
    "sR600": $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_SymbolRate(value, elGetter);
}

/* eslint-enable */
