/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MakeCall
 * @description
 * Capability bitmap for the Make Call service (ECMA-269 C.5.18, ECMA-285
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
 * MakeCall  ::=  BIT STRING
 * {     initiated                 ( 0),     -- initials states
 *     null                     ( 1),     -- initials states
 *     accountCode                 ( 2),     -- optional parameters
 *     authCode                 ( 3),     -- optional parameters
 *     autoOriginatePrompt             ( 4),     -- optional parameters
 *     autoOriginateDoNotPrompt         ( 5),     -- optional parameters
 *     correlatorData                 ( 6),     -- optional parameters
 *     userData                 ( 7),     -- optional parameters
 *     callCharacteristics             ( 8),     -- optional parameters
 *     callCharacteristicsACDCall         ( 9),     -- optional parameters
 *     callCharacteristicsLowPriorityCall     (26),     -- optional parameters
 *     callCharacteristicsPriorityCall     (10),     -- optional parameters
 *     callCharacteristicsHighPriorityCall     (27),     -- optional parameters
 *     callCharacteristicsMaintenanceCall     (11),     -- optional parameters
 *     callCharacteristicsDirectAgent         (12),     -- optional parameters
 *     callCharacteristicsAssistCall         (13),     -- optional parameters
 *     callCharacteristicsVoiceUnitCall     (14),     -- optional parameters
 *     callCharacteristicsPrivateCall         (28),     -- optional parameters
 *     callCharacteristicsPersonalCall     (29),     -- optional parameters
 *     callCharacteristicsSensitiveCall     (30),     -- optional parameters
 *     callCharacteristicsConfidentialCall    (31),     -- optional parameters
 *     callCharacteristicsEncryptedCall    (32),     -- optional parameters
 *     mediaCallCharacteristics         (15),     -- optional parameters
 *     callingConnectionInfo             (16),     -- optional parameters
 *     subjectOfCall                (33),     -- optional parameters
 *     languagePreferences            (34),     -- optional parameters
 *     privateData                 (17),     -- optional parameters
 *     initiatedCallInfoInAck             (18),     -- optional parameters
 *     privateDataInAck             (19),     -- optional parameters
 *     multiStage                 (20),     -- misc characteristics
 *     supportsPrompting             (21),     -- misc characteristics
 *     promptingMode                 (22),     -- misc characteristics
 *     offHook                 (23),     -- misc characteristics
 *     mediaCharacteristicsAdjustable         (24),     -- misc characteristics
 *     ackModelMultiStep             (25),     -- misc characteristics
 *     reason                    (35) }
 * ```
 */
export
type MakeCall = BIT_STRING;

/**
 * @summary MakeCall_initiated
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Initiated (ECMA-269
 * C.5.18).
 */
export
const MakeCall_initiated: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary initiated
 * @constant
 * @description
 * Alias of `MakeCall_initiated`.
 */
export
const initiated: number = MakeCall_initiated; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_null_
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Null (ECMA-269
 * C.5.18).
 */
export
const MakeCall_null_: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary null_
 * @constant
 * @description
 * Alias of `MakeCall_null_`.
 */
export
const null_: number = MakeCall_null_; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_accountCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `accountCode` parameter (ECMA-269
 * C.5.18).
 */
export
const MakeCall_accountCode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 * @description
 * Alias of `MakeCall_accountCode`.
 */
export
const accountCode: number = MakeCall_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_authCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `authCode` parameter (ECMA-269
 * C.5.18).
 */
export
const MakeCall_authCode: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 * @description
 * Alias of `MakeCall_authCode`.
 */
export
const authCode: number = MakeCall_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_autoOriginatePrompt
 * @constant
 * @description
 * Bit set means the SF supports `autoOriginate` value prompt (ECMA-269 C.5.18).
 */
export
const MakeCall_autoOriginatePrompt: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginatePrompt
 * @constant
 * @description
 * Alias of `MakeCall_autoOriginatePrompt`.
 */
export
const autoOriginatePrompt: number = MakeCall_autoOriginatePrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_autoOriginateDoNotPrompt
 * @constant
 * @description
 * Bit set means the SF supports `autoOriginate` value doNotPrompt (ECMA-269
 * C.5.18).
 */
export
const MakeCall_autoOriginateDoNotPrompt: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary autoOriginateDoNotPrompt
 * @constant
 * @description
 * Alias of `MakeCall_autoOriginateDoNotPrompt`.
 */
export
const autoOriginateDoNotPrompt: number = MakeCall_autoOriginateDoNotPrompt; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_correlatorData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `MakeCall_correlatorData`.
 */
export
const correlatorData: number = MakeCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.5.18).
 */
export
const MakeCall_userData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `MakeCall_userData`.
 */
export
const userData: number = MakeCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristics: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristics`.
 */
export
const callCharacteristics: number = MakeCall_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsACDCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `acdCall` (ECMA-269
 * C.5.18).
 */
export
const MakeCall_callCharacteristicsACDCall: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsACDCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsACDCall`.
 */
export
const callCharacteristicsACDCall: number = MakeCall_callCharacteristicsACDCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `lowPriorityCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsLowPriorityCall: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsLowPriorityCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsLowPriorityCall`.
 */
export
const callCharacteristicsLowPriorityCall: number = MakeCall_callCharacteristicsLowPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `priorityCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsPriorityCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPriorityCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsPriorityCall`.
 */
export
const callCharacteristicsPriorityCall: number = MakeCall_callCharacteristicsPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `highPriorityCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsHighPriorityCall: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsHighPriorityCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsHighPriorityCall`.
 */
export
const callCharacteristicsHighPriorityCall: number = MakeCall_callCharacteristicsHighPriorityCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `maintenanceCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsMaintenanceCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsMaintenanceCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsMaintenanceCall`.
 */
export
const callCharacteristicsMaintenanceCall: number = MakeCall_callCharacteristicsMaintenanceCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsDirectAgent
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `directAgent`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsDirectAgent: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsDirectAgent
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsDirectAgent`.
 */
export
const callCharacteristicsDirectAgent: number = MakeCall_callCharacteristicsDirectAgent; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsAssistCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `assistCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsAssistCall: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsAssistCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsAssistCall`.
 */
export
const callCharacteristicsAssistCall: number = MakeCall_callCharacteristicsAssistCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `voiceUnitCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsVoiceUnitCall: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsVoiceUnitCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsVoiceUnitCall`.
 */
export
const callCharacteristicsVoiceUnitCall: number = MakeCall_callCharacteristicsVoiceUnitCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsPrivateCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `privateCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsPrivateCall: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPrivateCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsPrivateCall`.
 */
export
const callCharacteristicsPrivateCall: number = MakeCall_callCharacteristicsPrivateCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsPersonalCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `personalCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsPersonalCall: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsPersonalCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsPersonalCall`.
 */
export
const callCharacteristicsPersonalCall: number = MakeCall_callCharacteristicsPersonalCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `sensitiveCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsSensitiveCall: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsSensitiveCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsSensitiveCall`.
 */
export
const callCharacteristicsSensitiveCall: number = MakeCall_callCharacteristicsSensitiveCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `confidentialCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsConfidentialCall: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsConfidentialCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsConfidentialCall`.
 */
export
const callCharacteristicsConfidentialCall: number = MakeCall_callCharacteristicsConfidentialCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Bit set means the SF supports `callCharacteristics` value `encryptedCall`
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_callCharacteristicsEncryptedCall: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsEncryptedCall
 * @constant
 * @description
 * Alias of `MakeCall_callCharacteristicsEncryptedCall`.
 */
export
const callCharacteristicsEncryptedCall: number = MakeCall_callCharacteristicsEncryptedCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.5.18).
 */
