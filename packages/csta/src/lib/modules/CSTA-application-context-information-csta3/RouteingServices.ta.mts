/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteingServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingServices  ::=  BIT STRING
 * {    routeRegister                        ( 0),
 *         routeRegisterCancel                    ( 1),
 *         routeRegisterAbort                    ( 2),
 *         reroute                            ( 3),
 *         routeEnd                        ( 4),
 *         routeReject                        ( 5),
 *         routeRequest                        ( 6),
 *         routeSelect                        ( 7),
 *         routeUsed                        ( 8) }
 * ```
 */
export
type RouteingServices = BIT_STRING;

/**
 * @summary RouteingServices_routeRegister
 * @constant
 */
export
const RouteingServices_routeRegister: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary routeRegister
 * @constant
 */
export
const routeRegister: number = RouteingServices_routeRegister; /* SHORT_NAMED_BIT */

/**
 * @summary RouteingServices_routeRegisterCancel
 * @constant
 */
export
const RouteingServices_routeRegisterCancel: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary routeRegisterCancel
 * @constant
 */
export
const routeRegisterCancel: number = RouteingServices_routeRegisterCancel; /* SHORT_NAMED_BIT */

/**
 * @summary RouteingServices_routeRegisterAbort
 * @constant
 */
export
const RouteingServices_routeRegisterAbort: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary routeRegisterAbort
 * @constant
 */
export
const routeRegisterAbort: number = RouteingServices_routeRegisterAbort; /* SHORT_NAMED_BIT */

/**
 * @summary RouteingServices_reroute
 * @constant
 */
export
const RouteingServices_reroute: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary reroute
 * @constant
 */
export
const reroute: number = RouteingServices_reroute; /* SHORT_NAMED_BIT */

/**
 * @summary RouteingServices_routeEnd
 * @constant
 */
export
const RouteingServices_routeEnd: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary routeEnd
 * @constant
 */
export
const routeEnd: number = RouteingServices_routeEnd; /* SHORT_NAMED_BIT */

/**
 * @summary RouteingServices_routeReject
 * @constant
 */
export
const RouteingServices_routeReject: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary routeReject
 * @constant
 */
export
const routeReject: number = RouteingServices_routeReject; /* SHORT_NAMED_BIT */

/**
 * @summary RouteingServices_routeRequest
 * @constant
 */
export
const RouteingServices_routeRequest: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary routeRequest
 * @constant
 */
export
const routeRequest: number = RouteingServices_routeRequest; /* SHORT_NAMED_BIT */

/**
 * @summary RouteingServices_routeSelect
 * @constant
 */
export
const RouteingServices_routeSelect: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary routeSelect
 * @constant
 */
export
const routeSelect: number = RouteingServices_routeSelect; /* SHORT_NAMED_BIT */

/**
 * @summary RouteingServices_routeUsed
 * @constant
 */
export
const RouteingServices_routeUsed: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary routeUsed
 * @constant
 */
export
const routeUsed: number = RouteingServices_routeUsed; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteingServices: $.ASN1Decoder<RouteingServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingServices (el: _Element): RouteingServices {
    if (!_cached_decoder_for_RouteingServices) { _cached_decoder_for_RouteingServices = $._decodeBitString; }
    return _cached_decoder_for_RouteingServices(el);
}

let _cached_encoder_for_RouteingServices: $.ASN1Encoder<RouteingServices> | null = null;

/**
 * @summary Encodes a(n) RouteingServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingServices, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingServices (value: RouteingServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingServices) { _cached_encoder_for_RouteingServices = $._encodeBitString; }
    return _cached_encoder_for_RouteingServices(value, elGetter);
}


/* eslint-enable */
