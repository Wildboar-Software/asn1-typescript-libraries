/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AttachMediaService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttachMediaService  ::=  BIT STRING
 * {     mediaServiceVersion             ( 0),     -- optional parameters
 *     mediaServiceInstanceID             ( 1),     -- optional parameters
 *     connectionModeConsultConference     ( 2),     -- optional parameters
 *     connectionModeConsultConferenceHold     ( 3),     -- optional parameters
 *     connectionModeDeflect             ( 4),     -- optional parameters
 *     connectionModeDirectedPickup         ( 5),     -- optional parameters
 *     connectionModeJoin             ( 6),     -- optional parameters
 *     connectionModeSingleStepConference     ( 7),     -- optional parameters
 *     connectionModeSingleStepConferenceHold     ( 8),     -- optional parameters
 *     connectionModeSingleStepTransfer     ( 9),     -- optional parameters
 *     connectionModeTransfer             (10),     -- optional parameters
 *     connectionModeDirect             (11),     -- optional parameters
 *     requestedConnectionState         (12),     -- optional parameters
 *     privateData                 (13),     -- optional parameters
 *     mediaServiceInstanceIDInAck         (14),     -- optional parameters
 *     mediaConnectionInfoInAck         (15),     -- optional parameters
 *     privateDataInAck             (16),     -- optional parameters
 *     deviceIDOnly                 (17),     -- misc characteristics
 *     ackModelMultiStep             (18) }
 * ```
 */
export
type AttachMediaService = BIT_STRING;

/**
 * @summary AttachMediaService_mediaServiceVersion
 * @constant
 */
export
const AttachMediaService_mediaServiceVersion: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 */
export
const mediaServiceVersion: number = AttachMediaService_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_mediaServiceInstanceID
 * @constant
 */
export
const AttachMediaService_mediaServiceInstanceID: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceID
 * @constant
 */
export
const mediaServiceInstanceID: number = AttachMediaService_mediaServiceInstanceID; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeConsultConference
 * @constant
 */
export
const AttachMediaService_connectionModeConsultConference: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeConsultConference
 * @constant
 */
export
const connectionModeConsultConference: number = AttachMediaService_connectionModeConsultConference; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeConsultConferenceHold
 * @constant
 */
export
const AttachMediaService_connectionModeConsultConferenceHold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeConsultConferenceHold
 * @constant
 */
export
const connectionModeConsultConferenceHold: number = AttachMediaService_connectionModeConsultConferenceHold; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeDeflect
 * @constant
 */
export
const AttachMediaService_connectionModeDeflect: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeDeflect
 * @constant
 */
export
const connectionModeDeflect: number = AttachMediaService_connectionModeDeflect; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeDirectedPickup
 * @constant
 */
export
const AttachMediaService_connectionModeDirectedPickup: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeDirectedPickup
 * @constant
 */
export
const connectionModeDirectedPickup: number = AttachMediaService_connectionModeDirectedPickup; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeJoin
 * @constant
 */
export
const AttachMediaService_connectionModeJoin: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeJoin
 * @constant
 */
export
const connectionModeJoin: number = AttachMediaService_connectionModeJoin; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeSingleStepConference
 * @constant
 */
export
const AttachMediaService_connectionModeSingleStepConference: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeSingleStepConference
 * @constant
 */
export
const connectionModeSingleStepConference: number = AttachMediaService_connectionModeSingleStepConference; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeSingleStepConferenceHold
 * @constant
 */
export
const AttachMediaService_connectionModeSingleStepConferenceHold: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeSingleStepConferenceHold
 * @constant
 */
export
const connectionModeSingleStepConferenceHold: number = AttachMediaService_connectionModeSingleStepConferenceHold; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeSingleStepTransfer
 * @constant
 */
export
const AttachMediaService_connectionModeSingleStepTransfer: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeSingleStepTransfer
 * @constant
 */
export
const connectionModeSingleStepTransfer: number = AttachMediaService_connectionModeSingleStepTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeTransfer
 * @constant
 */
export
const AttachMediaService_connectionModeTransfer: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeTransfer
 * @constant
 */
export
const connectionModeTransfer: number = AttachMediaService_connectionModeTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeDirect
 * @constant
 */
export
const AttachMediaService_connectionModeDirect: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeDirect
 * @constant
 */
export
const connectionModeDirect: number = AttachMediaService_connectionModeDirect; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_requestedConnectionState
 * @constant
 */
export
const AttachMediaService_requestedConnectionState: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary requestedConnectionState
 * @constant
 */
export
const requestedConnectionState: number = AttachMediaService_requestedConnectionState; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_privateData
 * @constant
 */
export
const AttachMediaService_privateData: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AttachMediaService_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_mediaServiceInstanceIDInAck
 * @constant
 */
export
const AttachMediaService_mediaServiceInstanceIDInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceIDInAck
 * @constant
 */
export
const mediaServiceInstanceIDInAck: number = AttachMediaService_mediaServiceInstanceIDInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_mediaConnectionInfoInAck
 * @constant
 */
export
const AttachMediaService_mediaConnectionInfoInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary mediaConnectionInfoInAck
 * @constant
 */
export
const mediaConnectionInfoInAck: number = AttachMediaService_mediaConnectionInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_privateDataInAck
 * @constant
 */
export
const AttachMediaService_privateDataInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = AttachMediaService_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_deviceIDOnly
 * @constant
 */
export
const AttachMediaService_deviceIDOnly: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = AttachMediaService_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_ackModelMultiStep
 * @constant
 */
export
const AttachMediaService_ackModelMultiStep: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = AttachMediaService_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AttachMediaService: $.ASN1Decoder<AttachMediaService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttachMediaService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttachMediaService (el: _Element): AttachMediaService {
    if (!_cached_decoder_for_AttachMediaService) { _cached_decoder_for_AttachMediaService = $._decodeBitString; }
    return _cached_decoder_for_AttachMediaService(el);
}

let _cached_encoder_for_AttachMediaService: $.ASN1Encoder<AttachMediaService> | null = null;

/**
 * @summary Encodes a(n) AttachMediaService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachMediaService, encoded as an ASN.1 Element.
 */
export
function _encode_AttachMediaService (value: AttachMediaService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttachMediaService) { _cached_encoder_for_AttachMediaService = $._encodeBitString; }
    return _cached_encoder_for_AttachMediaService(value, elGetter);
}


/* eslint-enable */