export
const MakeCall_mediaCallCharacteristics: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `MakeCall_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = MakeCall_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_callingConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.18).
 */
export
const MakeCall_callingConnectionInfo: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary callingConnectionInfo
 * @constant
 * @description
 * Alias of `MakeCall_callingConnectionInfo`.
 */
export
const callingConnectionInfo: number = MakeCall_callingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_subjectOfCall: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `MakeCall_subjectOfCall`.
 */
export
const subjectOfCall: number = MakeCall_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_languagePreferences: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `MakeCall_languagePreferences`.
 */
export
const languagePreferences: number = MakeCall_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.18).
 */
export
const MakeCall_privateData: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `MakeCall_privateData`.
 */
export
const privateData: number = MakeCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_initiatedCallInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `initiatedCallInfo` in the
 * acknowledgement (ECMA-269 C.5.18).
 */
export
const MakeCall_initiatedCallInfoInAck: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary initiatedCallInfoInAck
 * @constant
 * @description
 * Alias of `MakeCall_initiatedCallInfoInAck`.
 */
export
const initiatedCallInfoInAck: number = MakeCall_initiatedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_privateDataInAck: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `MakeCall_privateDataInAck`.
 */
export
const privateDataInAck: number = MakeCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_multiStage
 * @constant
 * @description
 * Bit set means the SF supports multistage dialling with this service (ECMA-269
 * C.5.18).
 */
export
const MakeCall_multiStage: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary multiStage
 * @constant
 * @description
 * Alias of `MakeCall_multiStage`.
 */
export
const multiStage: number = MakeCall_multiStage; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_supportsPrompting
 * @constant
 * @description
 * Bit set means the SF supports prompting for the calling device (ECMA-269
 * C.5.18).
 */
export
const MakeCall_supportsPrompting: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 * @description
 * Alias of `MakeCall_supportsPrompting`.
 */
export
const supportsPrompting: number = MakeCall_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_promptingMode
 * @constant
 * @description
 * Bit set means the SF supports prompting as part of service execution
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_promptingMode: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 * @description
 * Alias of `MakeCall_promptingMode`.
 */
export
const promptingMode: number = MakeCall_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_offHook
 * @constant
 * @description
 * Bit set means the SF supports performing the service while the device is
 * off-hook (ECMA-269 C.5.18).
 */
export
const MakeCall_offHook: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary offHook
 * @constant
 * @description
 * Alias of `MakeCall_offHook`.
 */
export
const offHook: number = MakeCall_offHook; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_mediaCharacteristicsAdjustable
 * @constant
 * @description
 * Bit set means the SF supports adjusting media characteristics of the call
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_mediaCharacteristicsAdjustable: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary mediaCharacteristicsAdjustable
 * @constant
 * @description
 * Alias of `MakeCall_mediaCharacteristicsAdjustable`.
 */
export
const mediaCharacteristicsAdjustable: number = MakeCall_mediaCharacteristicsAdjustable; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.18).
 */
export
const MakeCall_ackModelMultiStep: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `MakeCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = MakeCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary MakeCall_reason
 * @constant
 * @description
 * Bit set means the SF supports the optional `reason` parameter (ECMA-269
 * C.5.18).
 */
export
const MakeCall_reason: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 * @description
 * Alias of `MakeCall_reason`.
 */
export
const reason: number = MakeCall_reason; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MakeCall: $.ASN1Decoder<MakeCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakeCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakeCall (el: _Element): MakeCall {
    if (!_cached_decoder_for_MakeCall) { _cached_decoder_for_MakeCall = $._decodeBitString; }
    return _cached_decoder_for_MakeCall(el);
}

let _cached_encoder_for_MakeCall: $.ASN1Encoder<MakeCall> | null = null;

/**
 * @summary Encodes a(n) MakeCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakeCall, encoded as an ASN.1 Element.
 */
export
function _encode_MakeCall (value: MakeCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakeCall) { _cached_encoder_for_MakeCall = $._encodeBitString; }
    return _cached_encoder_for_MakeCall(value, elGetter);
}


/* eslint-enable */
