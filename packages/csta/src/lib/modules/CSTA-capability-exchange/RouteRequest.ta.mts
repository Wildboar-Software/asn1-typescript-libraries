/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RouteRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRequest  ::=  BIT STRING
 * {     callingDevice                 ( 0),     -- optional parameters
 *     routeingDevice                 ( 1),     -- optional parameters
 *     routeSelAlgorithmACD             ( 2),     -- optional parameters
 *     routeSelAlgorithmEmergency         ( 3),     -- optional parameters
 *     routeSelAlgorithmLeastCost         ( 4),     -- optional parameters
 *     routeSelAlgorithmNormal         ( 5),     -- optional parameters
 *     routeSelAlgorithmUserDefined         ( 6),     -- optional parameters
 *     priority                 ( 7),     -- optional parameters
 *     replyTimeout                 ( 8),     -- optional parameters
 *     correlatorData                 ( 9),     -- optional parameters
 *     mediaCallCharacteristics         (10),     -- optional parameters
 *     callCharacteristics             (11),     -- optional parameters
 *     routedCallInfo                 (12),     -- optional parameters
 *     subjectOfCall                (15),     -- optional parameters
 *     messageInformation            (16),     -- optional parameters
 *     languagePreferences            (17),     -- optional parameters
 *     deviceHistory                (18),     -- optional parameters
 *     privateData                 (13),     -- optional parameters
 *     nonCallRelatedRouteing             (14) }
 * ```
 */
export
type RouteRequest = BIT_STRING;

/**
 * @summary RouteRequest_callingDevice
 * @constant
 */
export
const RouteRequest_callingDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callingDevice
 * @constant
 */
export
const callingDevice: number = RouteRequest_callingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_routeingDevice
 * @constant
 */
export
const RouteRequest_routeingDevice: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary routeingDevice
 * @constant
 */
export
const routeingDevice: number = RouteRequest_routeingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_routeSelAlgorithmACD
 * @constant
 */
export
const RouteRequest_routeSelAlgorithmACD: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary routeSelAlgorithmACD
 * @constant
 */
export
const routeSelAlgorithmACD: number = RouteRequest_routeSelAlgorithmACD; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_routeSelAlgorithmEmergency
 * @constant
 */
export
const RouteRequest_routeSelAlgorithmEmergency: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary routeSelAlgorithmEmergency
 * @constant
 */
export
const routeSelAlgorithmEmergency: number = RouteRequest_routeSelAlgorithmEmergency; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_routeSelAlgorithmLeastCost
 * @constant
 */
export
const RouteRequest_routeSelAlgorithmLeastCost: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary routeSelAlgorithmLeastCost
 * @constant
 */
export
const routeSelAlgorithmLeastCost: number = RouteRequest_routeSelAlgorithmLeastCost; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_routeSelAlgorithmNormal
 * @constant
 */
export
const RouteRequest_routeSelAlgorithmNormal: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary routeSelAlgorithmNormal
 * @constant
 */
export
const routeSelAlgorithmNormal: number = RouteRequest_routeSelAlgorithmNormal; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_routeSelAlgorithmUserDefined
 * @constant
 */
export
const RouteRequest_routeSelAlgorithmUserDefined: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary routeSelAlgorithmUserDefined
 * @constant
 */
export
const routeSelAlgorithmUserDefined: number = RouteRequest_routeSelAlgorithmUserDefined; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_priority
 * @constant
 */
export
const RouteRequest_priority: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary priority
 * @constant
 */
export
const priority: number = RouteRequest_priority; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_replyTimeout
 * @constant
 */
export
const RouteRequest_replyTimeout: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary replyTimeout
 * @constant
 */
export
const replyTimeout: number = RouteRequest_replyTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_correlatorData
 * @constant
 */
export
const RouteRequest_correlatorData: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = RouteRequest_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_mediaCallCharacteristics
 * @constant
 */
export
const RouteRequest_mediaCallCharacteristics: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = RouteRequest_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_callCharacteristics
 * @constant
 */
export
const RouteRequest_callCharacteristics: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = RouteRequest_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_routedCallInfo
 * @constant
 */
export
const RouteRequest_routedCallInfo: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary routedCallInfo
 * @constant
 */
export
const routedCallInfo: number = RouteRequest_routedCallInfo; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_subjectOfCall
 * @constant
 */
export
const RouteRequest_subjectOfCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = RouteRequest_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_messageInformation
 * @constant
 */
export
const RouteRequest_messageInformation: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary messageInformation
 * @constant
 */
export
const messageInformation: number = RouteRequest_messageInformation; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_languagePreferences
 * @constant
 */
export
const RouteRequest_languagePreferences: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = RouteRequest_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_deviceHistory
 * @constant
 */
export
const RouteRequest_deviceHistory: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = RouteRequest_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_privateData
 * @constant
 */
export
const RouteRequest_privateData: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RouteRequest_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary RouteRequest_nonCallRelatedRouteing
 * @constant
 */
export
const RouteRequest_nonCallRelatedRouteing: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary nonCallRelatedRouteing
 * @constant
 */
export
const nonCallRelatedRouteing: number = RouteRequest_nonCallRelatedRouteing; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RouteRequest: $.ASN1Decoder<RouteRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRequest (el: _Element): RouteRequest {
    if (!_cached_decoder_for_RouteRequest) { _cached_decoder_for_RouteRequest = $._decodeBitString; }
    return _cached_decoder_for_RouteRequest(el);
}

let _cached_encoder_for_RouteRequest: $.ASN1Encoder<RouteRequest> | null = null;

/**
 * @summary Encodes a(n) RouteRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRequest, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRequest (value: RouteRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRequest) { _cached_encoder_for_RouteRequest = $._encodeBitString; }
    return _cached_encoder_for_RouteRequest(value, elGetter);
}


/* eslint-enable */
