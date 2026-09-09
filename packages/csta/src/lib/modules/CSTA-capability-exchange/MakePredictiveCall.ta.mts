/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MakePredictiveCall
 * @description
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
 */
export
const MakePredictiveCall_signallingDetection: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary signallingDetection
 * @constant
 */
export
const signallingDetection: number = MakePredictiveCall_signallingDetection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_signallingConditionCallDelivered
 * @constant
 */
export
const MakePredictiveCall_signallingConditionCallDelivered: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary signallingConditionCallDelivered
 * @constant
 */
export
const signallingConditionCallDelivered: number = MakePredictiveCall_signallingConditionCallDelivered; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_signallingConditionCallEstablished
 * @constant
 */
export
const MakePredictiveCall_signallingConditionCallEstablished: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary signallingConditionCallEstablished
 * @constant
 */
export
const signallingConditionCallEstablished: number = MakePredictiveCall_signallingConditionCallEstablished; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_signallingConditionActionDestinationDetection
 * @constant
 */
export
const MakePredictiveCall_signallingConditionActionDestinationDetection: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary signallingConditionActionDestinationDetection
 * @constant
 */
export
const signallingConditionActionDestinationDetection: number = MakePredictiveCall_signallingConditionActionDestinationDetection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_signallingConditionActionRemainConnected
 * @constant
 */
export
const MakePredictiveCall_signallingConditionActionRemainConnected: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary signallingConditionActionRemainConnected
 * @constant
 */
export
const signallingConditionActionRemainConnected: number = MakePredictiveCall_signallingConditionActionRemainConnected; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationDetection
 * @constant
 */
export
const MakePredictiveCall_destinationDetection: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary destinationDetection
 * @constant
 */
export
const destinationDetection: number = MakePredictiveCall_destinationDetection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationConditionHumanVoice
 * @constant
 */
export
const MakePredictiveCall_destinationConditionHumanVoice: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary destinationConditionHumanVoice
 * @constant
 */
export
const destinationConditionHumanVoice: number = MakePredictiveCall_destinationConditionHumanVoice; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationConditionAnsweringMachine
 * @constant
 */
export
const MakePredictiveCall_destinationConditionAnsweringMachine: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary destinationConditionAnsweringMachine
 * @constant
 */
export
const destinationConditionAnsweringMachine: number = MakePredictiveCall_destinationConditionAnsweringMachine; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationConditionFax
 * @constant
 */
export
const MakePredictiveCall_destinationConditionFax: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary destinationConditionFax
 * @constant
 */
export
const destinationConditionFax: number = MakePredictiveCall_destinationConditionFax; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationActionClearConnection
 * @constant
 */
export
const MakePredictiveCall_destinationActionClearConnection: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary destinationActionClearConnection
 * @constant
 */
export
const destinationActionClearConnection: number = MakePredictiveCall_destinationActionClearConnection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_destinationActionRemainConnected
 * @constant
 */
export
const MakePredictiveCall_destinationActionRemainConnected: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary destinationActionRemainConnected
 * @constant
 */
export
const destinationActionRemainConnected: number = MakePredictiveCall_destinationActionRemainConnected; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_defaultActionClearConnection
 * @constant
 */
export
const MakePredictiveCall_defaultActionClearConnection: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary defaultActionClearConnection
 * @constant
 */
export
const defaultActionClearConnection: number = MakePredictiveCall_defaultActionClearConnection; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_defaultActionRemainConnected
 * @constant
 */
export
const MakePredictiveCall_defaultActionRemainConnected: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary defaultActionRemainConnected
 * @constant
 */
export
const defaultActionRemainConnected: number = MakePredictiveCall_defaultActionRemainConnected; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_accountCode
 * @constant
 */
export
const MakePredictiveCall_accountCode: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 */
export
const accountCode: number = MakePredictiveCall_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_authCode
 * @constant
 */
export
const MakePredictiveCall_authCode: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 */
export
const authCode: number = MakePredictiveCall_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_autoOriginatePrompt
 * @constant
 */
export
const MakePredictiveCall_autoOriginatePrompt: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginatePrompt
 * @constant
 */
