/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReRoute
 * @description
 * Capability bitmap for the Re-Route service (ECMA-269 C.11.4, ECMA-285 §9.10).
 * Presence of this entry in `RouteingServList` means the SF supports that
 * service. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.4).
 */
export
const ReRoute_replyTimeout: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary replyTimeout
 * @constant
 * @description
 * Alias of `ReRoute_replyTimeout`.
 */
export
const replyTimeout: number = ReRoute_replyTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary ReRoute_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.11.4).
 */
export
const ReRoute_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `ReRoute_correlatorData`.
 */
export
const correlatorData: number = ReRoute_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ReRoute_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.11.4).
 */
export
const ReRoute_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ReRoute_privateData`.
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
