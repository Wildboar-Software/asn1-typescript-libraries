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
 * @summary V8bisDiag_Item_ackNak_nAK
 * @description
 *
 * Table 11/V.59 (ITU-T Rec. V.59 Cor.2 (03/2002)): `none`(0) no NAK,
 * `nAK1`..`nAK4` (1..4). ITU-T Rec. V.59 (11/2000) §6.8.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-ackNak-nAK ::= CHOICE {none  INTEGER(0),
 *                                     nAK1  INTEGER(1),
 *                                     nAK2  INTEGER(2),
 *                                     nAK3  INTEGER(3),
 *                                     nAK4  INTEGER(4)}
 * ```
 */
export
type V8bisDiag_Item_ackNak_nAK =
    { none: INTEGER } /* CHOICE_ALT_ROOT */
    | { nAK1: INTEGER } /* CHOICE_ALT_ROOT */
    | { nAK2: INTEGER } /* CHOICE_ALT_ROOT */
    | { nAK3: INTEGER } /* CHOICE_ALT_ROOT */
    | { nAK4: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_V8bisDiag_Item_ackNak_nAK: $.ASN1Decoder<V8bisDiag_Item_ackNak_nAK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_ackNak_nAK
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_ackNak_nAK (el: _Element): V8bisDiag_Item_ackNak_nAK {
    if (!_cached_decoder_for_V8bisDiag_Item_ackNak_nAK) { _cached_decoder_for_V8bisDiag_Item_ackNak_nAK = $._decode_inextensible_choice<V8bisDiag_Item_ackNak_nAK>({
        "CONTEXT 0": [ "none", $._decodeInteger ],
        "CONTEXT 1": [ "nAK1", $._decodeInteger ],
        "CONTEXT 2": [ "nAK2", $._decodeInteger ],
        "CONTEXT 3": [ "nAK3", $._decodeInteger ],
        "CONTEXT 4": [ "nAK4", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_V8bisDiag_Item_ackNak_nAK(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "none": 0, "nAK1": 1, "nAK2": 2, "nAK3": 3, "nAK4": 4 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("V8bisDiag_Item_ackNak_nAK violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_V8bisDiag_Item_ackNak_nAK: $.ASN1Encoder<V8bisDiag_Item_ackNak_nAK> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_ackNak_nAK into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_ackNak_nAK, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_ackNak_nAK (value: V8bisDiag_Item_ackNak_nAK, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_ackNak_nAK) { _cached_encoder_for_V8bisDiag_Item_ackNak_nAK = $._encode_choice<V8bisDiag_Item_ackNak_nAK>({
    "none": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "nAK1": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "nAK2": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "nAK3": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "nAK4": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_V8bisDiag_Item_ackNak_nAK(value, elGetter);
}

/* eslint-enable */