export
const autoOriginatePrompt: number = MakePredictiveCall_autoOriginatePrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_autoOriginateDoNotPrompt
 * @constant
 */
export
const MakePredictiveCall_autoOriginateDoNotPrompt: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginateDoNotPrompt
 * @constant
 */
export
const autoOriginateDoNotPrompt: number = MakePredictiveCall_autoOriginateDoNotPrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_alertTime
 * @constant
 */
export
const MakePredictiveCall_alertTime: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary alertTime
 * @constant
 */
export
const alertTime: number = MakePredictiveCall_alertTime; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_correlatorData
 * @constant
 */
export
const MakePredictiveCall_correlatorData: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = MakePredictiveCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristics
 * @constant
 */
export
const MakePredictiveCall_callCharacteristics: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = MakePredictiveCall_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsACDCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsACDCall: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 */
export
const callCharacteristicsACDCall: number = MakePredictiveCall_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsLowPriorityCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsLowPriorityCall: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 */
export
const callCharacteristicsLowPriorityCall: number = MakePredictiveCall_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsPriorityCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsPriorityCall: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 */
export
const callCharacteristicsPriorityCall: number = MakePredictiveCall_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsHighPriorityCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsHighPriorityCall: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 */
export
const callCharacteristicsHighPriorityCall: number = MakePredictiveCall_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsMaintenanceCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsMaintenanceCall: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 */
export
const callCharacteristicsMaintenanceCall: number = MakePredictiveCall_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsDirectAgent
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsDirectAgent: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 */
export
const callCharacteristicsDirectAgent: number = MakePredictiveCall_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsAssistCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsAssistCall: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 */
export
const callCharacteristicsAssistCall: number = MakePredictiveCall_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsVoiceUnitCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsVoiceUnitCall: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 */
export
const callCharacteristicsVoiceUnitCall: number = MakePredictiveCall_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsPrivateCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsPrivateCall: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 */
export
const callCharacteristicsPrivateCall: number = MakePredictiveCall_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsPersonalCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsPersonalCall: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 */
export
const callCharacteristicsPersonalCall: number = MakePredictiveCall_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsSensitiveCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsSensitiveCall: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 */
export
const callCharacteristicsSensitiveCall: number = MakePredictiveCall_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsConfidentialCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsConfidentialCall: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 */
export
const callCharacteristicsConfidentialCall: number = MakePredictiveCall_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_callCharacteristicsEncryptedCall
 * @constant
 */
export
const MakePredictiveCall_callCharacteristicsEncryptedCall: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 */
export
const callCharacteristicsEncryptedCall: number = MakePredictiveCall_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_subjectOfCall
 * @constant
 */
export
const MakePredictiveCall_subjectOfCall: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = MakePredictiveCall_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_languagePreferences
 * @constant
 */
export
const MakePredictiveCall_languagePreferences: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = MakePredictiveCall_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_userData
 * @constant
 */
export
const MakePredictiveCall_userData: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = MakePredictiveCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_privateData
 * @constant
 */
export
const MakePredictiveCall_privateData: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = MakePredictiveCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_initiatedCallInfoInAck
 * @constant
 */
export
const MakePredictiveCall_initiatedCallInfoInAck: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary initiatedCallInfoInAck
 * @constant
 */
export
const initiatedCallInfoInAck: number = MakePredictiveCall_initiatedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_privateDataInAck
 * @constant
 */
export
const MakePredictiveCall_privateDataInAck: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = MakePredictiveCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_deviceIDOnly
 * @constant
 */
export
const MakePredictiveCall_deviceIDOnly: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = MakePredictiveCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_supportsPrompting
 * @constant
 */
export
const MakePredictiveCall_supportsPrompting: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 */
export
const supportsPrompting: number = MakePredictiveCall_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_promptingMode
 * @constant
 */
export
const MakePredictiveCall_promptingMode: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 */
export
const promptingMode: number = MakePredictiveCall_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_reservesCallingDevice
 * @constant
 */
export
const MakePredictiveCall_reservesCallingDevice: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary reservesCallingDevice
 * @constant
 */
export
const reservesCallingDevice: number = MakePredictiveCall_reservesCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary MakePredictiveCall_ackModelMultiStep
 * @constant
 */
export
const MakePredictiveCall_ackModelMultiStep: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
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
