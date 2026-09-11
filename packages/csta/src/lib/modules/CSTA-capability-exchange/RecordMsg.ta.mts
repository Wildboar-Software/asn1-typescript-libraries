/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RecordMsg
 * @description
 * Capability bitmap for the Record Message service (ECMA-269 C.19.9, ECMA-285
 * §9.10). Presence of this entry in `VoiceUnitServList` means the SF supports
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
 * RecordMsg  ::=  BIT STRING
 * {     resource                (13),     -- optional parameters
 *     samplingRate                 ( 0),     -- optional parameters
 *     encodingAlgorithmADPCM6K         ( 1),     -- optional parameters
 *     encodingAlgorithmADPCM8K         ( 2),     -- optional parameters
 *     encodingAlgorithmMuLawPCM6K         ( 3),     -- optional parameters
 *     encodingAlgorithmALawPCM6K         ( 4),     -- optional parameters
 *     maxDuration                 ( 5),     -- optional parameters
 *     terminationParameter             ( 6),     -- optional parameters
 *     terminationDurationExceeded         ( 7),     -- optional parameters
 *     terminationDTMFDigitDetected         ( 8),     -- optional parameters
 *     terminationEndOfDataDetected         ( 9),     -- optional parameters
 *     terminationSpeechDetected         (10),     -- optional parameters
 *     privateData                 (11),     -- optional parameters
 *     privateDataInAck             (12) }
 * ```
 */
export
type RecordMsg = BIT_STRING;

/**
 * @summary RecordMsg_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.19.9).
 */
export
const RecordMsg_resource: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `RecordMsg_resource`.
 */
export
const resource: number = RecordMsg_resource; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_samplingRate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_samplingRate: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary samplingRate
 * @constant
 * @description
 * Alias of `RecordMsg_samplingRate`.
 */
export
const samplingRate: number = RecordMsg_samplingRate; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_encodingAlgorithmADPCM6K
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_encodingAlgorithmADPCM6K: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary encodingAlgorithmADPCM6K
 * @constant
 * @description
 * Alias of `RecordMsg_encodingAlgorithmADPCM6K`.
 */
export
const encodingAlgorithmADPCM6K: number = RecordMsg_encodingAlgorithmADPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_encodingAlgorithmADPCM8K
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_encodingAlgorithmADPCM8K: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary encodingAlgorithmADPCM8K
 * @constant
 * @description
 * Alias of `RecordMsg_encodingAlgorithmADPCM8K`.
 */
export
const encodingAlgorithmADPCM8K: number = RecordMsg_encodingAlgorithmADPCM8K; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_encodingAlgorithmMuLawPCM6K
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_encodingAlgorithmMuLawPCM6K: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary encodingAlgorithmMuLawPCM6K
 * @constant
 * @description
 * Alias of `RecordMsg_encodingAlgorithmMuLawPCM6K`.
 */
export
const encodingAlgorithmMuLawPCM6K: number = RecordMsg_encodingAlgorithmMuLawPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_encodingAlgorithmALawPCM6K
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_encodingAlgorithmALawPCM6K: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary encodingAlgorithmALawPCM6K
 * @constant
 * @description
 * Alias of `RecordMsg_encodingAlgorithmALawPCM6K`.
 */
export
const encodingAlgorithmALawPCM6K: number = RecordMsg_encodingAlgorithmALawPCM6K; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_maxDuration
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_maxDuration: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary maxDuration
 * @constant
 * @description
 * Alias of `RecordMsg_maxDuration`.
 */
export
const maxDuration: number = RecordMsg_maxDuration; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationParameter
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_terminationParameter: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary terminationParameter
 * @constant
 * @description
 * Alias of `RecordMsg_terminationParameter`.
 */
export
const terminationParameter: number = RecordMsg_terminationParameter; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationDurationExceeded
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_terminationDurationExceeded: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary terminationDurationExceeded
 * @constant
 * @description
 * Alias of `RecordMsg_terminationDurationExceeded`.
 */
export
const terminationDurationExceeded: number = RecordMsg_terminationDurationExceeded; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationDTMFDigitDetected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_terminationDTMFDigitDetected: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary terminationDTMFDigitDetected
 * @constant
 * @description
 * Alias of `RecordMsg_terminationDTMFDigitDetected`.
 */
export
const terminationDTMFDigitDetected: number = RecordMsg_terminationDTMFDigitDetected; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationEndOfDataDetected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_terminationEndOfDataDetected: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary terminationEndOfDataDetected
 * @constant
 * @description
 * Alias of `RecordMsg_terminationEndOfDataDetected`.
 */
export
const terminationEndOfDataDetected: number = RecordMsg_terminationEndOfDataDetected; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_terminationSpeechDetected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.9).
 */
export
const RecordMsg_terminationSpeechDetected: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary terminationSpeechDetected
 * @constant
 * @description
 * Alias of `RecordMsg_terminationSpeechDetected`.
 */
export
const terminationSpeechDetected: number = RecordMsg_terminationSpeechDetected; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.9).
 */
export
const RecordMsg_privateData: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `RecordMsg_privateData`.
 */
export
const privateData: number = RecordMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary RecordMsg_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.9).
 */
export
const RecordMsg_privateDataInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `RecordMsg_privateDataInAck`.
 */
export
const privateDataInAck: number = RecordMsg_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RecordMsg: $.ASN1Decoder<RecordMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordMsg (el: _Element): RecordMsg {
    if (!_cached_decoder_for_RecordMsg) { _cached_decoder_for_RecordMsg = $._decodeBitString; }
    return _cached_decoder_for_RecordMsg(el);
}

let _cached_encoder_for_RecordMsg: $.ASN1Encoder<RecordMsg> | null = null;

/**
 * @summary Encodes a(n) RecordMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordMsg, encoded as an ASN.1 Element.
 */
export
function _encode_RecordMsg (value: RecordMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordMsg) { _cached_encoder_for_RecordMsg = $._encodeBitString; }
    return _cached_encoder_for_RecordMsg(value, elGetter);
}


/* eslint-enable */
