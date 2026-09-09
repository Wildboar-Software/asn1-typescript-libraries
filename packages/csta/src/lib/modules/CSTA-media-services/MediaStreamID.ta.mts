/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaStreamID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaStreamID  ::=  OCTET STRING
 * ```
 */
export
type MediaStreamID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MediaStreamID: $.ASN1Decoder<MediaStreamID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaStreamID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaStreamID (el: _Element): MediaStreamID {
    if (!_cached_decoder_for_MediaStreamID) { _cached_decoder_for_MediaStreamID = $._decodeOctetString; }
    return _cached_decoder_for_MediaStreamID(el);
}

let _cached_encoder_for_MediaStreamID: $.ASN1Encoder<MediaStreamID> | null = null;

/**
 * @summary Encodes a(n) MediaStreamID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaStreamID, encoded as an ASN.1 Element.
 */
export
function _encode_MediaStreamID (value: MediaStreamID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaStreamID) { _cached_encoder_for_MediaStreamID = $._encodeOctetString; }
    return _cached_encoder_for_MediaStreamID(value, elGetter);
}


/* eslint-enable */
