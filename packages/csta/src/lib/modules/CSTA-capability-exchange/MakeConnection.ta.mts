/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MakeConnection
 * @description
 * Capability bitmap for the Make Connection service (ECMA-269 C.5.19, ECMA-285
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
 * MakeConnection  ::=  BIT STRING
 * {     null                     ( 0),     -- initials states
 *     accountCode                 ( 1),     -- optional parameters
 *     authCode                 ( 2),     -- optional parameters
 *     autoOriginatePrompt             ( 3),     -- optional parameters
 *     autoOriginateDoNotPrompt         ( 4),     -- optional parameters
 *     correlatorData                 ( 5),     -- optional parameters
 *     callCharacteristics             ( 6),     -- optional parameters
 *     callCharacteristicsACDCall         ( 7),     -- optional parameters
 *     callCharacteristicsLowPriorityCall     ( 8),     -- optional parameters
 *     callCharacteristicsPriorityCall     ( 9),     -- optional parameters
 *     callCharacteristicsHighPriorityCall     (10),     -- optional parameters
 *     callCharacteristicsMaintenanceCall     (11),     -- optional parameters
 *     callCharacteristicsDirectAgent         (12),     -- optional parameters
 *     callCharacteristicsAssistCall         (13),     -- optional parameters
 *     callCharacteristicsVoiceUnitCall     (14),     -- optional parameters
 *     callCharacteristicsPrivateCall         (15),     -- optional parameters
 *     callCharacteristicsPersonalCall     (16),     -- optional parameters
 *     callCharacteristicsSensitiveCall     (17),     -- optional parameters
 *     callCharacteristicsConfidentialCall    (18),     -- optional parameters
 *     callCharacteristicsEncryptedCall    (19),     -- optional parameters
 *     mediaCallCharacteristics         (20),     -- optional parameters
 *     connectionInfo                 (21),     -- optional parameters
 *     subjectOfCall                (22),     -- optional parameters
 *     languagePreferences            (23),     -- optional parameters
 *     reason                    (24),     -- optional parameters
 *     maxDevices                (25),     -- optional parameters
 *     startTime                (26),     -- optional parameters
 *     duration                (27),     -- optional parameters
 *     privateData                (28),     -- optional parameters
 *     mediaCharacteristicsinAck        (29),     -- optional parameters
 *     initiatedCallInfoInAck            (30),     -- optional parameters
 *     privateDataInAck            (31),     -- optional parameters
 *     supportsPrompting            (32),     -- optional parameters
 *     promptingMode                (33),     -- optional parameters
 *     mediaCharacteristicsAdjusted        (34),     -- optional parameters
 *     ackModelMultistep            (35) }
 * ```
 */
export
type MakeConnection = BIT_STRING;

/**
 * @summary MakeConnection_null_
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Null (ECMA-269
 * C.5.19).
 */
export
const MakeConnection_null_: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary null_
 * @constant
 * @description
 * Alias of `MakeConnection_null_`.
 */
export
const null_: number = MakeConnection_null_; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_accountCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `accountCode` parameter (ECMA-269
 * C.5.19).
 */
export
const MakeConnection_accountCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 * @description
 * Alias of `MakeConnection_accountCode`.
 */
export
const accountCode: number = MakeConnection_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_authCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `authCode` parameter (ECMA-269
 * C.5.19).
 */
export
const MakeConnection_authCode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 * @description
 * Alias of `MakeConnection_authCode`.
 */
export
const authCode: number = MakeConnection_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_autoOriginatePrompt
 * @constant
 * @description
 * Bit set means the SF supports `autoOriginate` value prompt (ECMA-269 C.5.19).
 */
export
const MakeConnection_autoOriginatePrompt: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginatePrompt
 * @constant
 * @description
 * Alias of `MakeConnection_autoOriginatePrompt`.
 */
export
const autoOriginatePrompt: number = MakeConnection_autoOriginatePrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_autoOriginateDoNotPrompt
 * @constant
 * @description
 * Bit set means the SF supports `autoOriginate` value doNotPrompt (ECMA-269
 * C.5.19).
 */
export
const MakeConnection_autoOriginateDoNotPrompt: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginateDoNotPrompt
 * @constant
 * @description
 * Alias of `MakeConnection_autoOriginateDoNotPrompt`.
 */
export
const autoOriginateDoNotPrompt: number = MakeConnection_autoOriginateDoNotPrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `MakeConnection_correlatorData`.
 */
export
const correlatorData: number = MakeConnection_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristics: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristics`.
 */
export
const callCharacteristics: number = MakeConnection_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsACDCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `acdCall` (ECMA-269
 * C.5.19).
 */
export
const MakeConnection_callCharacteristicsACDCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsACDCall`.
 */
export
const callCharacteristicsACDCall: number = MakeConnection_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `lowPriorityCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsLowPriorityCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsLowPriorityCall`.
 */
export
const callCharacteristicsLowPriorityCall: number = MakeConnection_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `priorityCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsPriorityCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsPriorityCall`.
 */
export
const callCharacteristicsPriorityCall: number = MakeConnection_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `highPriorityCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsHighPriorityCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsHighPriorityCall`.
 */
export
const callCharacteristicsHighPriorityCall: number = MakeConnection_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `maintenanceCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsMaintenanceCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsMaintenanceCall`.
 */
export
const callCharacteristicsMaintenanceCall: number = MakeConnection_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsDirectAgent
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `directAgent`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsDirectAgent: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsDirectAgent`.
 */
export
const callCharacteristicsDirectAgent: number = MakeConnection_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsAssistCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `assistCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsAssistCall: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsAssistCall`.
 */
export
const callCharacteristicsAssistCall: number = MakeConnection_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `voiceUnitCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsVoiceUnitCall: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsVoiceUnitCall`.
 */
export
const callCharacteristicsVoiceUnitCall: number = MakeConnection_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsPrivateCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `privateCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsPrivateCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsPrivateCall`.
 */
export
const callCharacteristicsPrivateCall: number = MakeConnection_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsPersonalCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `personalCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsPersonalCall: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsPersonalCall`.
 */
export
const callCharacteristicsPersonalCall: number = MakeConnection_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `sensitiveCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsSensitiveCall: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsSensitiveCall`.
 */
export
const callCharacteristicsSensitiveCall: number = MakeConnection_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `confidentialCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsConfidentialCall: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsConfidentialCall`.
 */
export
const callCharacteristicsConfidentialCall: number = MakeConnection_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `encryptedCall`
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_callCharacteristicsEncryptedCall: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Alias of `MakeConnection_callCharacteristicsEncryptedCall`.
 */
export
const callCharacteristicsEncryptedCall: number = MakeConnection_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.5.19).
 */
