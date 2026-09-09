/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StartLocationTrackingSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartLocationTrackingSession  ::=  BIT STRING
 * {    collectionType                 ( 0),
 *     collectionInterval            ( 1),
 *     maxCollections                ( 2),
 *     collectionFilter            ( 3),
 *     reportingType                ( 4),
 *     reportingCount                ( 5),
 *     privateData                ( 6),
 *     piDFProfileOption1inAck            ( 7),
 *     piDFProfileOption2inAck            ( 8),
 *     privateDataInAck            ( 9) }
 * ```
 */
export
type StartLocationTrackingSession = BIT_STRING;

/**
 * @summary StartLocationTrackingSession_collectionType
 * @constant
 */
export
const StartLocationTrackingSession_collectionType: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary collectionType
 * @constant
 */
export
const collectionType: number = StartLocationTrackingSession_collectionType; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_collectionInterval
 * @constant
 */
export
const StartLocationTrackingSession_collectionInterval: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary collectionInterval
 * @constant
 */
export
const collectionInterval: number = StartLocationTrackingSession_collectionInterval; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_maxCollections
 * @constant
 */
export
const StartLocationTrackingSession_maxCollections: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary maxCollections
 * @constant
 */
export
const maxCollections: number = StartLocationTrackingSession_maxCollections; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_collectionFilter
 * @constant
 */
export
const StartLocationTrackingSession_collectionFilter: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary collectionFilter
 * @constant
 */
export
const collectionFilter: number = StartLocationTrackingSession_collectionFilter; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_reportingType
 * @constant
 */
export
const StartLocationTrackingSession_reportingType: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary reportingType
 * @constant
 */
export
const reportingType: number = StartLocationTrackingSession_reportingType; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_reportingCount
 * @constant
 */
export
const StartLocationTrackingSession_reportingCount: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary reportingCount
 * @constant
 */
export
const reportingCount: number = StartLocationTrackingSession_reportingCount; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_privateData
 * @constant
 */
export
const StartLocationTrackingSession_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StartLocationTrackingSession_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_piDFProfileOption1inAck
 * @constant
 */
export
const StartLocationTrackingSession_piDFProfileOption1inAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary piDFProfileOption1inAck
 * @constant
 */
export
const piDFProfileOption1inAck: number = StartLocationTrackingSession_piDFProfileOption1inAck; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_piDFProfileOption2inAck
 * @constant
 */
export
const StartLocationTrackingSession_piDFProfileOption2inAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary piDFProfileOption2inAck
 * @constant
 */
export
const piDFProfileOption2inAck: number = StartLocationTrackingSession_piDFProfileOption2inAck; /* SHORT_NAMED_BIT */

/**
 * @summary StartLocationTrackingSession_privateDataInAck
 * @constant
 */
export
const StartLocationTrackingSession_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = StartLocationTrackingSession_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StartLocationTrackingSession: $.ASN1Decoder<StartLocationTrackingSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartLocationTrackingSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartLocationTrackingSession (el: _Element): StartLocationTrackingSession {
    if (!_cached_decoder_for_StartLocationTrackingSession) { _cached_decoder_for_StartLocationTrackingSession = $._decodeBitString; }
    return _cached_decoder_for_StartLocationTrackingSession(el);
}

let _cached_encoder_for_StartLocationTrackingSession: $.ASN1Encoder<StartLocationTrackingSession> | null = null;

/**
 * @summary Encodes a(n) StartLocationTrackingSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartLocationTrackingSession, encoded as an ASN.1 Element.
 */
export
function _encode_StartLocationTrackingSession (value: StartLocationTrackingSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartLocationTrackingSession) { _cached_encoder_for_StartLocationTrackingSession = $._encodeBitString; }
    return _cached_encoder_for_StartLocationTrackingSession(value, elGetter);
}


/* eslint-enable */
