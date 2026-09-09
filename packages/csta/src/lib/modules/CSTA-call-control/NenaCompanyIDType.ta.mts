/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { IA5String, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NenaCompanyIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NenaCompanyIDType  ::=  IA5String
 * ```
 */
export
type NenaCompanyIDType = IA5String; // IA5String

let _cached_decoder_for_NenaCompanyIDType: $.ASN1Decoder<NenaCompanyIDType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NenaCompanyIDType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NenaCompanyIDType (el: _Element): NenaCompanyIDType {
    if (!_cached_decoder_for_NenaCompanyIDType) { _cached_decoder_for_NenaCompanyIDType = $._decodeIA5String; }
    return _cached_decoder_for_NenaCompanyIDType(el);
}

let _cached_encoder_for_NenaCompanyIDType: $.ASN1Encoder<NenaCompanyIDType> | null = null;

/**
 * @summary Encodes a(n) NenaCompanyIDType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NenaCompanyIDType, encoded as an ASN.1 Element.
 */
export
function _encode_NenaCompanyIDType (value: NenaCompanyIDType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NenaCompanyIDType) { _cached_encoder_for_NenaCompanyIDType = $._encodeIA5String; }
    return _cached_encoder_for_NenaCompanyIDType(value, elGetter);
}


/* eslint-enable */
