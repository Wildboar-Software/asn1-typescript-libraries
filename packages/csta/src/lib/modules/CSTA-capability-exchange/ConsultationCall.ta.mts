/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConsultationCall
 * @description
 * Capability bitmap for the Consultation Call service (ECMA-269 C.5.10,
 * ECMA-285 §9.10). Presence of this entry in `CallControlServList` means the SF
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
 * ConsultationCall  ::=  BIT STRING
 * {     connectionReservation                 ( 0),     -- optional parameters
 *     accountCode                     ( 1),     -- optional parameters
 *     authCode                     ( 2),     -- optional parameters
 *     correlatorData                     ( 3),     -- optional parameters
 *     userData                     ( 4),     -- optional parameters
 *     callCharacteristics                 ( 5),     -- optional parameters
 *     callCharacteristicsACDCall             ( 6),     -- optional parameters
 *     callCharacteristicsLowPriorityCall        (29),     -- optional parameters
 *     callCharacteristicsPriorityCall         ( 7),     -- optional parameters
 *     callCharacteristicsHighPriorityCall        (30),     -- optional parameters
 *     callCharacteristicsMaintenanceCall         ( 8),     -- optional parameters
 *     callCharacteristicsDirectAgent             ( 9),     -- optional parameters
 *     callCharacteristicsAssistCall             (10),     -- optional parameters
 *     callCharacteristicsVoiceUnitCall         (11),     -- optional parameters
 *     callCharacteristicsPrivateCall             (31),     -- optional parameters
 *     callCharacteristicsPersonalCall         (32),     -- optional parameters
 *     callCharacteristicsSensitiveCall         (33),     -- optional parameters
 *     callCharacteristicsConfidentialCall         (34),     -- optional parameters
 *     callCharacteristicsEncryptedCall         (35),     -- optional parameters
 *     mediaCallCharacteristics             (12),     -- optional parameters
 *     callingConnectionInfo                 (13),     -- optional parameters
 *     flowDirectionTransmit                 (14),     -- optional parameters
 *     flowDirectionReceive                 (15),     -- optional parameters
 *     flowDirectionTransmitAndReceive         (16),     -- optional parameters
 *     flowDirectionNone                (36),     -- optional parameters
 *     numberOfChannels                 (17),     -- optional parameters
 *     mediaSessionInfo                (37),     -- optional parameters
 *     consultOptionConsultOnly             (18),     -- optional parameters
 *     consultOptionTransferOnly             (19),     -- optional parameters
 *     consultOptionConferenceOnly             (20),     -- optional parameters
 *     consultOptionUnrestricted             (21),     -- optional parameters
 *     subjectOfCall                    (38),     -- optional parameters
 *     languagePreferences                (39),     -- optional parameters
 *     privateData                     (22),     -- optional parameters
 *     initiatedCallInfoInAck                 (23),     -- optional parameters
 *     privateDataInAck                 (24),     -- optional parameters
 *     deviceIDOnly                     (25),     -- misc characteristics
 *     multiStage                     (26),     -- misc characteristics
 *     supportsAdjustmentOfMediaCharacteristics    (27),     -- misc characteristics
 *     ackModelMultiStep                 (28) }
 * ```
 */
export
type ConsultationCall = BIT_STRING;

/**
 * @summary ConsultationCall_connectionReservation
 * @constant
 * @description
 * Bit set means the SF supports the optional `connectionReservation` parameter
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_connectionReservation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary connectionReservation
 * @constant
 * @description
 * Alias of `ConsultationCall_connectionReservation`.
 */
export
const connectionReservation: number = ConsultationCall_connectionReservation; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_accountCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `accountCode` parameter (ECMA-269
 * C.5.10).
 */
export
const ConsultationCall_accountCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 * @description
 * Alias of `ConsultationCall_accountCode`.
 */
export
const accountCode: number = ConsultationCall_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_authCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `authCode` parameter (ECMA-269
 * C.5.10).
 */
export
const ConsultationCall_authCode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 * @description
 * Alias of `ConsultationCall_authCode`.
 */
export
const authCode: number = ConsultationCall_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_correlatorData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `ConsultationCall_correlatorData`.
 */
export
const correlatorData: number = ConsultationCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.5.10).
 */
export
const ConsultationCall_userData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `ConsultationCall_userData`.
 */
export
const userData: number = ConsultationCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristics`.
 */
