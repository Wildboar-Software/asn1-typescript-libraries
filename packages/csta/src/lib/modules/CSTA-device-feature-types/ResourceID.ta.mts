/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { IA5String, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ResourceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceID  ::=  IA5String
 * ```
 */
export
type ResourceID = IA5String; // IA5String

let _cached_decoder_for_ResourceID: $.ASN1Decoder<ResourceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceID (el: _Element): ResourceID {
    if (!_cached_decoder_for_ResourceID) { _cached_decoder_for_ResourceID = $._decodeIA5String; }
    return _cached_decoder_for_ResourceID(el);
}

let _cached_encoder_for_ResourceID: $.ASN1Encoder<ResourceID> | null = null;

/**
 * @summary Encodes a(n) ResourceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceID, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceID (value: ResourceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceID) { _cached_encoder_for_ResourceID = $._encodeIA5String; }
    return _cached_encoder_for_ResourceID(value, elGetter);
}


/* eslint-enable */
