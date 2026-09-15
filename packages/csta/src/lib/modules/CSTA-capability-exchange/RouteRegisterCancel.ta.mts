/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteRegisterCancel
 * @description
 * Capability bitmap for the Route Register Cancel service (ECMA-269 C.11.3,
 * ECMA-285 §9.10). Presence of this entry in `RouteingServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.11.3).
 */
export
const RouteRegisterCancel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `RouteRegisterCancel_privateData`.
 */
export
const privateData: number = RouteRegisterCancel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRegisterCancel_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.11.3).
 */
export
const RouteRegisterCancel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `RouteRegisterCancel_privateDataInAck`.
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
