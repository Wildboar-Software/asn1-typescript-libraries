/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteReject
 * @description
 * Capability bitmap for the Route Reject service (ECMA-269 C.11.6, ECMA-285
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
 * RouteReject  ::=  BIT STRING
 * {     rejectCauseBusyOverflow         ( 0),     -- optional parameters
 *     rejectCauseQueueTimeOverflow         ( 1),     -- optional parameters
 *     rejectCauseCapacityOverflow         ( 2),     -- optional parameters
 *     rejectCauseCalendarOverflow         ( 3),     -- optional parameters
 *     rejectCauseUnknownOverflow         ( 4),     -- optional parameters
 *     correlatorData                 ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type RouteReject = BIT_STRING;

/**
 * @summary RouteReject_rejectCauseBusyOverflow
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.6).
 */
export
const RouteReject_rejectCauseBusyOverflow: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseBusyOverflow
 * @constant
 * @description
 * Alias of `RouteReject_rejectCauseBusyOverflow`.
 */
export
const rejectCauseBusyOverflow: number = RouteReject_rejectCauseBusyOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_rejectCauseQueueTimeOverflow
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.6).
 */
export
const RouteReject_rejectCauseQueueTimeOverflow: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseQueueTimeOverflow
 * @constant
 * @description
 * Alias of `RouteReject_rejectCauseQueueTimeOverflow`.
 */
export
const rejectCauseQueueTimeOverflow: number = RouteReject_rejectCauseQueueTimeOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_rejectCauseCapacityOverflow
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.6).
 */
export
const RouteReject_rejectCauseCapacityOverflow: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseCapacityOverflow
 * @constant
 * @description
 * Alias of `RouteReject_rejectCauseCapacityOverflow`.
 */
export
const rejectCauseCapacityOverflow: number = RouteReject_rejectCauseCapacityOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_rejectCauseCalendarOverflow
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.6).
 */
export
const RouteReject_rejectCauseCalendarOverflow: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseCalendarOverflow
 * @constant
 * @description
 * Alias of `RouteReject_rejectCauseCalendarOverflow`.
 */
export
const rejectCauseCalendarOverflow: number = RouteReject_rejectCauseCalendarOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_rejectCauseUnknownOverflow
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.11.6).
 */
export
const RouteReject_rejectCauseUnknownOverflow: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseUnknownOverflow
 * @constant
 * @description
 * Alias of `RouteReject_rejectCauseUnknownOverflow`.
 */
export
const rejectCauseUnknownOverflow: number = RouteReject_rejectCauseUnknownOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.11.6).
 */
export
const RouteReject_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `RouteReject_correlatorData`.
 */
export
const correlatorData: number = RouteReject_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.11.6).
 */
export
const RouteReject_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `RouteReject_privateData`.
 */
export
const privateData: number = RouteReject_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteReject: $.ASN1Decoder<RouteReject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteReject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteReject (el: _Element): RouteReject {
    if (!_cached_decoder_for_RouteReject) { _cached_decoder_for_RouteReject = $._decodeBitString; }
    return _cached_decoder_for_RouteReject(el);
}

let _cached_encoder_for_RouteReject: $.ASN1Encoder<RouteReject> | null = null;

/**
 * @summary Encodes a(n) RouteReject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteReject, encoded as an ASN.1 Element.
 */
export
function _encode_RouteReject (value: RouteReject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteReject) { _cached_encoder_for_RouteReject = $._encodeBitString; }
    return _cached_encoder_for_RouteReject(value, elGetter);
}


/* eslint-enable */
