/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaServiceInstanceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServiceInstanceID  ::=  OCTET STRING
 * ```
 */
export
type MediaServiceInstanceID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MediaServiceInstanceID: $.ASN1Decoder<MediaServiceInstanceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaServiceInstanceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaServiceInstanceID (el: _Element): MediaServiceInstanceID {
    if (!_cached_decoder_for_MediaServiceInstanceID) { _cached_decoder_for_MediaServiceInstanceID = $._decodeOctetString; }
    return _cached_decoder_for_MediaServiceInstanceID(el);
}

let _cached_encoder_for_MediaServiceInstanceID: $.ASN1Encoder<MediaServiceInstanceID> | null = null;

/**
 * @summary Encodes a(n) MediaServiceInstanceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaServiceInstanceID, encoded as an ASN.1 Element.
 */
export
function _encode_MediaServiceInstanceID (value: MediaServiceInstanceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaServiceInstanceID) { _cached_encoder_for_MediaServiceInstanceID = $._encodeOctetString; }
    return _cached_encoder_for_MediaServiceInstanceID(value, elGetter);
}


/* eslint-enable */
