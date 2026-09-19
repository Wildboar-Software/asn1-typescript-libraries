/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Port_Number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Port-Number  ::=  INTEGER (0..65535)
 * ```
 */
export
type Port_Number = INTEGER;

let _cached_decoder_for_Port_Number: $.ASN1Decoder<Port_Number> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Port_Number
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Port_Number (el: _Element): Port_Number {
    if (!_cached_decoder_for_Port_Number) { _cached_decoder_for_Port_Number = $._decodeInteger; }
    return _cached_decoder_for_Port_Number(el);
}

let _cached_encoder_for_Port_Number: $.ASN1Encoder<Port_Number> | null = null;

/**
 * @summary Encodes a(n) Port_Number into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Port_Number, encoded as an ASN.1 Element.
 */
export
function _encode_Port_Number (value: Port_Number, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Port_Number) { _cached_encoder_for_Port_Number = $._encodeInteger; }
    return _cached_encoder_for_Port_Number(value, elGetter);
}


/* eslint-enable */
