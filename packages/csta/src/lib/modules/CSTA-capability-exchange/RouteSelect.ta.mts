/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteSelect
 * @description
 * Capability bitmap for the Route Select service (ECMA-269 C.11.8, ECMA-285
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
 * RouteSelect  ::=  BIT STRING
 * {     alternateRoutes             ( 0),     -- optional parameters
 *     remainRetriesNoListAvailable         ( 1),     -- optional parameters
 *     remainRetriesNoCountAvailable         ( 2),     -- optional parameters
 *     remainRetriesRetryCount         ( 3),     -- optional parameters
 *     routeUsed                 ( 4),     -- optional parameters
 *     correlatorData                 ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type RouteSelect = BIT_STRING;

/**
 * @summary RouteSelect_alternateRoutes
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.8).
 */
export
const RouteSelect_alternateRoutes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alternateRoutes
 * @constant
 * @description
 * Alias of `RouteSelect_alternateRoutes`.
 */
export
const alternateRoutes: number = RouteSelect_alternateRoutes; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_remainRetriesNoListAvailable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.8).
 */
export
const RouteSelect_remainRetriesNoListAvailable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary remainRetriesNoListAvailable
 * @constant
 * @description
 * Alias of `RouteSelect_remainRetriesNoListAvailable`.
 */
export
const remainRetriesNoListAvailable: number = RouteSelect_remainRetriesNoListAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_remainRetriesNoCountAvailable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.8).
 */
export
const RouteSelect_remainRetriesNoCountAvailable: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary remainRetriesNoCountAvailable
 * @constant
 * @description
 * Alias of `RouteSelect_remainRetriesNoCountAvailable`.
 */
export
const remainRetriesNoCountAvailable: number = RouteSelect_remainRetriesNoCountAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_remainRetriesRetryCount
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.8).
 */
export
const RouteSelect_remainRetriesRetryCount: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary remainRetriesRetryCount
 * @constant
 * @description
 * Alias of `RouteSelect_remainRetriesRetryCount`.
 */
export
const remainRetriesRetryCount: number = RouteSelect_remainRetriesRetryCount; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_routeUsed
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.8).
 */
export
const RouteSelect_routeUsed: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary routeUsed
 * @constant
 * @description
 * Alias of `RouteSelect_routeUsed`.
 */
export
const routeUsed: number = RouteSelect_routeUsed; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.11.8).
 */
export
const RouteSelect_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `RouteSelect_correlatorData`.
 */
export
const correlatorData: number = RouteSelect_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteSelect_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.11.8).
 */
export
const RouteSelect_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `RouteSelect_privateData`.
 */
export
const privateData: number = RouteSelect_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteSelect: $.ASN1Decoder<RouteSelect> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteSelect
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteSelect (el: _Element): RouteSelect {
    if (!_cached_decoder_for_RouteSelect) { _cached_decoder_for_RouteSelect = $._decodeBitString; }
    return _cached_decoder_for_RouteSelect(el);
}

let _cached_encoder_for_RouteSelect: $.ASN1Encoder<RouteSelect> | null = null;

/**
 * @summary Encodes a(n) RouteSelect into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteSelect, encoded as an ASN.1 Element.
 */
export
function _encode_RouteSelect (value: RouteSelect, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteSelect) { _cached_encoder_for_RouteSelect = $._encodeBitString; }
    return _cached_encoder_for_RouteSelect(value, elGetter);
}


/* eslint-enable */
