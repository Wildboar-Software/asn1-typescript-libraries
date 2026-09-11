/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ComputingFunctionServicesC2
 * @description
 *
 * Phase II computing-function (routeing) services. Phase II (ECMA-218)
 * compatibility BIT STRING in ACSE user-information. For Phase III and later,
 * use Capability Exchange to learn supported services and events. ECMA-285
 * §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComputingFunctionServicesC2  ::=  BIT STRING
 *     {routeRequest                   (0),
 *      reRouteRequest             (1),
 *      routeSelectRequest             (2),
 *      routeUsedRequest               (3),
 *      routeEndRequest                (4)     }
 * ```
 */
export
type ComputingFunctionServicesC2 = BIT_STRING;

/**
 * @summary ComputingFunctionServicesC2_routeRequest
 * @description Advertises `routeRequest` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const ComputingFunctionServicesC2_routeRequest: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary routeRequest
 * @description Alias of {@link ComputingFunctionServicesC2_routeRequest}.
 * @constant
 */
export
const routeRequest: number = ComputingFunctionServicesC2_routeRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ComputingFunctionServicesC2_reRouteRequest
 * @description Advertises `reRouteRequest` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const ComputingFunctionServicesC2_reRouteRequest: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary reRouteRequest
 * @description Alias of {@link ComputingFunctionServicesC2_reRouteRequest}.
 * @constant
 */
export
const reRouteRequest: number = ComputingFunctionServicesC2_reRouteRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ComputingFunctionServicesC2_routeSelectRequest
 * @description
 * Advertises `routeSelectRequest` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const ComputingFunctionServicesC2_routeSelectRequest: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary routeSelectRequest
 * @description Alias of {@link ComputingFunctionServicesC2_routeSelectRequest}.
 * @constant
 */
export
const routeSelectRequest: number = ComputingFunctionServicesC2_routeSelectRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ComputingFunctionServicesC2_routeUsedRequest
 * @description
 * Advertises `routeUsedRequest` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const ComputingFunctionServicesC2_routeUsedRequest: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary routeUsedRequest
 * @description Alias of {@link ComputingFunctionServicesC2_routeUsedRequest}.
 * @constant
 */
export
const routeUsedRequest: number = ComputingFunctionServicesC2_routeUsedRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ComputingFunctionServicesC2_routeEndRequest
 * @description
 * Advertises `routeEndRequest` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const ComputingFunctionServicesC2_routeEndRequest: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary routeEndRequest
 * @description Alias of {@link ComputingFunctionServicesC2_routeEndRequest}.
 * @constant
 */
export
const routeEndRequest: number = ComputingFunctionServicesC2_routeEndRequest; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ComputingFunctionServicesC2: $.ASN1Decoder<ComputingFunctionServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComputingFunctionServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ComputingFunctionServicesC2 (el: _Element): ComputingFunctionServicesC2 {
    if (!_cached_decoder_for_ComputingFunctionServicesC2) { _cached_decoder_for_ComputingFunctionServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_ComputingFunctionServicesC2(el);
}

let _cached_encoder_for_ComputingFunctionServicesC2: $.ASN1Encoder<ComputingFunctionServicesC2> | null = null;

/**
 * @summary Encodes a(n) ComputingFunctionServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComputingFunctionServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_ComputingFunctionServicesC2 (value: ComputingFunctionServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ComputingFunctionServicesC2) { _cached_encoder_for_ComputingFunctionServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_ComputingFunctionServicesC2(value, elGetter);
}


/* eslint-enable */
