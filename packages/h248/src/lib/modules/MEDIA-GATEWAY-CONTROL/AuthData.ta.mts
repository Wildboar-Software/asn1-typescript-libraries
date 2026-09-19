/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthData  ::=  OCTET STRING (SIZE (12..32))
 * ```
 */
export
type AuthData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AuthData: $.ASN1Decoder<AuthData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthData (el: _Element): AuthData {
    if (!_cached_decoder_for_AuthData) { _cached_decoder_for_AuthData = $._decodeOctetString; }
    return _cached_decoder_for_AuthData(el);
}

let _cached_encoder_for_AuthData: $.ASN1Encoder<AuthData> | null = null;

/**
 * @summary Encodes a(n) AuthData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthData, encoded as an ASN.1 Element.
 */
export
function _encode_AuthData (value: AuthData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthData) { _cached_encoder_for_AuthData = $._encodeOctetString; }
    return _cached_encoder_for_AuthData(value, elGetter);
}


/* eslint-enable */
