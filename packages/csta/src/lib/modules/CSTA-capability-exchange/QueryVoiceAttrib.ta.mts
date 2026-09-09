/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary QueryVoiceAttrib
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueryVoiceAttrib  ::=  BIT STRING
 * {     messageToQuery                (30),     -- optional parameters
 *     resource                (31),     -- optional parameters
 *     attribToQueryEncodingAlgorithm         ( 0),     -- optional parameters
 *     attribToQuerySamplingRate         ( 1),     -- optional parameters
 *     attribToQueryDuration             ( 2),     -- optional parameters
 *     attribToQueryFilename             ( 3),     -- optional parameters
 *     attribToQueryCurrentPosition         ( 4),     -- optional parameters
 *     attribToQueryCurrentSpeed         ( 5),     -- optional parameters
 *     attribToQueryCurrentVolume         ( 6),     -- optional parameters
 *     attribToQueryCurrentLevel         ( 7),     -- optional parameters
 *     attribToQueryCurrentState         ( 8),     -- optional parameters
 *     attribToQueryGrammars            (32),     -- optional parameters
 *     attribToQueryLanguage            (33),     -- optional parameters
 *     attribToQueryMode            (34),     -- optional parameters
 *     attribToQueryRetainAudio        (35),     -- optional parameters
 *     attribToQuerySilenceTimeout        (36),     -- optional parameters
 *     attribToQueryMaxTimeout            (37),     -- optional parameters
 *     attribToQueryBabbleTimeout        (38),     -- optional parameters
 *     attribToQueryEndSilence            (39),     -- optional parameters
 *     attribToQueryRejectionThreshold        (40),     -- optional parameters
 *     attribToQueryAutoInterruptable        (41),     -- optional parameters
 *     attribToQueryInnerXML            (42),     -- optional parameters
 *     attribToQueryInterdigitTimeout        (43),     -- optional parameters
 *     attribToQueryPreflush            (44),     -- optional parameters
 *     connection                 ( 9),     -- optional parameters
 *     duration                 (10),     -- optional parameters
 *     terminationParameter             (11),     -- optional parameters
 *     terminationDurationExceeded         (12),     -- optional parameters
 *     terminationDTMFDigitDetected         (13),     -- optional parameters
 *     terminationEndOfSpeechDetected         (14),     -- optional parameters
 *     terminationSpeech             (15),     -- optional parameters
 *     privateData                 (16),     -- optional parameters
 *     attribInAckEncodingAlgorithmADPCM6K     (17),     -- optional parameters
 *     attribInAckEncodingAlgorithmADPCM8K     (18),     -- optional parameters
 *     attribInAckEncodingAlgorithmMuLawPCM6K     (19),     -- optional parameters
 *     attribInAckEncodingAlgorithmALawPCM6K     (20),     -- optional parameters
 *     attribInAckSamplingRate         (21),     -- optional parameters
 *     attribInAckDuration             (22),     -- optional parameters
 *     attribInAckFilename             (23),     -- optional parameters
 *     attribInAckCurrentPosition         (24),     -- optional parameters
 *     attribInAckCurrentSpeed         (25),     -- optional parameters
 *     attribInAckCurrentVolumeAbs         (26),     -- optional parameters
 *     attribInAckCurrentGain             (27),     -- optional parameters
 *     attribInAckCurrentState         (28),     -- optional parameters
 *     privateDataInAck             (29) }
 * ```
 */
export
type QueryVoiceAttrib = BIT_STRING;

/**
 * @summary QueryVoiceAttrib_messageToQuery
 * @constant
 */
export
const QueryVoiceAttrib_messageToQuery: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary messageToQuery
 * @constant
 */
export
const messageToQuery: number = QueryVoiceAttrib_messageToQuery; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_resource
 * @constant
 */
export
const QueryVoiceAttrib_resource: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = QueryVoiceAttrib_resource; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryEncodingAlgorithm
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryEncodingAlgorithm: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryEncodingAlgorithm
 * @constant
 */
export
const attribToQueryEncodingAlgorithm: number = QueryVoiceAttrib_attribToQueryEncodingAlgorithm; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQuerySamplingRate
 * @constant
 */
export
const QueryVoiceAttrib_attribToQuerySamplingRate: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary attribToQuerySamplingRate
 * @constant
 */
export
const attribToQuerySamplingRate: number = QueryVoiceAttrib_attribToQuerySamplingRate; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryDuration
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryDuration: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryDuration
 * @constant
 */
export
const attribToQueryDuration: number = QueryVoiceAttrib_attribToQueryDuration; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryFilename
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryFilename: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryFilename
 * @constant
 */
export
const attribToQueryFilename: number = QueryVoiceAttrib_attribToQueryFilename; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryCurrentPosition
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryCurrentPosition: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryCurrentPosition
 * @constant
 */
export
const attribToQueryCurrentPosition: number = QueryVoiceAttrib_attribToQueryCurrentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryCurrentSpeed
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryCurrentSpeed: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryCurrentSpeed
 * @constant
 */
export
const attribToQueryCurrentSpeed: number = QueryVoiceAttrib_attribToQueryCurrentSpeed; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryCurrentVolume
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryCurrentVolume: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryCurrentVolume
 * @constant
 */
export
const attribToQueryCurrentVolume: number = QueryVoiceAttrib_attribToQueryCurrentVolume; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryCurrentLevel
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryCurrentLevel: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryCurrentLevel
 * @constant
 */
export
const attribToQueryCurrentLevel: number = QueryVoiceAttrib_attribToQueryCurrentLevel; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryCurrentState
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryCurrentState: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryCurrentState
 * @constant
 */
export
const attribToQueryCurrentState: number = QueryVoiceAttrib_attribToQueryCurrentState; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryGrammars
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryGrammars: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryGrammars
 * @constant
 */
export
const attribToQueryGrammars: number = QueryVoiceAttrib_attribToQueryGrammars; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryLanguage
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryLanguage: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryLanguage
 * @constant
 */
export
const attribToQueryLanguage: number = QueryVoiceAttrib_attribToQueryLanguage; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryMode
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryMode: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryMode
 * @constant
 */
export
const attribToQueryMode: number = QueryVoiceAttrib_attribToQueryMode; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryRetainAudio
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryRetainAudio: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryRetainAudio
 * @constant
 */
export
const attribToQueryRetainAudio: number = QueryVoiceAttrib_attribToQueryRetainAudio; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQuerySilenceTimeout
 * @constant
 */
export
const QueryVoiceAttrib_attribToQuerySilenceTimeout: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary attribToQuerySilenceTimeout
 * @constant
 */
export
const attribToQuerySilenceTimeout: number = QueryVoiceAttrib_attribToQuerySilenceTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryMaxTimeout
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryMaxTimeout: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryMaxTimeout
 * @constant
 */
export
const attribToQueryMaxTimeout: number = QueryVoiceAttrib_attribToQueryMaxTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryBabbleTimeout
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryBabbleTimeout: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryBabbleTimeout
 * @constant
 */
export
const attribToQueryBabbleTimeout: number = QueryVoiceAttrib_attribToQueryBabbleTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryEndSilence
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryEndSilence: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryEndSilence
 * @constant
 */
export
const attribToQueryEndSilence: number = QueryVoiceAttrib_attribToQueryEndSilence; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryRejectionThreshold
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryRejectionThreshold: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryRejectionThreshold
 * @constant
 */
export
const attribToQueryRejectionThreshold: number = QueryVoiceAttrib_attribToQueryRejectionThreshold; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryAutoInterruptable
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryAutoInterruptable: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryAutoInterruptable
 * @constant
 */
export
const attribToQueryAutoInterruptable: number = QueryVoiceAttrib_attribToQueryAutoInterruptable; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryInnerXML
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryInnerXML: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryInnerXML
 * @constant
 */
export
const attribToQueryInnerXML: number = QueryVoiceAttrib_attribToQueryInnerXML; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryInterdigitTimeout
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryInterdigitTimeout: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryInterdigitTimeout
 * @constant
 */
export
const attribToQueryInterdigitTimeout: number = QueryVoiceAttrib_attribToQueryInterdigitTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribToQueryPreflush
 * @constant
 */
export
const QueryVoiceAttrib_attribToQueryPreflush: number = 44; /* LONG_NAMED_BIT */

/**
 * @summary attribToQueryPreflush
 * @constant
 */
export
const attribToQueryPreflush: number = QueryVoiceAttrib_attribToQueryPreflush; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_connection
 * @constant
 */
export
const QueryVoiceAttrib_connection: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary connection
 * @constant
 */
export
const connection: number = QueryVoiceAttrib_connection; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_duration
 * @constant
 */
export
const QueryVoiceAttrib_duration: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary duration
 * @constant
 */
export
const duration: number = QueryVoiceAttrib_duration; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_terminationParameter
 * @constant
 */
export
const QueryVoiceAttrib_terminationParameter: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary terminationParameter
 * @constant
 */
export
const terminationParameter: number = QueryVoiceAttrib_terminationParameter; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_terminationDurationExceeded
 * @constant
 */
export
const QueryVoiceAttrib_terminationDurationExceeded: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary terminationDurationExceeded
 * @constant
 */
export
const terminationDurationExceeded: number = QueryVoiceAttrib_terminationDurationExceeded; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_terminationDTMFDigitDetected
 * @constant
 */
export
const QueryVoiceAttrib_terminationDTMFDigitDetected: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary terminationDTMFDigitDetected
 * @constant
 */
export
const terminationDTMFDigitDetected: number = QueryVoiceAttrib_terminationDTMFDigitDetected; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_terminationEndOfSpeechDetected
 * @constant
 */
export
const QueryVoiceAttrib_terminationEndOfSpeechDetected: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary terminationEndOfSpeechDetected
 * @constant
 */
export
const terminationEndOfSpeechDetected: number = QueryVoiceAttrib_terminationEndOfSpeechDetected; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_terminationSpeech
 * @constant
 */
export
const QueryVoiceAttrib_terminationSpeech: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary terminationSpeech
 * @constant
 */
export
const terminationSpeech: number = QueryVoiceAttrib_terminationSpeech; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_privateData
 * @constant
 */
export
const QueryVoiceAttrib_privateData: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = QueryVoiceAttrib_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckEncodingAlgorithmADPCM6K
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckEncodingAlgorithmADPCM6K: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckEncodingAlgorithmADPCM6K
 * @constant
 */
export
const attribInAckEncodingAlgorithmADPCM6K: number = QueryVoiceAttrib_attribInAckEncodingAlgorithmADPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckEncodingAlgorithmADPCM8K
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckEncodingAlgorithmADPCM8K: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckEncodingAlgorithmADPCM8K
 * @constant
 */
export
const attribInAckEncodingAlgorithmADPCM8K: number = QueryVoiceAttrib_attribInAckEncodingAlgorithmADPCM8K; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckEncodingAlgorithmMuLawPCM6K
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckEncodingAlgorithmMuLawPCM6K: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckEncodingAlgorithmMuLawPCM6K
 * @constant
 */
export
const attribInAckEncodingAlgorithmMuLawPCM6K: number = QueryVoiceAttrib_attribInAckEncodingAlgorithmMuLawPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckEncodingAlgorithmALawPCM6K
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckEncodingAlgorithmALawPCM6K: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckEncodingAlgorithmALawPCM6K
 * @constant
 */
export
const attribInAckEncodingAlgorithmALawPCM6K: number = QueryVoiceAttrib_attribInAckEncodingAlgorithmALawPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckSamplingRate
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckSamplingRate: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckSamplingRate
 * @constant
 */
export
const attribInAckSamplingRate: number = QueryVoiceAttrib_attribInAckSamplingRate; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckDuration
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckDuration: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckDuration
 * @constant
 */
export
const attribInAckDuration: number = QueryVoiceAttrib_attribInAckDuration; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckFilename
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckFilename: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckFilename
 * @constant
 */
export
const attribInAckFilename: number = QueryVoiceAttrib_attribInAckFilename; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckCurrentPosition
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckCurrentPosition: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckCurrentPosition
 * @constant
 */
export
const attribInAckCurrentPosition: number = QueryVoiceAttrib_attribInAckCurrentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckCurrentSpeed
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckCurrentSpeed: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckCurrentSpeed
 * @constant
 */
export
const attribInAckCurrentSpeed: number = QueryVoiceAttrib_attribInAckCurrentSpeed; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckCurrentVolumeAbs
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckCurrentVolumeAbs: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckCurrentVolumeAbs
 * @constant
 */
export
const attribInAckCurrentVolumeAbs: number = QueryVoiceAttrib_attribInAckCurrentVolumeAbs; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckCurrentGain
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckCurrentGain: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckCurrentGain
 * @constant
 */
export
const attribInAckCurrentGain: number = QueryVoiceAttrib_attribInAckCurrentGain; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_attribInAckCurrentState
 * @constant
 */
export
const QueryVoiceAttrib_attribInAckCurrentState: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary attribInAckCurrentState
 * @constant
 */
export
const attribInAckCurrentState: number = QueryVoiceAttrib_attribInAckCurrentState; /* SHORT_NAMED_BIT */

/**
 * @summary QueryVoiceAttrib_privateDataInAck
 * @constant
 */
export
const QueryVoiceAttrib_privateDataInAck: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = QueryVoiceAttrib_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_QueryVoiceAttrib: $.ASN1Decoder<QueryVoiceAttrib> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QueryVoiceAttrib
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QueryVoiceAttrib (el: _Element): QueryVoiceAttrib {
    if (!_cached_decoder_for_QueryVoiceAttrib) { _cached_decoder_for_QueryVoiceAttrib = $._decodeBitString; }
    return _cached_decoder_for_QueryVoiceAttrib(el);
}

let _cached_encoder_for_QueryVoiceAttrib: $.ASN1Encoder<QueryVoiceAttrib> | null = null;

/**
 * @summary Encodes a(n) QueryVoiceAttrib into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryVoiceAttrib, encoded as an ASN.1 Element.
 */
export
function _encode_QueryVoiceAttrib (value: QueryVoiceAttrib, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QueryVoiceAttrib) { _cached_encoder_for_QueryVoiceAttrib = $._encodeBitString; }
    return _cached_encoder_for_QueryVoiceAttrib(value, elGetter);
}


/* eslint-enable */
