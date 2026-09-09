/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DisplayID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayID  ::=  OCTET STRING
 * ```
 */
export
type DisplayID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_DisplayID: $.ASN1Decoder<DisplayID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayID (el: _Element): DisplayID {
    if (!_cached_decoder_for_DisplayID) { _cached_decoder_for_DisplayID = $._decodeOctetString; }
    return _cached_decoder_for_DisplayID(el);
}

let _cached_encoder_for_DisplayID: $.ASN1Encoder<DisplayID> | null = null;

/**
 * @summary Encodes a(n) DisplayID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayID, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayID (value: DisplayID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayID) { _cached_encoder_for_DisplayID = $._encodeOctetString; }
    return _cached_encoder_for_DisplayID(value, elGetter);
}


/* eslint-enable */
