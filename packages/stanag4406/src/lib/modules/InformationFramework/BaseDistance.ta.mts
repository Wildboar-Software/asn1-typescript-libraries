/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BaseDistance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export
type BaseDistance = INTEGER;

let _cached_decoder_for_BaseDistance: $.ASN1Decoder<BaseDistance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BaseDistance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BaseDistance (el: _Element): BaseDistance {
    if (!_cached_decoder_for_BaseDistance) { _cached_decoder_for_BaseDistance = $._decodeInteger; }
    return _cached_decoder_for_BaseDistance(el);
}

let _cached_encoder_for_BaseDistance: $.ASN1Encoder<BaseDistance> | null = null;

/**
 * @summary Encodes a(n) BaseDistance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseDistance, encoded as an ASN.1 Element.
 */
export
function _encode_BaseDistance (value: BaseDistance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BaseDistance) { _cached_encoder_for_BaseDistance = $._encodeInteger; }
    return _cached_encoder_for_BaseDistance(value, elGetter);
}


/* eslint-enable */
