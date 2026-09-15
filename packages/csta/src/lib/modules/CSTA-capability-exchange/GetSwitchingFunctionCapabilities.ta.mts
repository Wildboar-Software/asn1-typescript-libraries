/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetSwitchingFunctionCapabilities
 * @description
 * Capability bitmap for optional parameters of Get Switching Function
 * Capabilities. Annex C.1.4 notes no service-option bits; ECMA-285 §9.10 still
 * encodes which Table 13-9 acknowledgement parameters the SF supports (ECMA-269
 * §13.1.4.2.1).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSwitchingFunctionCapabilities  ::=  BIT STRING
 * {     privateData                 ( 0),
 *     mediaClassSupport             ( 1),
 *     numberOfChannels            ( 2),
 *     maxChannelBind                ( 3),
 *     miscMediaCallCharacteristics        ( 4),
 *     connectionRateList            ( 5),
 *     delayToleranceRateList            ( 6),
 *     pauseTime                ( 7),
 *     currentTime                ( 8),
 *     transAndConfSetupParameter        ( 9),
 *     transAndConfSetupConsultation        (10),
 *     transAndConfSetupHoldMake        (11),
 *     transAndConfSetupAlternate        (12),
 *     transAndConfSetupTwoCalls        (13),
 *     transAndConfSetupTwoCallsConnected    (14),
 *     miscMonitor                (15),
 *     correlatorDataSupported            (16),
 *     dynamicFeatureSupported            (17),
 *     callLinkageOptions            (18),
 *     acdModels                (19),
 *     agentLogOnModels            (20),
 *     agentStateModels            (21),
 *     privateDataVersionList            (22),
 *     simpleThreshold                (23),
 *     filterThreshold                (24),
 *     maxDeviceHistoryEntries            (25) }
 * ```
 */
export
type GetSwitchingFunctionCapabilities = BIT_STRING;

/**
 * @summary GetSwitchingFunctionCapabilities_privateData
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` on this service
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_privateData`.
 */
export
const privateData: number = GetSwitchingFunctionCapabilities_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_mediaClassSupport
 * @constant
 * @description
 * Bit set means the SF supports optional `mediaClassSupport` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_mediaClassSupport: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaClassSupport
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_mediaClassSupport`.
 */
export
const mediaClassSupport: number = GetSwitchingFunctionCapabilities_mediaClassSupport; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_numberOfChannels
 * @constant
 * @description
 * Bit set means the SF supports optional `numberOfChannels` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_numberOfChannels: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary numberOfChannels
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_numberOfChannels`.
 */
export
const numberOfChannels: number = GetSwitchingFunctionCapabilities_numberOfChannels; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_maxChannelBind
 * @constant
 * @description
 * Bit set means the SF supports optional `maxChannelBind` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_maxChannelBind: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary maxChannelBind
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_maxChannelBind`.
 */
export
const maxChannelBind: number = GetSwitchingFunctionCapabilities_maxChannelBind; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports optional `miscMediaCallCharacteristics` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary miscMediaCallCharacteristics
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics`.
 */
export
const miscMediaCallCharacteristics: number = GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_connectionRateList
 * @constant
 * @description
 * Bit set means the SF supports optional `connectionRateList` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_connectionRateList: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary connectionRateList
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_connectionRateList`.
 */
export
const connectionRateList: number = GetSwitchingFunctionCapabilities_connectionRateList; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_delayToleranceRateList
 * @constant
 * @description
 * Bit set means the SF supports optional `delayToleranceRateList` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_delayToleranceRateList: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary delayToleranceRateList
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_delayToleranceRateList`.
 */
export
const delayToleranceRateList: number = GetSwitchingFunctionCapabilities_delayToleranceRateList; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_pauseTime
 * @constant
 * @description
 * Bit set means the SF supports optional `pauseTime` in the acknowledgement
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_pauseTime: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary pauseTime
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_pauseTime`.
 */
export
const pauseTime: number = GetSwitchingFunctionCapabilities_pauseTime; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_currentTime
 * @constant
 * @description
 * Bit set means the SF supports optional `currentTime` in the acknowledgement
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_currentTime: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary currentTime
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_currentTime`.
 */
export
const currentTime: number = GetSwitchingFunctionCapabilities_currentTime; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupParameter
 * @constant
 * @description
 * Bit set means the SF supports optional `transAndConfSetup` parameter in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupParameter: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupParameter
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_transAndConfSetupParameter`.
 */
export
const transAndConfSetupParameter: number = GetSwitchingFunctionCapabilities_transAndConfSetupParameter; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupConsultation
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` value Consultation Call
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupConsultation: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupConsultation
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_transAndConfSetupConsultation`.
 */
export
const transAndConfSetupConsultation: number = GetSwitchingFunctionCapabilities_transAndConfSetupConsultation; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` value Hold Call–Make Call
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupHoldMake
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake`.
 */
export
const transAndConfSetupHoldMake: number = GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupAlternate
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` value Alternate Call
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupAlternate: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupAlternate
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_transAndConfSetupAlternate`.
 */
