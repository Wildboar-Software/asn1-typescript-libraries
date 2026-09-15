/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteUsed
 * @description
 * Capability bitmap for the Route Used service (ECMA-269 C.11.9, ECMA-285
 * §9.10). Presence of this entry in `RouteingServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteUsed  ::=  BIT STRING
 * {     callingDevice                 ( 0),     -- optional parameters
 *     domain                     ( 1),     -- optional parameters
 *     correlatorData                 ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type RouteUsed = BIT_STRING;

/**
 * @summary RouteUsed_callingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.9).
 */
export
const RouteUsed_callingDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callingDevice
 * @constant
 * @description
 * Alias of `RouteUsed_callingDevice`.
 */
export
const callingDevice: number = RouteUsed_callingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary RouteUsed_domain
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.9).
 */
export
const RouteUsed_domain: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary domain
 * @constant
 * @description
 * Alias of `RouteUsed_domain`.
 */
export
const domain: number = RouteUsed_domain; /* SHORT_NAMED_BIT */

/**
 * @summary RouteUsed_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.11.9).
 */
export
const RouteUsed_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `RouteUsed_correlatorData`.
 */
export
const correlatorData: number = RouteUsed_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteUsed_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.11.9).
 */
export
const RouteUsed_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `RouteUsed_privateData`.
 */
export
const privateData: number = RouteUsed_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteUsed: $.ASN1Decoder<RouteUsed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteUsed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteUsed (el: _Element): RouteUsed {
    if (!_cached_decoder_for_RouteUsed) { _cached_decoder_for_RouteUsed = $._decodeBitString; }
    return _cached_decoder_for_RouteUsed(el);
}

let _cached_encoder_for_RouteUsed: $.ASN1Encoder<RouteUsed> | null = null;

/**
 * @summary Encodes a(n) RouteUsed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteUsed, encoded as an ASN.1 Element.
 */
export
function _encode_RouteUsed (value: RouteUsed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteUsed) { _cached_encoder_for_RouteUsed = $._encodeBitString; }
    return _cached_encoder_for_RouteUsed(value, elGetter);
}


/* eslint-enable */
