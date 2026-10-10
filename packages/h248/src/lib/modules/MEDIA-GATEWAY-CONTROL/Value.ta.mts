/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Value  ::=  SEQUENCE OF OCTET STRING
 * ```
 */
export
type Value = OCTET_STRING[]; // SequenceOfType

let _cached_decoder_for_Value: $.ASN1Decoder<Value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Value (el: _Element): Value {
    if (!_cached_decoder_for_Value) { _cached_decoder_for_Value = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString); }
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
    if (!_cached_encoder_for_Value) { _cached_encoder_for_Value = $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Value(value, elGetter);
}


/* eslint-enable */
