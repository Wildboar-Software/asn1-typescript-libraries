/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReRoute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRoute  ::=  BIT STRING
 * {     replyTimeout                 ( 1),     -- optional parameters
 *     correlatorData                 ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type ReRoute = BIT_STRING;

/**
 * @summary ReRoute_replyTimeout
 * @constant
 */
export
const ReRoute_replyTimeout: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary replyTimeout
 * @constant
 */
export
const replyTimeout: number = ReRoute_replyTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary ReRoute_correlatorData
 * @constant
 */
export
const ReRoute_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = ReRoute_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ReRoute_privateData
 * @constant
 */
export
const ReRoute_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ReRoute_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ReRoute: $.ASN1Decoder<ReRoute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReRoute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReRoute (el: _Element): ReRoute {
    if (!_cached_decoder_for_ReRoute) { _cached_decoder_for_ReRoute = $._decodeBitString; }
    return _cached_decoder_for_ReRoute(el);
}

let _cached_encoder_for_ReRoute: $.ASN1Encoder<ReRoute> | null = null;

/**
 * @summary Encodes a(n) ReRoute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReRoute, encoded as an ASN.1 Element.
 */
export
function _encode_ReRoute (value: ReRoute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReRoute) { _cached_encoder_for_ReRoute = $._encodeBitString; }
    return _cached_encoder_for_ReRoute(value, elGetter);
}


/* eslint-enable */
