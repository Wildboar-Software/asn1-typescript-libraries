/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLIIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLIIdType  ::=  BIT STRING (SIZE (16))
 * ```
 */
export
type TLIIdType = BIT_STRING;

let _cached_decoder_for_TLIIdType: $.ASN1Decoder<TLIIdType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLIIdType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLIIdType (el: _Element): TLIIdType {
    if (!_cached_decoder_for_TLIIdType) { _cached_decoder_for_TLIIdType = $._decodeBitString; }
    return _cached_decoder_for_TLIIdType(el);
}

let _cached_encoder_for_TLIIdType: $.ASN1Encoder<TLIIdType> | null = null;

/**
 * @summary Encodes a(n) TLIIdType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLIIdType, encoded as an ASN.1 Element.
 */
export
function _encode_TLIIdType (value: TLIIdType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLIIdType) { _cached_encoder_for_TLIIdType = $._encodeBitString; }
    return _cached_encoder_for_TLIIdType(value, elGetter);
}


/* eslint-enable */
