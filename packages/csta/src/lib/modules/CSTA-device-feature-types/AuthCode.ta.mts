/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AuthCode
 * @description
 *
 * Authorization code the switching function uses to check whether the computing
 * function may perform a given service. If required and missing or invalid, the
 * service is rejected. May be omitted from events for security. Association
 * completes before resulting state transitions. ECMA-269 §12.2.3.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthCode  ::=  OCTET STRING
 * ```
 */
export
type AuthCode = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AuthCode: $.ASN1Decoder<AuthCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthCode (el: _Element): AuthCode {
    if (!_cached_decoder_for_AuthCode) { _cached_decoder_for_AuthCode = $._decodeOctetString; }
    return _cached_decoder_for_AuthCode(el);
}

let _cached_encoder_for_AuthCode: $.ASN1Encoder<AuthCode> | null = null;

/**
 * @summary Encodes a(n) AuthCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthCode, encoded as an ASN.1 Element.
 */
export
function _encode_AuthCode (value: AuthCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthCode) { _cached_encoder_for_AuthCode = $._encodeOctetString; }
    return _cached_encoder_for_AuthCode(value, elGetter);
}


/* eslint-enable */
