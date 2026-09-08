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
 * @summary V8bisDiag_Item_eS_eSType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-eS-eSType ::= CHOICE {nONE  INTEGER(0),
 *                                     i     INTEGER(1),
 *                                     r     INTEGER(2)}
 * ```
 */
export
type V8bisDiag_Item_eS_eSType =
    { nONE: INTEGER } /* CHOICE_ALT_ROOT */
    | { i: INTEGER } /* CHOICE_ALT_ROOT */
    | { r: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_V8bisDiag_Item_eS_eSType: $.ASN1Decoder<V8bisDiag_Item_eS_eSType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_eS_eSType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_eS_eSType (el: _Element): V8bisDiag_Item_eS_eSType {
    if (!_cached_decoder_for_V8bisDiag_Item_eS_eSType) { _cached_decoder_for_V8bisDiag_Item_eS_eSType = $._decode_inextensible_choice<V8bisDiag_Item_eS_eSType>({
        "CONTEXT 0": [ "nONE", $._decodeInteger ],
        "CONTEXT 1": [ "i", $._decodeInteger ],
        "CONTEXT 2": [ "r", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_V8bisDiag_Item_eS_eSType(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "nONE": 0, "i": 1, "r": 2 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("V8bisDiag_Item_eS_eSType violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_V8bisDiag_Item_eS_eSType: $.ASN1Encoder<V8bisDiag_Item_eS_eSType> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_eS_eSType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_eS_eSType, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_eS_eSType (value: V8bisDiag_Item_eS_eSType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_eS_eSType) { _cached_encoder_for_V8bisDiag_Item_eS_eSType = $._encode_choice<V8bisDiag_Item_eS_eSType>({
    "nONE": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "i": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "r": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_V8bisDiag_Item_eS_eSType(value, elGetter);
}

/* eslint-enable */
