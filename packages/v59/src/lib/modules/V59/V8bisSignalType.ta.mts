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
 * @summary V8bisSignalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisSignalType  ::=  CHOICE {
 *   nONE  INTEGER(0),
 *   e     INTEGER(1),
 *   d     INTEGER(2)
 * }
 * ```
 */
export
type V8bisSignalType =
    { nONE: INTEGER } /* CHOICE_ALT_ROOT */
    | { e: INTEGER } /* CHOICE_ALT_ROOT */
    | { d: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_V8bisSignalType: $.ASN1Decoder<V8bisSignalType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisSignalType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisSignalType (el: _Element): V8bisSignalType {
    if (!_cached_decoder_for_V8bisSignalType) { _cached_decoder_for_V8bisSignalType = $._decode_inextensible_choice<V8bisSignalType>({
        "CONTEXT 0": [ "nONE", $._decodeInteger ],
        "CONTEXT 1": [ "e", $._decodeInteger ],
        "CONTEXT 2": [ "d", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_V8bisSignalType(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "nONE": 0, "e": 1, "d": 2 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("V8bisSignalType violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_V8bisSignalType: $.ASN1Encoder<V8bisSignalType> | null = null;

/**
 * @summary Encodes a(n) V8bisSignalType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisSignalType, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisSignalType (value: V8bisSignalType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisSignalType) { _cached_encoder_for_V8bisSignalType = $._encode_choice<V8bisSignalType>({
    "nONE": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "e": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "d": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_V8bisSignalType(value, elGetter);
}

/* eslint-enable */
