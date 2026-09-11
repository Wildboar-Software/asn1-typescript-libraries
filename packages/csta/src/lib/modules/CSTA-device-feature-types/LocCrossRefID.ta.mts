/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { IA5String, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LocCrossRefID
 * @description
 *
 * Location-tracking session cross-reference. ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocCrossRefID  ::=  IA5String
 * ```
 */
export
type LocCrossRefID = IA5String; // IA5String

let _cached_decoder_for_LocCrossRefID: $.ASN1Decoder<LocCrossRefID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocCrossRefID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocCrossRefID (el: _Element): LocCrossRefID {
    if (!_cached_decoder_for_LocCrossRefID) { _cached_decoder_for_LocCrossRefID = $._decodeIA5String; }
    return _cached_decoder_for_LocCrossRefID(el);
}

let _cached_encoder_for_LocCrossRefID: $.ASN1Encoder<LocCrossRefID> | null = null;

/**
 * @summary Encodes a(n) LocCrossRefID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocCrossRefID, encoded as an ASN.1 Element.
 */
export
function _encode_LocCrossRefID (value: LocCrossRefID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocCrossRefID) { _cached_encoder_for_LocCrossRefID = $._encodeIA5String; }
    return _cached_encoder_for_LocCrossRefID(value, elGetter);
}


/* eslint-enable */
