/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteRegisterCancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterCancel  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type RouteRegisterCancel = BIT_STRING;

/**
 * @summary RouteRegisterCancel_privateData
 * @constant
 */
export
const RouteRegisterCancel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RouteRegisterCancel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegisterCancel_privateDataInAck
 * @constant
 */
export
const RouteRegisterCancel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = RouteRegisterCancel_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteRegisterCancel: $.ASN1Decoder<RouteRegisterCancel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterCancel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterCancel (el: _Element): RouteRegisterCancel {
    if (!_cached_decoder_for_RouteRegisterCancel) { _cached_decoder_for_RouteRegisterCancel = $._decodeBitString; }
    return _cached_decoder_for_RouteRegisterCancel(el);
}

let _cached_encoder_for_RouteRegisterCancel: $.ASN1Encoder<RouteRegisterCancel> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterCancel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterCancel, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterCancel (value: RouteRegisterCancel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterCancel) { _cached_encoder_for_RouteRegisterCancel = $._encodeBitString; }
    return _cached_encoder_for_RouteRegisterCancel(value, elGetter);
}


/* eslint-enable */
