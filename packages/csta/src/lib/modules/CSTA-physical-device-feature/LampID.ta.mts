/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LampID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampID  ::=  OCTET STRING
 * ```
 */
export
type LampID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_LampID: $.ASN1Decoder<LampID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampID (el: _Element): LampID {
    if (!_cached_decoder_for_LampID) { _cached_decoder_for_LampID = $._decodeOctetString; }
    return _cached_decoder_for_LampID(el);
}

let _cached_encoder_for_LampID: $.ASN1Encoder<LampID> | null = null;

/**
 * @summary Encodes a(n) LampID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampID, encoded as an ASN.1 Element.
 */
export
function _encode_LampID (value: LampID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampID) { _cached_encoder_for_LampID = $._encodeOctetString; }
    return _cached_encoder_for_LampID(value, elGetter);
}


/* eslint-enable */
