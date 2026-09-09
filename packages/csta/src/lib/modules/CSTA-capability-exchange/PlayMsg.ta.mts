/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PlayMsg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlayMsg  ::=  BIT STRING
 * {     duration                 ( 0),     -- optional parameters
 *     terminationParameter             ( 1),     -- optional parameters
 *     terminationDurationExceeded         ( 2),     -- optional parameters
 *     terminationDTMFDigitDetected         ( 3),     -- optional parameters
 *     terminationEndOfSpeechDetected         ( 4),     -- optional parameters
 *     terminationSpeech             ( 5),     -- optional parameters
 *     privateData                 ( 6),     -- optional parameters
 *     privateDataInAck             ( 7),     -- optional parameters
 *     multipleMsgsSimultaneously         ( 8) }
 * ```
 */
export
type PlayMsg = BIT_STRING;

/**
 * @summary PlayMsg_duration
 * @constant
 */
export
const PlayMsg_duration: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary duration
 * @constant
 */
export
const duration: number = PlayMsg_duration; /* SHORT_NAMED_BIT */

/**
 * @summary PlayMsg_terminationParameter
 * @constant
 */
export
const PlayMsg_terminationParameter: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary terminationParameter
 * @constant
 */
export
const terminationParameter: number = PlayMsg_terminationParameter; /* SHORT_NAMED_BIT */

/**
 * @summary PlayMsg_terminationDurationExceeded
 * @constant
 */
export
const PlayMsg_terminationDurationExceeded: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary terminationDurationExceeded
 * @constant
 */
export
const terminationDurationExceeded: number = PlayMsg_terminationDurationExceeded; /* SHORT_NAMED_BIT */

/**
 * @summary PlayMsg_terminationDTMFDigitDetected
 * @constant
 */
export
const PlayMsg_terminationDTMFDigitDetected: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary terminationDTMFDigitDetected
 * @constant
 */
export
const terminationDTMFDigitDetected: number = PlayMsg_terminationDTMFDigitDetected; /* SHORT_NAMED_BIT */

/**
 * @summary PlayMsg_terminationEndOfSpeechDetected
 * @constant
 */
export
const PlayMsg_terminationEndOfSpeechDetected: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary terminationEndOfSpeechDetected
 * @constant
 */
export
const terminationEndOfSpeechDetected: number = PlayMsg_terminationEndOfSpeechDetected; /* SHORT_NAMED_BIT */

/**
 * @summary PlayMsg_terminationSpeech
 * @constant
 */
export
const PlayMsg_terminationSpeech: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary terminationSpeech
 * @constant
 */
export
const terminationSpeech: number = PlayMsg_terminationSpeech; /* SHORT_NAMED_BIT */

/**
 * @summary PlayMsg_privateData
 * @constant
 */
export
const PlayMsg_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = PlayMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary PlayMsg_privateDataInAck
 * @constant
 */
export
const PlayMsg_privateDataInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = PlayMsg_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary PlayMsg_multipleMsgsSimultaneously
 * @constant
 */
export
const PlayMsg_multipleMsgsSimultaneously: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary multipleMsgsSimultaneously
 * @constant
 */
export
const multipleMsgsSimultaneously: number = PlayMsg_multipleMsgsSimultaneously; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PlayMsg: $.ASN1Decoder<PlayMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlayMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlayMsg (el: _Element): PlayMsg {
    if (!_cached_decoder_for_PlayMsg) { _cached_decoder_for_PlayMsg = $._decodeBitString; }
    return _cached_decoder_for_PlayMsg(el);
}

let _cached_encoder_for_PlayMsg: $.ASN1Encoder<PlayMsg> | null = null;

/**
 * @summary Encodes a(n) PlayMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlayMsg, encoded as an ASN.1 Element.
 */
export
function _encode_PlayMsg (value: PlayMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlayMsg) { _cached_encoder_for_PlayMsg = $._encodeBitString; }
    return _cached_encoder_for_PlayMsg(value, elGetter);
}


/* eslint-enable */
