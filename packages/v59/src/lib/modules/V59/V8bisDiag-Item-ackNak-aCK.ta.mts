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
 * @summary V8bisDiag_Item_ackNak_aCK
 * @description
 *
 * Table 10/V.59: `nONE`(0) no ACK, `aCK1`(1), `aCK2`(2). ITU-T Rec. V.59
 * (11/2000) §6.8.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-ackNak-aCK ::= CHOICE {nONE  INTEGER(0),
 *                                     aCK1  INTEGER(1),
 *                                     aCK2  INTEGER(2)}
 * ```
 */
export
type V8bisDiag_Item_ackNak_aCK =
    { nONE: INTEGER } /* CHOICE_ALT_ROOT */
    | { aCK1: INTEGER } /* CHOICE_ALT_ROOT */
    | { aCK2: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_V8bisDiag_Item_ackNak_aCK: $.ASN1Decoder<V8bisDiag_Item_ackNak_aCK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_ackNak_aCK
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_ackNak_aCK (el: _Element): V8bisDiag_Item_ackNak_aCK {
    if (!_cached_decoder_for_V8bisDiag_Item_ackNak_aCK) { _cached_decoder_for_V8bisDiag_Item_ackNak_aCK = $._decode_inextensible_choice<V8bisDiag_Item_ackNak_aCK>({
        "CONTEXT 0": [ "nONE", $._decodeInteger ],
        "CONTEXT 1": [ "aCK1", $._decodeInteger ],
        "CONTEXT 2": [ "aCK2", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_V8bisDiag_Item_ackNak_aCK(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "nONE": 0, "aCK1": 1, "aCK2": 2 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("V8bisDiag_Item_ackNak_aCK violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_V8bisDiag_Item_ackNak_aCK: $.ASN1Encoder<V8bisDiag_Item_ackNak_aCK> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_ackNak_aCK into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_ackNak_aCK, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_ackNak_aCK (value: V8bisDiag_Item_ackNak_aCK, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_ackNak_aCK) { _cached_encoder_for_V8bisDiag_Item_ackNak_aCK = $._encode_choice<V8bisDiag_Item_ackNak_aCK>({
    "nONE": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "aCK1": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "aCK2": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_V8bisDiag_Item_ackNak_aCK(value, elGetter);
}

/* eslint-enable */