export
const transAndConfSetupAlternate: number = GetSwitchingFunctionCapabilities_transAndConfSetupAlternate; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` two calls initially Held
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupTwoCalls
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls`.
 */
export
const transAndConfSetupTwoCalls: number = GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected
 * @constant
 * @description
 * Bit set means the SF supports `transAndConfSetup` two calls initially
 * Connected (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupTwoCallsConnected
 * @constant
 * @description
 * Alias of
 * `GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected`.
 */
export
const transAndConfSetupTwoCallsConnected: number = GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_miscMonitor
 * @constant
 * @description
 * Bit set means the SF supports optional `miscMonitorCaps` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_miscMonitor: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary miscMonitor
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_miscMonitor`.
 */
export
const miscMonitor: number = GetSwitchingFunctionCapabilities_miscMonitor; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_correlatorDataSupported
 * @constant
 * @description
 * Bit set means the SF supports optional `correlatorDataSupported` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_correlatorDataSupported: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary correlatorDataSupported
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_correlatorDataSupported`.
 */
export
const correlatorDataSupported: number = GetSwitchingFunctionCapabilities_correlatorDataSupported; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_dynamicFeatureSupported
 * @constant
 * @description
 * Bit set means the SF supports optional `dynamicFeatureSupported` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_dynamicFeatureSupported: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary dynamicFeatureSupported
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_dynamicFeatureSupported`.
 */
export
const dynamicFeatureSupported: number = GetSwitchingFunctionCapabilities_dynamicFeatureSupported; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_callLinkageOptions
 * @constant
 * @description
 * Bit set means the SF supports optional `callLinkageOptions` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_callLinkageOptions: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageOptions
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_callLinkageOptions`.
 */
export
const callLinkageOptions: number = GetSwitchingFunctionCapabilities_callLinkageOptions; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_acdModels
 * @constant
 * @description
 * Bit set means the SF supports optional `acdModels` in the acknowledgement
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_acdModels: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary acdModels
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_acdModels`.
 */
export
const acdModels: number = GetSwitchingFunctionCapabilities_acdModels; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_agentLogOnModels
 * @constant
 * @description
 * Bit set means the SF supports optional `agentLogOnModels` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_agentLogOnModels: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary agentLogOnModels
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_agentLogOnModels`.
 */
export
const agentLogOnModels: number = GetSwitchingFunctionCapabilities_agentLogOnModels; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_agentStateModels
 * @constant
 * @description
 * Bit set means the SF supports optional `agentStateModels` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_agentStateModels: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary agentStateModels
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_agentStateModels`.
 */
export
const agentStateModels: number = GetSwitchingFunctionCapabilities_agentStateModels; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_privateDataVersionList
 * @constant
 * @description
 * Bit set means the SF supports optional `privateDataVersionList` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_privateDataVersionList: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary privateDataVersionList
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_privateDataVersionList`.
 */
export
const privateDataVersionList: number = GetSwitchingFunctionCapabilities_privateDataVersionList; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_simpleThreshold
 * @constant
 * @description
 * Bit set means the SF supports optional `simpleThreshold` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_simpleThreshold: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary simpleThreshold
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_simpleThreshold`.
 */
export
const simpleThreshold: number = GetSwitchingFunctionCapabilities_simpleThreshold; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_filterThreshold
 * @constant
 * @description
 * Bit set means the SF supports optional `filterThreshold` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_filterThreshold: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary filterThreshold
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_filterThreshold`.
 */
export
const filterThreshold: number = GetSwitchingFunctionCapabilities_filterThreshold; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_maxDeviceHistoryEntries
 * @constant
 * @description
 * Bit set means the SF supports optional `maxDeviceHistoryEntries` in the
 * acknowledgement (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const GetSwitchingFunctionCapabilities_maxDeviceHistoryEntries: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary maxDeviceHistoryEntries
 * @constant
 * @description
 * Alias of `GetSwitchingFunctionCapabilities_maxDeviceHistoryEntries`.
 */
export
const maxDeviceHistoryEntries: number = GetSwitchingFunctionCapabilities_maxDeviceHistoryEntries; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetSwitchingFunctionCapabilities: $.ASN1Decoder<GetSwitchingFunctionCapabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSwitchingFunctionCapabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSwitchingFunctionCapabilities (el: _Element): GetSwitchingFunctionCapabilities {
    if (!_cached_decoder_for_GetSwitchingFunctionCapabilities) { _cached_decoder_for_GetSwitchingFunctionCapabilities = $._decodeBitString; }
    return _cached_decoder_for_GetSwitchingFunctionCapabilities(el);
}

let _cached_encoder_for_GetSwitchingFunctionCapabilities: $.ASN1Encoder<GetSwitchingFunctionCapabilities> | null = null;

/**
 * @summary Encodes a(n) GetSwitchingFunctionCapabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSwitchingFunctionCapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_GetSwitchingFunctionCapabilities (value: GetSwitchingFunctionCapabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSwitchingFunctionCapabilities) { _cached_encoder_for_GetSwitchingFunctionCapabilities = $._encodeBitString; }
    return _cached_encoder_for_GetSwitchingFunctionCapabilities(value, elGetter);
}


/* eslint-enable */
