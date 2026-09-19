/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Active
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Active  ::=  BOOLEAN
 * ```
 */
export
type Active = BOOLEAN; // BooleanType

let _cached_decoder_for_Active: $.ASN1Decoder<Active> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Active
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Active (el: _Element): Active {
    if (!_cached_decoder_for_Active) { _cached_decoder_for_Active = $._decodeBoolean; }
    return _cached_decoder_for_Active(el);
}

let _cached_encoder_for_Active: $.ASN1Encoder<Active> | null = null;

/**
 * @summary Encodes a(n) Active into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Active, encoded as an ASN.1 Element.
 */
export
function _encode_Active (value: Active, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Active) { _cached_encoder_for_Active = $._encodeBoolean; }
    return _cached_encoder_for_Active(value, elGetter);
}


/* eslint-enable */
