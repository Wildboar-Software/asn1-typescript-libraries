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
 * @summary V23Drate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V23Drate  ::=  CHOICE {dR1200  INTEGER(0),
 *                      dR600   INTEGER(1),
 *                      dR75    INTEGER(2)
 * }
 * ```
 */
export
type V23Drate =
    { dR1200: INTEGER } /* CHOICE_ALT_ROOT */
    | { dR600: INTEGER } /* CHOICE_ALT_ROOT */
    | { dR75: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_V23Drate: $.ASN1Decoder<V23Drate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V23Drate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V23Drate (el: _Element): V23Drate {
    if (!_cached_decoder_for_V23Drate) { _cached_decoder_for_V23Drate = $._decode_inextensible_choice<V23Drate>({
        "CONTEXT 0": [ "dR1200", $._decodeInteger ],
        "CONTEXT 1": [ "dR600", $._decodeInteger ],
        "CONTEXT 2": [ "dR75", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_V23Drate(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "dR1200": 0, "dR600": 1, "dR75": 2 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("V23Drate violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_V23Drate: $.ASN1Encoder<V23Drate> | null = null;

/**
 * @summary Encodes a(n) V23Drate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V23Drate, encoded as an ASN.1 Element.
 */
export
function _encode_V23Drate (value: V23Drate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V23Drate) { _cached_encoder_for_V23Drate = $._encode_choice<V23Drate>({
    "dR1200": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "dR600": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "dR75": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_V23Drate(value, elGetter);
}

/* eslint-enable */
