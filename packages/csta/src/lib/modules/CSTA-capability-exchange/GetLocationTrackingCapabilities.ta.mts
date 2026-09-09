/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLocationTrackingCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilities  ::=  BIT STRING
 * {    privateData                ( 0),
 *     privateDataInAck            ( 1) }
 * ```
 */
export
type GetLocationTrackingCapabilities = BIT_STRING;

/**
 * @summary GetLocationTrackingCapabilities_privateData
 * @constant
 */
export
const GetLocationTrackingCapabilities_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetLocationTrackingCapabilities_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetLocationTrackingCapabilities_privateDataInAck
 * @constant
 */
export
const GetLocationTrackingCapabilities_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetLocationTrackingCapabilities_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetLocationTrackingCapabilities: $.ASN1Decoder<GetLocationTrackingCapabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingCapabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingCapabilities (el: _Element): GetLocationTrackingCapabilities {
    if (!_cached_decoder_for_GetLocationTrackingCapabilities) { _cached_decoder_for_GetLocationTrackingCapabilities = $._decodeBitString; }
    return _cached_decoder_for_GetLocationTrackingCapabilities(el);
}

let _cached_encoder_for_GetLocationTrackingCapabilities: $.ASN1Encoder<GetLocationTrackingCapabilities> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingCapabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingCapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingCapabilities (value: GetLocationTrackingCapabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingCapabilities) { _cached_encoder_for_GetLocationTrackingCapabilities = $._encodeBitString; }
    return _cached_encoder_for_GetLocationTrackingCapabilities(value, elGetter);
}


/* eslint-enable */
