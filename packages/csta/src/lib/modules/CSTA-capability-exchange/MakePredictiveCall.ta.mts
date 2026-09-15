/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MakePredictiveCall
 * @description
 * Capability bitmap for the Make Predictive Call service (ECMA-269 C.5.20,
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
 * MakePredictiveCall  ::=  BIT STRING
 * {     signallingDetection                 ( 0),     -- optional parameters
 *     signallingConditionCallDelivered         ( 1),     -- optional parameters
 *     signallingConditionCallEstablished         ( 2),     -- optional parameters
 *     signallingConditionActionDestinationDetection    ( 3),     -- optional parameters
 *     signallingConditionActionRemainConnected     ( 4),     -- optional parameters
 *     destinationDetection                 ( 5),     -- optional parameters
 *     destinationConditionHumanVoice             ( 6),     -- optional parameters
 *     destinationConditionAnsweringMachine         ( 7),     -- optional parameters
 *     destinationConditionFax             ( 8),     -- optional parameters
 *     destinationActionClearConnection         ( 9),     -- optional parameters
 *     destinationActionRemainConnected         (10),     -- optional parameters
 *     defaultActionClearConnection             (11),     -- optional parameters
 *     defaultActionRemainConnected             (12),     -- optional parameters
 *     accountCode                     (13),     -- optional parameters
 *     authCode                     (14),     -- optional parameters
 *     autoOriginatePrompt                 (15),     -- optional parameters
 *     autoOriginateDoNotPrompt             (16),     -- optional parameters
 *     alertTime                     (17),     -- optional parameters
 *     correlatorData                     (18),     -- optional parameters
 *     callCharacteristics                 (19),     -- optional parameters
 *     callCharacteristicsACDCall             (20),     -- optional parameters
 *     callCharacteristicsLowPriorityCall         (35),     -- optional parameters
 *     callCharacteristicsPriorityCall         (21),     -- optional parameters
 *     callCharacteristicsHighPriorityCall         (36),     -- optional parameters
 *     callCharacteristicsMaintenanceCall         (22),     -- optional parameters
 *     callCharacteristicsDirectAgent             (23),     -- optional parameters
 *     callCharacteristicsAssistCall             (24),     -- optional parameters
 *     callCharacteristicsVoiceUnitCall         (25),     -- optional parameters
 *     callCharacteristicsPrivateCall             (37),     -- optional parameters
 *     callCharacteristicsPersonalCall         (38),     -- optional parameters
 *     callCharacteristicsSensitiveCall         (39),     -- optional parameters
 *     callCharacteristicsConfidentialCall        (40),     -- optional parameters
 *     callCharacteristicsEncryptedCall        (41),     -- optional parameters
 *     subjectOfCall                    (42),     -- optional parameters
 *     languagePreferences                (43),     -- optional parameters
 *     userData                     (26),     -- optional parameters
 *     privateData                     (27),     -- optional parameters
 *     initiatedCallInfoInAck                 (28),     -- optional parameters
 *     privateDataInAck                 (29),     -- optional parameters
 *     deviceIDOnly                     (30),     -- misc characteristics
 *     supportsPrompting                 (31),     -- misc characteristics
 *     promptingMode                     (32),     -- misc characteristics
 *     reservesCallingDevice                 (33),     -- misc characteristics
 *     ackModelMultiStep                 (34) }
 * ```
 */
export
type MakePredictiveCall = BIT_STRING;

/**
 * @summary MakePredictiveCall_signallingDetection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_signallingDetection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary signallingDetection
 * @constant
 * @description
 * Alias of `MakePredictiveCall_signallingDetection`.
 */
export
const signallingDetection: number = MakePredictiveCall_signallingDetection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_signallingConditionCallDelivered
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_signallingConditionCallDelivered: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary signallingConditionCallDelivered
 * @constant
 * @description
 * Alias of `MakePredictiveCall_signallingConditionCallDelivered`.
 */
export
const signallingConditionCallDelivered: number = MakePredictiveCall_signallingConditionCallDelivered; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_signallingConditionCallEstablished
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_signallingConditionCallEstablished: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary signallingConditionCallEstablished
 * @constant
 * @description
 * Alias of `MakePredictiveCall_signallingConditionCallEstablished`.
 */
export
const signallingConditionCallEstablished: number = MakePredictiveCall_signallingConditionCallEstablished; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_signallingConditionActionDestinationDetection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_signallingConditionActionDestinationDetection: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary signallingConditionActionDestinationDetection
 * @constant
 * @description
 * Alias of `MakePredictiveCall_signallingConditionActionDestinationDetection`.
 */
export
const signallingConditionActionDestinationDetection: number = MakePredictiveCall_signallingConditionActionDestinationDetection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_signallingConditionActionRemainConnected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_signallingConditionActionRemainConnected: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary signallingConditionActionRemainConnected
 * @constant
 * @description
 * Alias of `MakePredictiveCall_signallingConditionActionRemainConnected`.
 */
export
const signallingConditionActionRemainConnected: number = MakePredictiveCall_signallingConditionActionRemainConnected; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationDetection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_destinationDetection: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary destinationDetection
 * @constant
 * @description
 * Alias of `MakePredictiveCall_destinationDetection`.
 */
export
const destinationDetection: number = MakePredictiveCall_destinationDetection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationConditionHumanVoice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_destinationConditionHumanVoice: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary destinationConditionHumanVoice
 * @constant
 * @description
 * Alias of `MakePredictiveCall_destinationConditionHumanVoice`.
 */
export
const destinationConditionHumanVoice: number = MakePredictiveCall_destinationConditionHumanVoice; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationConditionAnsweringMachine
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_destinationConditionAnsweringMachine: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary destinationConditionAnsweringMachine
 * @constant
 * @description
 * Alias of `MakePredictiveCall_destinationConditionAnsweringMachine`.
 */
export
const destinationConditionAnsweringMachine: number = MakePredictiveCall_destinationConditionAnsweringMachine; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationConditionFax
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_destinationConditionFax: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary destinationConditionFax
 * @constant
 * @description
 * Alias of `MakePredictiveCall_destinationConditionFax`.
 */
export
const destinationConditionFax: number = MakePredictiveCall_destinationConditionFax; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationActionClearConnection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_destinationActionClearConnection: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary destinationActionClearConnection
 * @constant
 * @description
 * Alias of `MakePredictiveCall_destinationActionClearConnection`.
 */
export
const destinationActionClearConnection: number = MakePredictiveCall_destinationActionClearConnection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationActionRemainConnected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_destinationActionRemainConnected: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary destinationActionRemainConnected
 * @constant
 * @description
 * Alias of `MakePredictiveCall_destinationActionRemainConnected`.
 */
export
const destinationActionRemainConnected: number = MakePredictiveCall_destinationActionRemainConnected; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_defaultActionClearConnection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_defaultActionClearConnection: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary defaultActionClearConnection
 * @constant
 * @description
 * Alias of `MakePredictiveCall_defaultActionClearConnection`.
 */
export
const defaultActionClearConnection: number = MakePredictiveCall_defaultActionClearConnection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_defaultActionRemainConnected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_defaultActionRemainConnected: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary defaultActionRemainConnected
 * @constant
 * @description
 * Alias of `MakePredictiveCall_defaultActionRemainConnected`.
 */
export
const defaultActionRemainConnected: number = MakePredictiveCall_defaultActionRemainConnected; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_accountCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `accountCode` parameter (ECMA-269
 * C.5.20).
 */
export
const MakePredictiveCall_accountCode: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 * @description
 * Alias of `MakePredictiveCall_accountCode`.
 */
export
const accountCode: number = MakePredictiveCall_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_authCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `authCode` parameter (ECMA-269
 * C.5.20).
 */
export
const MakePredictiveCall_authCode: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 * @description
 * Alias of `MakePredictiveCall_authCode`.
 */
export
const authCode: number = MakePredictiveCall_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_autoOriginatePrompt
 * @constant
 * @description
 * Bit set means the SF supports `autoOriginate` value prompt (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_autoOriginatePrompt: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginatePrompt
 * @constant
 * @description
 * Alias of `MakePredictiveCall_autoOriginatePrompt`.
 */
export
const autoOriginatePrompt: number = MakePredictiveCall_autoOriginatePrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_autoOriginateDoNotPrompt
 * @constant
 * @description
 * Bit set means the SF supports `autoOriginate` value doNotPrompt (ECMA-269
 * C.5.20).
 */
export
const MakePredictiveCall_autoOriginateDoNotPrompt: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginateDoNotPrompt
 * @constant
 * @description
 * Alias of `MakePredictiveCall_autoOriginateDoNotPrompt`.
 */
export
const autoOriginateDoNotPrompt: number = MakePredictiveCall_autoOriginateDoNotPrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_alertTime
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_alertTime: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary alertTime
 * @constant
 * @description
 * Alias of `MakePredictiveCall_alertTime`.
 */
export
const alertTime: number = MakePredictiveCall_alertTime; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_correlatorData: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `MakePredictiveCall_correlatorData`.
 */
export
const correlatorData: number = MakePredictiveCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristics: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristics`.
 */
export
const callCharacteristics: number = MakePredictiveCall_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsACDCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `acdCall` (ECMA-269
 * C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsACDCall: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsACDCall`.
 */
export
const callCharacteristicsACDCall: number = MakePredictiveCall_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `lowPriorityCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsLowPriorityCall: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsLowPriorityCall`.
 */
export
const callCharacteristicsLowPriorityCall: number = MakePredictiveCall_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `priorityCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsPriorityCall: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsPriorityCall`.
 */
export
const callCharacteristicsPriorityCall: number = MakePredictiveCall_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `highPriorityCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsHighPriorityCall: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsHighPriorityCall`.
 */
export
const callCharacteristicsHighPriorityCall: number = MakePredictiveCall_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `maintenanceCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsMaintenanceCall: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsMaintenanceCall`.
 */
export
const callCharacteristicsMaintenanceCall: number = MakePredictiveCall_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsDirectAgent
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `directAgent`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsDirectAgent: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsDirectAgent`.
 */
export
const callCharacteristicsDirectAgent: number = MakePredictiveCall_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsAssistCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `assistCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsAssistCall: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsAssistCall`.
 */
export
const callCharacteristicsAssistCall: number = MakePredictiveCall_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `voiceUnitCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsVoiceUnitCall: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsVoiceUnitCall`.
 */
export
const callCharacteristicsVoiceUnitCall: number = MakePredictiveCall_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsPrivateCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `privateCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsPrivateCall: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsPrivateCall`.
 */
export
const callCharacteristicsPrivateCall: number = MakePredictiveCall_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsPersonalCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `personalCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsPersonalCall: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsPersonalCall`.
 */
export
const callCharacteristicsPersonalCall: number = MakePredictiveCall_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `sensitiveCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsSensitiveCall: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsSensitiveCall`.
 */
export
const callCharacteristicsSensitiveCall: number = MakePredictiveCall_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `confidentialCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsConfidentialCall: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsConfidentialCall`.
 */
export
const callCharacteristicsConfidentialCall: number = MakePredictiveCall_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `encryptedCall`
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_callCharacteristicsEncryptedCall: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_callCharacteristicsEncryptedCall`.
 */
export
const callCharacteristicsEncryptedCall: number = MakePredictiveCall_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_subjectOfCall: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `MakePredictiveCall_subjectOfCall`.
 */
export
const subjectOfCall: number = MakePredictiveCall_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_languagePreferences: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `MakePredictiveCall_languagePreferences`.
 */
export
const languagePreferences: number = MakePredictiveCall_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.5.20).
 */
export
const MakePredictiveCall_userData: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `MakePredictiveCall_userData`.
 */
export
const userData: number = MakePredictiveCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.20).
 */
export
const MakePredictiveCall_privateData: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `MakePredictiveCall_privateData`.
 */
export
const privateData: number = MakePredictiveCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_initiatedCallInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `initiatedCallInfo` in the
 * acknowledgement (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_initiatedCallInfoInAck: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary initiatedCallInfoInAck
 * @constant
 * @description
 * Alias of `MakePredictiveCall_initiatedCallInfoInAck`.
 */
export
const initiatedCallInfoInAck: number = MakePredictiveCall_initiatedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_privateDataInAck: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `MakePredictiveCall_privateDataInAck`.
 */
export
const privateDataInAck: number = MakePredictiveCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_deviceIDOnly: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `MakePredictiveCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = MakePredictiveCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_supportsPrompting
 * @constant
 * @description
 * Bit set means the SF supports prompting for the calling device (ECMA-269
 * C.5.20).
 */
export
const MakePredictiveCall_supportsPrompting: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 * @description
 * Alias of `MakePredictiveCall_supportsPrompting`.
 */
export
const supportsPrompting: number = MakePredictiveCall_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_promptingMode
 * @constant
 * @description
 * Bit set means the SF supports prompting as part of service execution
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_promptingMode: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 * @description
 * Alias of `MakePredictiveCall_promptingMode`.
 */
export
const promptingMode: number = MakePredictiveCall_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_reservesCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_reservesCallingDevice: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary reservesCallingDevice
 * @constant
 * @description
 * Alias of `MakePredictiveCall_reservesCallingDevice`.
 */
export
const reservesCallingDevice: number = MakePredictiveCall_reservesCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.20).
 */
export
const MakePredictiveCall_ackModelMultiStep: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `MakePredictiveCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = MakePredictiveCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MakePredictiveCall: $.ASN1Decoder<MakePredictiveCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakePredictiveCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakePredictiveCall (el: _Element): MakePredictiveCall {
    if (!_cached_decoder_for_MakePredictiveCall) { _cached_decoder_for_MakePredictiveCall = $._decodeBitString; }
    return _cached_decoder_for_MakePredictiveCall(el);
}

let _cached_encoder_for_MakePredictiveCall: $.ASN1Encoder<MakePredictiveCall> | null = null;

/**
 * @summary Encodes a(n) MakePredictiveCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakePredictiveCall, encoded as an ASN.1 Element.
 */
export
function _encode_MakePredictiveCall (value: MakePredictiveCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakePredictiveCall) { _cached_encoder_for_MakePredictiveCall = $._encodeBitString; }
    return _cached_encoder_for_MakePredictiveCall(value, elGetter);
}


/* eslint-enable */
