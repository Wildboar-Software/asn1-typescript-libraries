/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SendMessage
 * @description
 * Capability bitmap for the Send Message service (ECMA-269 C.5.24, ECMA-285
 * §9.10). Presence of this entry in `CallControlServList` means the SF supports
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
 * @description
 * Bit set means the SF supports the optional `accountCode` parameter (ECMA-269
 * Annex C).
 */
export
const SendMessage_accountCode: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 * @description
 * Alias of `SendMessage_accountCode`.
 */
export
const accountCode: number = SendMessage_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_authCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `authCode` parameter (ECMA-269
 * Annex C).
 */
export
const SendMessage_authCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 * @description
 * Alias of `SendMessage_authCode`.
 */
export
const authCode: number = SendMessage_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 Annex C).
 */
export
const SendMessage_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `SendMessage_correlatorData`.
 */
export
const correlatorData: number = SendMessage_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * Annex C).
 */
export
const SendMessage_userData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `SendMessage_userData`.
 */
export
const userData: number = SendMessage_userData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristics`.
 */
export
const callCharacteristics: number = SendMessage_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsACDCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `acdCall` (ECMA-269
 * Annex C).
 */
export
const SendMessage_callCharacteristicsACDCall: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsACDCall`.
 */
export
const callCharacteristicsACDCall: number = SendMessage_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `lowPriorityCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsLowPriorityCall: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsLowPriorityCall`.
 */
export
const callCharacteristicsLowPriorityCall: number = SendMessage_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `priorityCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsPriorityCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsPriorityCall`.
 */
export
const callCharacteristicsPriorityCall: number = SendMessage_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `highPriorityCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsHighPriorityCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsHighPriorityCall`.
 */
export
const callCharacteristicsHighPriorityCall: number = SendMessage_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `maintenanceCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsMaintenanceCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsMaintenanceCall`.
 */
export
const callCharacteristicsMaintenanceCall: number = SendMessage_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsDirectAgent
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `directAgent`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsDirectAgent: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsDirectAgent`.
 */
export
const callCharacteristicsDirectAgent: number = SendMessage_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsAssistCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `assistCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsAssistCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsAssistCall`.
 */
export
const callCharacteristicsAssistCall: number = SendMessage_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `voiceUnitCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsVoiceUnitCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsVoiceUnitCall`.
 */
export
const callCharacteristicsVoiceUnitCall: number = SendMessage_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsPrivateCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `privateCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsPrivateCall: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsPrivateCall`.
 */
export
const callCharacteristicsPrivateCall: number = SendMessage_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsPersonalCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `personalCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsPersonalCall: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsPersonalCall`.
 */
export
const callCharacteristicsPersonalCall: number = SendMessage_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `sensitiveCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsSensitiveCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsSensitiveCall`.
 */
export
const callCharacteristicsSensitiveCall: number = SendMessage_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `confidentialCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsConfidentialCall: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsConfidentialCall`.
 */
export
const callCharacteristicsConfidentialCall: number = SendMessage_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `encryptedCall`
 * (ECMA-269 Annex C).
 */
export
const SendMessage_callCharacteristicsEncryptedCall: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Alias of `SendMessage_callCharacteristicsEncryptedCall`.
 */
export
const callCharacteristicsEncryptedCall: number = SendMessage_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 Annex C).
 */
export
const SendMessage_mediaCallCharacteristics: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `SendMessage_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = SendMessage_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 Annex C).
 */
export
const SendMessage_subjectOfCall: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `SendMessage_subjectOfCall`.
 */
export
const subjectOfCall: number = SendMessage_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 Annex C).
 */
export
const SendMessage_languagePreferences: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `SendMessage_languagePreferences`.
 */
export
const languagePreferences: number = SendMessage_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const SendMessage_privateData: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SendMessage_privateData`.
 */
export
const privateData: number = SendMessage_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMessage_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 Annex C).
 */
export
const SendMessage_privateDataInAck: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SendMessage_privateDataInAck`.
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
