/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteReject
 * @description
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
 */
export
const RouteReject_rejectCauseBusyOverflow: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseBusyOverflow
 * @constant
 */
export
const rejectCauseBusyOverflow: number = RouteReject_rejectCauseBusyOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_rejectCauseQueueTimeOverflow
 * @constant
 */
export
const RouteReject_rejectCauseQueueTimeOverflow: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseQueueTimeOverflow
 * @constant
 */
export
const rejectCauseQueueTimeOverflow: number = RouteReject_rejectCauseQueueTimeOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_rejectCauseCapacityOverflow
 * @constant
 */
export
const RouteReject_rejectCauseCapacityOverflow: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseCapacityOverflow
 * @constant
 */
export
const rejectCauseCapacityOverflow: number = RouteReject_rejectCauseCapacityOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_rejectCauseCalendarOverflow
 * @constant
 */
export
const RouteReject_rejectCauseCalendarOverflow: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseCalendarOverflow
 * @constant
 */
export
const rejectCauseCalendarOverflow: number = RouteReject_rejectCauseCalendarOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_rejectCauseUnknownOverflow
 * @constant
 */
export
const RouteReject_rejectCauseUnknownOverflow: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary rejectCauseUnknownOverflow
 * @constant
 */
export
const rejectCauseUnknownOverflow: number = RouteReject_rejectCauseUnknownOverflow; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_correlatorData
 * @constant
 */
export
const RouteReject_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = RouteReject_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteReject_privateData
 * @constant
 */
export
const RouteReject_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
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