export
const MakeConnection_mediaCallCharacteristics: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `MakeConnection_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = MakeConnection_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_connectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.19).
 */
export
const MakeConnection_connectionInfo: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 * @description
 * Alias of `MakeConnection_connectionInfo`.
 */
export
const connectionInfo: number = MakeConnection_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_subjectOfCall: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `MakeConnection_subjectOfCall`.
 */
export
const subjectOfCall: number = MakeConnection_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_languagePreferences: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `MakeConnection_languagePreferences`.
 */
export
const languagePreferences: number = MakeConnection_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_reason
 * @constant
 * @description
 * Bit set means the SF supports the optional `reason` parameter (ECMA-269
 * C.5.19).
 */
export
const MakeConnection_reason: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 * @description
 * Alias of `MakeConnection_reason`.
 */
export
const reason: number = MakeConnection_reason; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_maxDevices
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.19).
 */
export
const MakeConnection_maxDevices: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary maxDevices
 * @constant
 * @description
 * Alias of `MakeConnection_maxDevices`.
 */
export
const maxDevices: number = MakeConnection_maxDevices; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_startTime
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.19).
 */
export
const MakeConnection_startTime: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary startTime
 * @constant
 * @description
 * Alias of `MakeConnection_startTime`.
 */
export
const startTime: number = MakeConnection_startTime; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_duration
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.19).
 */
export
const MakeConnection_duration: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary duration
 * @constant
 * @description
 * Alias of `MakeConnection_duration`.
 */
export
const duration: number = MakeConnection_duration; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.19).
 */
export
const MakeConnection_privateData: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `MakeConnection_privateData`.
 */
export
const privateData: number = MakeConnection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_mediaCharacteristicsinAck
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.19).
 */
export
const MakeConnection_mediaCharacteristicsinAck: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary mediaCharacteristicsinAck
 * @constant
 * @description
 * Alias of `MakeConnection_mediaCharacteristicsinAck`.
 */
export
const mediaCharacteristicsinAck: number = MakeConnection_mediaCharacteristicsinAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_initiatedCallInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `initiatedCallInfo` in the
 * acknowledgement (ECMA-269 C.5.19).
 */
export
const MakeConnection_initiatedCallInfoInAck: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary initiatedCallInfoInAck
 * @constant
 * @description
 * Alias of `MakeConnection_initiatedCallInfoInAck`.
 */
export
const initiatedCallInfoInAck: number = MakeConnection_initiatedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_privateDataInAck: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `MakeConnection_privateDataInAck`.
 */
export
const privateDataInAck: number = MakeConnection_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_supportsPrompting
 * @constant
 * @description
 * Bit set means the SF supports prompting for the calling device (ECMA-269
 * C.5.19).
 */
export
const MakeConnection_supportsPrompting: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 * @description
 * Alias of `MakeConnection_supportsPrompting`.
 */
export
const supportsPrompting: number = MakeConnection_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_promptingMode
 * @constant
 * @description
 * Bit set means the SF supports prompting as part of service execution
 * (ECMA-269 C.5.19).
 */
export
const MakeConnection_promptingMode: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 * @description
 * Alias of `MakeConnection_promptingMode`.
 */
export
const promptingMode: number = MakeConnection_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_mediaCharacteristicsAdjusted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.19).
 */
export
const MakeConnection_mediaCharacteristicsAdjusted: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary mediaCharacteristicsAdjusted
 * @constant
 * @description
 * Alias of `MakeConnection_mediaCharacteristicsAdjusted`.
 */
export
const mediaCharacteristicsAdjusted: number = MakeConnection_mediaCharacteristicsAdjusted; /* SHORT_NAMED_BIT */

/**
 * @summary MakeConnection_ackModelMultistep
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.19).
 */
export
const MakeConnection_ackModelMultistep: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultistep
 * @constant
 * @description
 * Alias of `MakeConnection_ackModelMultistep`.
 */
export
const ackModelMultistep: number = MakeConnection_ackModelMultistep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MakeConnection: $.ASN1Decoder<MakeConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakeConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakeConnection (el: _Element): MakeConnection {
    if (!_cached_decoder_for_MakeConnection) { _cached_decoder_for_MakeConnection = $._decodeBitString; }
    return _cached_decoder_for_MakeConnection(el);
}

let _cached_encoder_for_MakeConnection: $.ASN1Encoder<MakeConnection> | null = null;

/**
 * @summary Encodes a(n) MakeConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakeConnection, encoded as an ASN.1 Element.
 */
export
function _encode_MakeConnection (value: MakeConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakeConnection) { _cached_encoder_for_MakeConnection = $._encodeBitString; }
    return _cached_encoder_for_MakeConnection(value, elGetter);
}


/* eslint-enable */