export
const callCharacteristics: number = ConsultationCall_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsACDCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `acdCall` (ECMA-269
 * C.5.10).
 */
export
const ConsultationCall_callCharacteristicsACDCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsACDCall`.
 */
export
const callCharacteristicsACDCall: number = ConsultationCall_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `lowPriorityCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsLowPriorityCall: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsLowPriorityCall`.
 */
export
const callCharacteristicsLowPriorityCall: number = ConsultationCall_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `priorityCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsPriorityCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsPriorityCall`.
 */
export
const callCharacteristicsPriorityCall: number = ConsultationCall_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `highPriorityCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsHighPriorityCall: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsHighPriorityCall`.
 */
export
const callCharacteristicsHighPriorityCall: number = ConsultationCall_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `maintenanceCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsMaintenanceCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsMaintenanceCall`.
 */
export
const callCharacteristicsMaintenanceCall: number = ConsultationCall_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsDirectAgent
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `directAgent`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsDirectAgent: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsDirectAgent`.
 */
export
const callCharacteristicsDirectAgent: number = ConsultationCall_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsAssistCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `assistCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsAssistCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsAssistCall`.
 */
export
const callCharacteristicsAssistCall: number = ConsultationCall_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `voiceUnitCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsVoiceUnitCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsVoiceUnitCall`.
 */
export
const callCharacteristicsVoiceUnitCall: number = ConsultationCall_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsPrivateCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `privateCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsPrivateCall: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsPrivateCall`.
 */
export
const callCharacteristicsPrivateCall: number = ConsultationCall_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsPersonalCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `personalCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsPersonalCall: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsPersonalCall`.
 */
export
const callCharacteristicsPersonalCall: number = ConsultationCall_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `sensitiveCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsSensitiveCall: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsSensitiveCall`.
 */
export
const callCharacteristicsSensitiveCall: number = ConsultationCall_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `confidentialCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsConfidentialCall: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsConfidentialCall`.
 */
export
const callCharacteristicsConfidentialCall: number = ConsultationCall_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `encryptedCall`
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callCharacteristicsEncryptedCall: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Alias of `ConsultationCall_callCharacteristicsEncryptedCall`.
 */
export
const callCharacteristicsEncryptedCall: number = ConsultationCall_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.5.10).
 */
