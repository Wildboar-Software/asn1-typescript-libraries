/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MessageID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageID  ::=  OCTET STRING
 * ```
 */
export
type MessageID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MessageID: $.ASN1Decoder<MessageID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageID (el: _Element): MessageID {
    if (!_cached_decoder_for_MessageID) { _cached_decoder_for_MessageID = $._decodeOctetString; }
    return _cached_decoder_for_MessageID(el);
}

let _cached_encoder_for_MessageID: $.ASN1Encoder<MessageID> | null = null;

/**
 * @summary Encodes a(n) MessageID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageID, encoded as an ASN.1 Element.
 */
export
function _encode_MessageID (value: MessageID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageID) { _cached_encoder_for_MessageID = $._encodeOctetString; }
    return _cached_encoder_for_MessageID(value, elGetter);
}


/* eslint-enable */
