/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AttachMediaService
 * @description
 * Capability bitmap for the Attach Media Service service (ECMA-269 C.9.1,
 * ECMA-285 §9.10). Presence of this entry in `MediaServList` means the SF
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_mediaServiceVersion: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 * @description
 * Alias of `AttachMediaService_mediaServiceVersion`.
 */
export
const mediaServiceVersion: number = AttachMediaService_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_mediaServiceInstanceID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_mediaServiceInstanceID: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceID
 * @constant
 * @description
 * Alias of `AttachMediaService_mediaServiceInstanceID`.
 */
export
const mediaServiceInstanceID: number = AttachMediaService_mediaServiceInstanceID; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeConsultConference
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeConsultConference: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeConsultConference
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeConsultConference`.
 */
export
const connectionModeConsultConference: number = AttachMediaService_connectionModeConsultConference; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeConsultConferenceHold
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeConsultConferenceHold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeConsultConferenceHold
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeConsultConferenceHold`.
 */
export
const connectionModeConsultConferenceHold: number = AttachMediaService_connectionModeConsultConferenceHold; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeDeflect
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeDeflect: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeDeflect
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeDeflect`.
 */
export
const connectionModeDeflect: number = AttachMediaService_connectionModeDeflect; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeDirectedPickup
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeDirectedPickup: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeDirectedPickup
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeDirectedPickup`.
 */
export
const connectionModeDirectedPickup: number = AttachMediaService_connectionModeDirectedPickup; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeJoin
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeJoin: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeJoin
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeJoin`.
 */
export
const connectionModeJoin: number = AttachMediaService_connectionModeJoin; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeSingleStepConference
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeSingleStepConference: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeSingleStepConference
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeSingleStepConference`.
 */
export
const connectionModeSingleStepConference: number = AttachMediaService_connectionModeSingleStepConference; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeSingleStepConferenceHold
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeSingleStepConferenceHold: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeSingleStepConferenceHold
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeSingleStepConferenceHold`.
 */
export
const connectionModeSingleStepConferenceHold: number = AttachMediaService_connectionModeSingleStepConferenceHold; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeSingleStepTransfer
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeSingleStepTransfer: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeSingleStepTransfer
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeSingleStepTransfer`.
 */
export
const connectionModeSingleStepTransfer: number = AttachMediaService_connectionModeSingleStepTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeTransfer
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeTransfer: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeTransfer
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeTransfer`.
 */
export
const connectionModeTransfer: number = AttachMediaService_connectionModeTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_connectionModeDirect
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_connectionModeDirect: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary connectionModeDirect
 * @constant
 * @description
 * Alias of `AttachMediaService_connectionModeDirect`.
 */
export
const connectionModeDirect: number = AttachMediaService_connectionModeDirect; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_requestedConnectionState
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.9.1).
 */
export
const AttachMediaService_requestedConnectionState: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary requestedConnectionState
 * @constant
 * @description
 * Alias of `AttachMediaService_requestedConnectionState`.
 */
export
const requestedConnectionState: number = AttachMediaService_requestedConnectionState; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.9.1).
 */
export
const AttachMediaService_privateData: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AttachMediaService_privateData`.
 */
export
const privateData: number = AttachMediaService_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_mediaServiceInstanceIDInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `mediaServiceInstanceID` in the
 * acknowledgement (ECMA-269 C.9.1).
 */
export
const AttachMediaService_mediaServiceInstanceIDInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceIDInAck
 * @constant
 * @description
 * Alias of `AttachMediaService_mediaServiceInstanceIDInAck`.
 */
export
const mediaServiceInstanceIDInAck: number = AttachMediaService_mediaServiceInstanceIDInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_mediaConnectionInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `mediaConnectionInfo` in the
 * acknowledgement (ECMA-269 C.9.1).
 */
export
const AttachMediaService_mediaConnectionInfoInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary mediaConnectionInfoInAck
 * @constant
 * @description
 * Alias of `AttachMediaService_mediaConnectionInfoInAck`.
 */
export
const mediaConnectionInfoInAck: number = AttachMediaService_mediaConnectionInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.9.1).
 */
export
const AttachMediaService_privateDataInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `AttachMediaService_privateDataInAck`.
 */
export
const privateDataInAck: number = AttachMediaService_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.9.1).
 */
export
const AttachMediaService_deviceIDOnly: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `AttachMediaService_deviceIDOnly`.
 */
export
const deviceIDOnly: number = AttachMediaService_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AttachMediaService_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.9.1).
 */
export
const AttachMediaService_ackModelMultiStep: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `AttachMediaService_ackModelMultiStep`.
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