export
const ConsultationCall_mediaCallCharacteristics: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `ConsultationCall_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = ConsultationCall_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_callingConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_callingConnectionInfo: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary callingConnectionInfo
 * @constant
 * @description
 * Alias of `ConsultationCall_callingConnectionInfo`.
 */
export
const callingConnectionInfo: number = ConsultationCall_callingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_flowDirectionTransmit
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_flowDirectionTransmit: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary flowDirectionTransmit
 * @constant
 * @description
 * Alias of `ConsultationCall_flowDirectionTransmit`.
 */
export
const flowDirectionTransmit: number = ConsultationCall_flowDirectionTransmit; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_flowDirectionReceive
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_flowDirectionReceive: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary flowDirectionReceive
 * @constant
 * @description
 * Alias of `ConsultationCall_flowDirectionReceive`.
 */
export
const flowDirectionReceive: number = ConsultationCall_flowDirectionReceive; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_flowDirectionTransmitAndReceive
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_flowDirectionTransmitAndReceive: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary flowDirectionTransmitAndReceive
 * @constant
 * @description
 * Alias of `ConsultationCall_flowDirectionTransmitAndReceive`.
 */
export
const flowDirectionTransmitAndReceive: number = ConsultationCall_flowDirectionTransmitAndReceive; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_flowDirectionNone
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_flowDirectionNone: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary flowDirectionNone
 * @constant
 * @description
 * Alias of `ConsultationCall_flowDirectionNone`.
 */
export
const flowDirectionNone: number = ConsultationCall_flowDirectionNone; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_numberOfChannels
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_numberOfChannels: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary numberOfChannels
 * @constant
 * @description
 * Alias of `ConsultationCall_numberOfChannels`.
 */
export
const numberOfChannels: number = ConsultationCall_numberOfChannels; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_mediaSessionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_mediaSessionInfo: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary mediaSessionInfo
 * @constant
 * @description
 * Alias of `ConsultationCall_mediaSessionInfo`.
 */
export
const mediaSessionInfo: number = ConsultationCall_mediaSessionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_consultOptionConsultOnly
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_consultOptionConsultOnly: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionConsultOnly
 * @constant
 * @description
 * Alias of `ConsultationCall_consultOptionConsultOnly`.
 */
export
const consultOptionConsultOnly: number = ConsultationCall_consultOptionConsultOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_consultOptionTransferOnly
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_consultOptionTransferOnly: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionTransferOnly
 * @constant
 * @description
 * Alias of `ConsultationCall_consultOptionTransferOnly`.
 */
export
const consultOptionTransferOnly: number = ConsultationCall_consultOptionTransferOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_consultOptionConferenceOnly
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_consultOptionConferenceOnly: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionConferenceOnly
 * @constant
 * @description
 * Alias of `ConsultationCall_consultOptionConferenceOnly`.
 */
export
const consultOptionConferenceOnly: number = ConsultationCall_consultOptionConferenceOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_consultOptionUnrestricted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_consultOptionUnrestricted: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionUnrestricted
 * @constant
 * @description
 * Alias of `ConsultationCall_consultOptionUnrestricted`.
 */
export
const consultOptionUnrestricted: number = ConsultationCall_consultOptionUnrestricted; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_subjectOfCall: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `ConsultationCall_subjectOfCall`.
 */
export
const subjectOfCall: number = ConsultationCall_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_languagePreferences: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `ConsultationCall_languagePreferences`.
 */
export
const languagePreferences: number = ConsultationCall_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.10).
 */
export
const ConsultationCall_privateData: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ConsultationCall_privateData`.
 */
export
const privateData: number = ConsultationCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_initiatedCallInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `initiatedCallInfo` in the
 * acknowledgement (ECMA-269 C.5.10).
 */
export
const ConsultationCall_initiatedCallInfoInAck: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary initiatedCallInfoInAck
 * @constant
 * @description
 * Alias of `ConsultationCall_initiatedCallInfoInAck`.
 */
export
const initiatedCallInfoInAck: number = ConsultationCall_initiatedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_privateDataInAck: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ConsultationCall_privateDataInAck`.
 */
export
const privateDataInAck: number = ConsultationCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_deviceIDOnly: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `ConsultationCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = ConsultationCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_multiStage
 * @constant
 * @description
 * Bit set means the SF supports multistage dialling with this service (ECMA-269
 * C.5.10).
 */
export
const ConsultationCall_multiStage: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary multiStage
 * @constant
 * @description
 * Alias of `ConsultationCall_multiStage`.
 */
export
const multiStage: number = ConsultationCall_multiStage; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_supportsAdjustmentOfMediaCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.10).
 */
export
const ConsultationCall_supportsAdjustmentOfMediaCharacteristics: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary supportsAdjustmentOfMediaCharacteristics
 * @constant
 * @description
 * Alias of `ConsultationCall_supportsAdjustmentOfMediaCharacteristics`.
 */
export
const supportsAdjustmentOfMediaCharacteristics: number = ConsultationCall_supportsAdjustmentOfMediaCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConsultationCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.10).
 */
export
const ConsultationCall_ackModelMultiStep: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `ConsultationCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = ConsultationCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ConsultationCall: $.ASN1Decoder<ConsultationCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConsultationCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConsultationCall (el: _Element): ConsultationCall {
    if (!_cached_decoder_for_ConsultationCall) { _cached_decoder_for_ConsultationCall = $._decodeBitString; }
    return _cached_decoder_for_ConsultationCall(el);
}

let _cached_encoder_for_ConsultationCall: $.ASN1Encoder<ConsultationCall> | null = null;

/**
 * @summary Encodes a(n) ConsultationCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsultationCall, encoded as an ASN.1 Element.
 */
export
function _encode_ConsultationCall (value: ConsultationCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConsultationCall) { _cached_encoder_for_ConsultationCall = $._encodeBitString; }
    return _cached_encoder_for_ConsultationCall(value, elGetter);
}


/* eslint-enable */
