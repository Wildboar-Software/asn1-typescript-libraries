/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RemoteUserID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUserID  ::=  OCTET STRING
 * ```
 */
export
type RemoteUserID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RemoteUserID: $.ASN1Decoder<RemoteUserID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUserID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUserID (el: _Element): RemoteUserID {
    if (!_cached_decoder_for_RemoteUserID) { _cached_decoder_for_RemoteUserID = $._decodeOctetString; }
    return _cached_decoder_for_RemoteUserID(el);
}

let _cached_encoder_for_RemoteUserID: $.ASN1Encoder<RemoteUserID> | null = null;

/**
 * @summary Encodes a(n) RemoteUserID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUserID, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUserID (value: RemoteUserID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUserID) { _cached_encoder_for_RemoteUserID = $._encodeOctetString; }
    return _cached_encoder_for_RemoteUserID(value, elGetter);
}


/* eslint-enable */
