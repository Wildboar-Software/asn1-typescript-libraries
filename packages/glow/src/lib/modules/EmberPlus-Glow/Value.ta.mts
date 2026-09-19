/* eslint-disable */
import {
    BOOLEAN,
    NULL,
    OCTET_STRING,
    REAL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer64, _decode_Integer64, _encode_Integer64 } from "../EmberPlus-Glow/Integer64.ta.mjs";
// export { Integer64, _decode_Integer64, _encode_Integer64 } from "../EmberPlus-Glow/Integer64.ta.mjs";
import { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";
// export { EmberString, _decode_EmberString, _encode_EmberString } from "../EmberPlus-Glow/EmberString.ta.mjs";


/**
 * @summary Value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Value  ::= 
 *     CHOICE {
 *         integer Integer64,
 *         real    REAL,
 *         string  EmberString,
 *         boolean BOOLEAN,
 *         octets  OCTET STRING,
 *         null    NULL
 *     }
 * ```
 */
export
type Value =
    { integer: Integer64 } /* CHOICE_ALT_ROOT */
    | { real: REAL } /* CHOICE_ALT_ROOT */
    | { string_: EmberString } /* CHOICE_ALT_ROOT */
    | { boolean_: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { octets: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Value: $.ASN1Decoder<Value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Value (el: _Element): Value {
    if (!_cached_decoder_for_Value) { _cached_decoder_for_Value = $._decode_inextensible_choice<Value>({
    "UNIVERSAL 2": [ "integer", _decode_Integer64 ],
    "UNIVERSAL 9": [ "real", $._decodeReal ],
    "UNIVERSAL 12": [ "string_", _decode_EmberString ],
    "UNIVERSAL 1": [ "boolean_", $._decodeBoolean ],
    "UNIVERSAL 4": [ "octets", $._decodeOctetString ],
    "UNIVERSAL 5": [ "null_", $._decodeNull ]
}); }
    return _cached_decoder_for_Value(el);
}

let _cached_encoder_for_Value: $.ASN1Encoder<Value> | null = null;

/**
 * @summary Encodes a(n) Value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Value, encoded as an ASN.1 Element.
 */
export
function _encode_Value (value: Value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Value) { _cached_encoder_for_Value = $._encode_choice<Value>({
    "integer": _encode_Integer64,
    "real": $._encodeReal,
    "string_": _encode_EmberString,
    "boolean_": $._encodeBoolean,
    "octets": $._encodeOctetString,
    "null_": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_Value(value, elGetter);
}


/* eslint-enable */
