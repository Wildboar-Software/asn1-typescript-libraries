/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetSwitchingFunctionCapabilities
 * @description
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
 */
export
const GetSwitchingFunctionCapabilities_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetSwitchingFunctionCapabilities_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_mediaClassSupport
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_mediaClassSupport: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaClassSupport
 * @constant
 */
export
const mediaClassSupport: number = GetSwitchingFunctionCapabilities_mediaClassSupport; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_numberOfChannels
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_numberOfChannels: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary numberOfChannels
 * @constant
 */
export
const numberOfChannels: number = GetSwitchingFunctionCapabilities_numberOfChannels; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_maxChannelBind
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_maxChannelBind: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary maxChannelBind
 * @constant
 */
export
const maxChannelBind: number = GetSwitchingFunctionCapabilities_maxChannelBind; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary miscMediaCallCharacteristics
 * @constant
 */
export
const miscMediaCallCharacteristics: number = GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_connectionRateList
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_connectionRateList: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary connectionRateList
 * @constant
 */
export
const connectionRateList: number = GetSwitchingFunctionCapabilities_connectionRateList; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_delayToleranceRateList
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_delayToleranceRateList: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary delayToleranceRateList
 * @constant
 */
export
const delayToleranceRateList: number = GetSwitchingFunctionCapabilities_delayToleranceRateList; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_pauseTime
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_pauseTime: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary pauseTime
 * @constant
 */
export
const pauseTime: number = GetSwitchingFunctionCapabilities_pauseTime; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_currentTime
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_currentTime: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary currentTime
 * @constant
 */
export
const currentTime: number = GetSwitchingFunctionCapabilities_currentTime; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupParameter
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupParameter: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupParameter
 * @constant
 */
export
const transAndConfSetupParameter: number = GetSwitchingFunctionCapabilities_transAndConfSetupParameter; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupConsultation
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupConsultation: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupConsultation
 * @constant
 */
export
const transAndConfSetupConsultation: number = GetSwitchingFunctionCapabilities_transAndConfSetupConsultation; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupHoldMake
 * @constant
 */
export
const transAndConfSetupHoldMake: number = GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupAlternate
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupAlternate: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupAlternate
 * @constant
 */
export
const transAndConfSetupAlternate: number = GetSwitchingFunctionCapabilities_transAndConfSetupAlternate; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupTwoCalls
 * @constant
 */
export
const transAndConfSetupTwoCalls: number = GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary transAndConfSetupTwoCallsConnected
 * @constant
 */
export
const transAndConfSetupTwoCallsConnected: number = GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_miscMonitor
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_miscMonitor: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary miscMonitor
 * @constant
 */
export
const miscMonitor: number = GetSwitchingFunctionCapabilities_miscMonitor; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_correlatorDataSupported
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_correlatorDataSupported: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary correlatorDataSupported
 * @constant
 */
export
const correlatorDataSupported: number = GetSwitchingFunctionCapabilities_correlatorDataSupported; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_dynamicFeatureSupported
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_dynamicFeatureSupported: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary dynamicFeatureSupported
 * @constant
 */
export
const dynamicFeatureSupported: number = GetSwitchingFunctionCapabilities_dynamicFeatureSupported; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_callLinkageOptions
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_callLinkageOptions: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageOptions
 * @constant
 */
export
const callLinkageOptions: number = GetSwitchingFunctionCapabilities_callLinkageOptions; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_acdModels
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_acdModels: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary acdModels
 * @constant
 */
export
const acdModels: number = GetSwitchingFunctionCapabilities_acdModels; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_agentLogOnModels
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_agentLogOnModels: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary agentLogOnModels
 * @constant
 */
export
const agentLogOnModels: number = GetSwitchingFunctionCapabilities_agentLogOnModels; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_agentStateModels
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_agentStateModels: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary agentStateModels
 * @constant
 */
export
const agentStateModels: number = GetSwitchingFunctionCapabilities_agentStateModels; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_privateDataVersionList
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_privateDataVersionList: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary privateDataVersionList
 * @constant
 */
export
const privateDataVersionList: number = GetSwitchingFunctionCapabilities_privateDataVersionList; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_simpleThreshold
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_simpleThreshold: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary simpleThreshold
 * @constant
 */
export
const simpleThreshold: number = GetSwitchingFunctionCapabilities_simpleThreshold; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_filterThreshold
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_filterThreshold: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary filterThreshold
 * @constant
 */
export
const filterThreshold: number = GetSwitchingFunctionCapabilities_filterThreshold; /* SHORT_NAMED_BIT */

/**
 * @summary GetSwitchingFunctionCapabilities_maxDeviceHistoryEntries
 * @constant
 */
export
const GetSwitchingFunctionCapabilities_maxDeviceHistoryEntries: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary maxDeviceHistoryEntries
 * @constant
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
