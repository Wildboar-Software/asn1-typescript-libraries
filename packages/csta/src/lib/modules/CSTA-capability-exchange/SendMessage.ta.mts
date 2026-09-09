/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SendMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendMessage  ::=  BIT STRING
 * {     accountCode                 ( 0),     -- optional parameters
 *     authCode                 ( 1),     -- optional parameters
 *     correlatorData                 ( 2),     -- optional parameters
 *     userData                ( 3),     -- optional parameters
 *     callCharacteristics             ( 4),     -- optional parameters
 *     callCharacteristicsACDCall         ( 5),     -- optional parameters
 *     callCharacteristicsLowPriorityCall     ( 6),     -- optional parameters
 *     callCharacteristicsPriorityCall     ( 7),     -- optional parameters
 *     callCharacteristicsHighPriorityCall     ( 8),     -- optional parameters
 *     callCharacteristicsMaintenanceCall     ( 9),     -- optional parameters
 *     callCharacteristicsDirectAgent         (10),     -- optional parameters
 *     callCharacteristicsAssistCall         (11),     -- optional parameters
 *     callCharacteristicsVoiceUnitCall     (12),     -- optional parameters
 *     callCharacteristicsPrivateCall         (13),     -- optional parameters
 *     callCharacteristicsPersonalCall     (14),     -- optional parameters
 *     callCharacteristicsSensitiveCall     (15),     -- optional parameters
 *     callCharacteristicsConfidentialCall    (16),     -- optional parameters
 *     callCharacteristicsEncryptedCall    (17),     -- optional parameters
 *     mediaCallCharacteristics         (18),     -- optional parameters
 *     subjectOfCall                (19),     -- optional parameters
 *     languagePreferences            (20),     -- optional parameters
 *     privateData                (21),     -- optional parameters
 *     privateDataInAck            (22) }
 * ```
 */
export
type SendMessage = BIT_STRING;

/**
 * @summary SendMessage_accountCode
 * @constant
 */
export
const SendMessage_accountCode: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 */
export
const accountCode: number = SendMessage_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_authCode
 * @constant
 */
export
const SendMessage_authCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 */
export
const authCode: number = SendMessage_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_correlatorData
 * @constant
 */
export
const SendMessage_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = SendMessage_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_userData
 * @constant
 */
export
const SendMessage_userData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = SendMessage_userData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristics
 * @constant
 */
export
const SendMessage_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = SendMessage_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsACDCall
 * @constant
 */
export
const SendMessage_callCharacteristicsACDCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 */
export
const callCharacteristicsACDCall: number = SendMessage_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsLowPriorityCall
 * @constant
 */
export
const SendMessage_callCharacteristicsLowPriorityCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 */
export
const callCharacteristicsLowPriorityCall: number = SendMessage_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsPriorityCall
 * @constant
 */
export
const SendMessage_callCharacteristicsPriorityCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 */
export
const callCharacteristicsPriorityCall: number = SendMessage_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsHighPriorityCall
 * @constant
 */
export
const SendMessage_callCharacteristicsHighPriorityCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 */
export
const callCharacteristicsHighPriorityCall: number = SendMessage_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsMaintenanceCall
 * @constant
 */
export
const SendMessage_callCharacteristicsMaintenanceCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 */
export
const callCharacteristicsMaintenanceCall: number = SendMessage_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsDirectAgent
 * @constant
 */
export
const SendMessage_callCharacteristicsDirectAgent: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 */
export
const callCharacteristicsDirectAgent: number = SendMessage_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsAssistCall
 * @constant
 */
export
const SendMessage_callCharacteristicsAssistCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 */
export
const callCharacteristicsAssistCall: number = SendMessage_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsVoiceUnitCall
 * @constant
 */
export
const SendMessage_callCharacteristicsVoiceUnitCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 */
export
const callCharacteristicsVoiceUnitCall: number = SendMessage_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsPrivateCall
 * @constant
 */
export
const SendMessage_callCharacteristicsPrivateCall: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 */
export
const callCharacteristicsPrivateCall: number = SendMessage_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsPersonalCall
 * @constant
 */
export
const SendMessage_callCharacteristicsPersonalCall: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 */
export
const callCharacteristicsPersonalCall: number = SendMessage_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsSensitiveCall
 * @constant
 */
export
const SendMessage_callCharacteristicsSensitiveCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 */
export
const callCharacteristicsSensitiveCall: number = SendMessage_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsConfidentialCall
 * @constant
 */
export
const SendMessage_callCharacteristicsConfidentialCall: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 */
export
const callCharacteristicsConfidentialCall: number = SendMessage_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsEncryptedCall
 * @constant
 */
export
const SendMessage_callCharacteristicsEncryptedCall: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 */
export
const callCharacteristicsEncryptedCall: number = SendMessage_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_mediaCallCharacteristics
 * @constant
 */
export
const SendMessage_mediaCallCharacteristics: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = SendMessage_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_subjectOfCall
 * @constant
 */
export
const SendMessage_subjectOfCall: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = SendMessage_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_languagePreferences
 * @constant
 */
export
const SendMessage_languagePreferences: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = SendMessage_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_privateData
 * @constant
 */
export
const SendMessage_privateData: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SendMessage_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_privateDataInAck
 * @constant
 */
export
const SendMessage_privateDataInAck: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SendMessage_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SendMessage: $.ASN1Decoder<SendMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendMessage (el: _Element): SendMessage {
    if (!_cached_decoder_for_SendMessage) { _cached_decoder_for_SendMessage = $._decodeBitString; }
    return _cached_decoder_for_SendMessage(el);
}

let _cached_encoder_for_SendMessage: $.ASN1Encoder<SendMessage> | null = null;

/**
 * @summary Encodes a(n) SendMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendMessage, encoded as an ASN.1 Element.
 */
export
function _encode_SendMessage (value: SendMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendMessage) { _cached_encoder_for_SendMessage = $._encodeBitString; }
    return _cached_encoder_for_SendMessage(value, elGetter);
}


/* eslint-enable */
