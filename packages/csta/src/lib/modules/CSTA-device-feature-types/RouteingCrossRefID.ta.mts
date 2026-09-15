/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";



/**
 * @summary RouteingCrossRefID
 * @description
 *
 * Identifies a routeing dialogue. Received in each Route Request; valid for the
 * duration of that dialogue for a specific call. Unique within the routeing
 * registration (`RouteRegisterReqID`); some switching functions make it unique
 * across the sub-domain. Tagged APPLICATION 24. ECMA-269 §12.3.27.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingCrossRefID  ::=  [APPLICATION 24] IMPLICIT OCTET STRING
 * ```
 */
export
type RouteingCrossRefID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RouteingCrossRefID: $.ASN1Decoder<RouteingCrossRefID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingCrossRefID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingCrossRefID (el: _Element): RouteingCrossRefID {
    if (!_cached_decoder_for_RouteingCrossRefID) { _cached_decoder_for_RouteingCrossRefID = $._decode_implicit<RouteingCrossRefID>(() => $._decodeOctetString); }
    return _cached_decoder_for_RouteingCrossRefID(el);
}

let _cached_encoder_for_RouteingCrossRefID: $.ASN1Encoder<RouteingCrossRefID> | null = null;

/**
 * @summary Encodes a(n) RouteingCrossRefID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingCrossRefID, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingCrossRefID (value: RouteingCrossRefID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingCrossRefID) { _cached_encoder_for_RouteingCrossRefID = $._encode_implicit(_TagClass.application, 24, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_RouteingCrossRefID(value, elGetter);
}


/* eslint-enable */
