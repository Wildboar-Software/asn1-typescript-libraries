/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CircuitIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CircuitIdType  ::=  NumericString (SIZE (20))
 * ```
 */
export
type CircuitIdType = NumericString; // NumericString

let _cached_decoder_for_CircuitIdType: $.ASN1Decoder<CircuitIdType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CircuitIdType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CircuitIdType (el: _Element): CircuitIdType {
    if (!_cached_decoder_for_CircuitIdType) { _cached_decoder_for_CircuitIdType = $._decodeNumericString; }
    return _cached_decoder_for_CircuitIdType(el);
}

let _cached_encoder_for_CircuitIdType: $.ASN1Encoder<CircuitIdType> | null = null;

/**
 * @summary Encodes a(n) CircuitIdType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CircuitIdType, encoded as an ASN.1 Element.
 */
export
function _encode_CircuitIdType (value: CircuitIdType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CircuitIdType) { _cached_encoder_for_CircuitIdType = $._encodeNumericString; }
    return _cached_encoder_for_CircuitIdType(value, elGetter);
}


/* eslint-enable */
