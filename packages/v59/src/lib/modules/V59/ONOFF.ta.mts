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
 * @summary ONOFF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ONOFF  ::=  CHOICE {dISABLED  INTEGER(0),
 *                   eNABLED   INTEGER(1)
 * }
 * ```
 */
export
type ONOFF =
    { dISABLED: INTEGER } /* CHOICE_ALT_ROOT */
    | { eNABLED: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ONOFF: $.ASN1Decoder<ONOFF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ONOFF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ONOFF (el: _Element): ONOFF {
    if (!_cached_decoder_for_ONOFF) { _cached_decoder_for_ONOFF = $._decode_inextensible_choice<ONOFF>({
        "CONTEXT 0": [ "dISABLED", $._decodeInteger ],
        "CONTEXT 1": [ "eNABLED", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_ONOFF(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "dISABLED": 0, "eNABLED": 1 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("ONOFF violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_ONOFF: $.ASN1Encoder<ONOFF> | null = null;

/**
 * @summary Encodes a(n) ONOFF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ONOFF, encoded as an ASN.1 Element.
 */
export
function _encode_ONOFF (value: ONOFF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ONOFF) { _cached_encoder_for_ONOFF = $._encode_choice<ONOFF>({
    "dISABLED": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "eNABLED": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_ONOFF(value, elGetter);
}

/* eslint-enable */
