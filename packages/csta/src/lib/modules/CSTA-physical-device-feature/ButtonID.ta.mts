/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ButtonID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonID  ::=  OCTET STRING
 * ```
 */
export
type ButtonID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ButtonID: $.ASN1Decoder<ButtonID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonID (el: _Element): ButtonID {
    if (!_cached_decoder_for_ButtonID) { _cached_decoder_for_ButtonID = $._decodeOctetString; }
    return _cached_decoder_for_ButtonID(el);
}

let _cached_encoder_for_ButtonID: $.ASN1Encoder<ButtonID> | null = null;

/**
 * @summary Encodes a(n) ButtonID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonID, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonID (value: ButtonID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonID) { _cached_encoder_for_ButtonID = $._encodeOctetString; }
    return _cached_encoder_for_ButtonID(value, elGetter);
}


/* eslint-enable */
