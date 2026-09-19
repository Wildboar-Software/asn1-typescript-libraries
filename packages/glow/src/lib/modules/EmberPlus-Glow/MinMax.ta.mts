/* eslint-disable */
import {
    NULL,
    REAL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer64, _decode_Integer64, _encode_Integer64 } from "../EmberPlus-Glow/Integer64.ta.mjs";
// export { Integer64, _decode_Integer64, _encode_Integer64 } from "../EmberPlus-Glow/Integer64.ta.mjs";


/**
 * @summary MinMax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MinMax  ::= 
 *     CHOICE {
 *         integer Integer64,
 *         real    REAL,
 *         null    NULL
 *     }
 * ```
 */
export
type MinMax =
    { integer: Integer64 } /* CHOICE_ALT_ROOT */
    | { real: REAL } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MinMax: $.ASN1Decoder<MinMax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MinMax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MinMax (el: _Element): MinMax {
    if (!_cached_decoder_for_MinMax) { _cached_decoder_for_MinMax = $._decode_inextensible_choice<MinMax>({
    "UNIVERSAL 2": [ "integer", _decode_Integer64 ],
    "UNIVERSAL 9": [ "real", $._decodeReal ],
    "UNIVERSAL 5": [ "null_", $._decodeNull ]
}); }
    return _cached_decoder_for_MinMax(el);
}

let _cached_encoder_for_MinMax: $.ASN1Encoder<MinMax> | null = null;

/**
 * @summary Encodes a(n) MinMax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MinMax, encoded as an ASN.1 Element.
 */
export
function _encode_MinMax (value: MinMax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MinMax) { _cached_encoder_for_MinMax = $._encode_choice<MinMax>({
    "integer": _encode_Integer64,
    "real": $._encodeReal,
    "null_": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_MinMax(value, elGetter);
}


/* eslint-enable */
