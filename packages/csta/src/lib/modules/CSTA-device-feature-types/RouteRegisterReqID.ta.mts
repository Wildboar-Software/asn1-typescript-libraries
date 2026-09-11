/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteRegisterReqID
 * @description
 *
 * Identifies a routeing registration for which the computing function (as
 * routeing server) receives routeing requests. May apply to one routeing device
 * or all in the sub-domain. Returned from Route Register; valid until
 * registration ends. Unique across a CSTA service boundary. ECMA-269 §12.3.28.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterReqID  ::=  OCTET STRING
 * ```
 */
export
type RouteRegisterReqID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RouteRegisterReqID: $.ASN1Decoder<RouteRegisterReqID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterReqID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterReqID (el: _Element): RouteRegisterReqID {
    if (!_cached_decoder_for_RouteRegisterReqID) { _cached_decoder_for_RouteRegisterReqID = $._decodeOctetString; }
    return _cached_decoder_for_RouteRegisterReqID(el);
}

let _cached_encoder_for_RouteRegisterReqID: $.ASN1Encoder<RouteRegisterReqID> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterReqID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterReqID, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterReqID (value: RouteRegisterReqID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterReqID) { _cached_encoder_for_RouteRegisterReqID = $._encodeOctetString; }
    return _cached_encoder_for_RouteRegisterReqID(value, elGetter);
}


/* eslint-enable */
