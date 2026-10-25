/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AttributeToQuery
 * @description
 *
 * Voice attribute selector for Query Voice Attribute (ECMA-269 §26.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeToQuery  ::=  ENUMERATED
 * {    encodingAlgorithm        ( 0),
 *     samplingRate            ( 1),
 *     duration            ( 2),
 *     fileName            ( 3),
 *     currentPosition            ( 4),
 *     currentSpeed            ( 5),
 *     currentVolume            ( 6),
 *     currentLevel            ( 7),
 *     currentState            ( 8),
 *     grammars            ( 9),
 *     language            (10),
 *     mode                (11),
 *     retainAudio            (12),
 *     silenceTimeout            (13),
 *     maxTimeout            (14),
 *     babbleTimeout            (15),
 *     endSilence            (16),
 *     rejectionThreshold        (17),
 *     autoInterruptible        (18),
 *     innerXml            (19),
 *     interDigitTimeout        (20),
 *     preflush            (21) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AttributeToQuery {
    encodingAlgorithm = 0,
    samplingRate = 1,
    duration = 2,
    fileName = 3,
    currentPosition = 4,
    currentSpeed = 5,
    currentVolume = 6,
    currentLevel = 7,
    currentState = 8,
    grammars = 9,
    language = 10,
    mode = 11,
    retainAudio = 12,
    silenceTimeout = 13,
    maxTimeout = 14,
    babbleTimeout = 15,
    endSilence = 16,
    rejectionThreshold = 17,
    autoInterruptible = 18,
    innerXml = 19,
    interDigitTimeout = 20,
    preflush = 21,
}

/**
 * @summary AttributeToQuery
 * @description
 *
 * Voice attribute selector for Query Voice Attribute (ECMA-269 §26.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeToQuery  ::=  ENUMERATED
 * {    encodingAlgorithm        ( 0),
 *     samplingRate            ( 1),
 *     duration            ( 2),
 *     fileName            ( 3),
 *     currentPosition            ( 4),
 *     currentSpeed            ( 5),
 *     currentVolume            ( 6),
 *     currentLevel            ( 7),
 *     currentState            ( 8),
 *     grammars            ( 9),
 *     language            (10),
 *     mode                (11),
 *     retainAudio            (12),
 *     silenceTimeout            (13),
 *     maxTimeout            (14),
 *     babbleTimeout            (15),
 *     endSilence            (16),
 *     rejectionThreshold        (17),
 *     autoInterruptible        (18),
 *     innerXml            (19),
 *     interDigitTimeout        (20),
 *     preflush            (21) }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeToQuery = _enum_for_AttributeToQuery;

/**
 * @summary AttributeToQuery
 * @description
 *
 * Voice attribute selector for Query Voice Attribute (ECMA-269 §26.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeToQuery  ::=  ENUMERATED
 * {    encodingAlgorithm        ( 0),
 *     samplingRate            ( 1),
 *     duration            ( 2),
 *     fileName            ( 3),
 *     currentPosition            ( 4),
 *     currentSpeed            ( 5),
 *     currentVolume            ( 6),
 *     currentLevel            ( 7),
 *     currentState            ( 8),
 *     grammars            ( 9),
 *     language            (10),
 *     mode                (11),
 *     retainAudio            (12),
 *     silenceTimeout            (13),
 *     maxTimeout            (14),
 *     babbleTimeout            (15),
 *     endSilence            (16),
 *     rejectionThreshold        (17),
 *     autoInterruptible        (18),
 *     innerXml            (19),
 *     interDigitTimeout        (20),
 *     preflush            (21) }
 * ```
 * 
 * @enum {number}
 */
export
const AttributeToQuery = _enum_for_AttributeToQuery;

/**
 * @summary AttributeToQuery_encodingAlgorithm
 * @description
 *
 * Encoding algorithm of the message (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_encodingAlgorithm = AttributeToQuery.encodingAlgorithm satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary encodingAlgorithm
 * @description
 *
 * Encoding algorithm of the message (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const encodingAlgorithm = AttributeToQuery.encodingAlgorithm satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_samplingRate
 * @description
 *
 * Sampling rate of the message (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_samplingRate = AttributeToQuery.samplingRate satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary samplingRate
 * @description
 *
 * Sampling rate of the message (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const samplingRate = AttributeToQuery.samplingRate satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_duration
 * @description
 *
 * Duration in milliseconds (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_duration = AttributeToQuery.duration satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duration
 * @description
 *
 * Duration in milliseconds (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const duration = AttributeToQuery.duration satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_fileName
 * @description
 *
 * Implementation-specific filename (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_fileName = AttributeToQuery.fileName satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fileName
 * @description
 *
 * Implementation-specific filename (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const fileName = AttributeToQuery.fileName satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_currentPosition
 * @description
 *
 * Position in milliseconds from the start (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_currentPosition = AttributeToQuery.currentPosition satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentPosition
 * @description
 *
 * Position in milliseconds from the start (Voice Unit) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const currentPosition = AttributeToQuery.currentPosition satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_currentSpeed
 * @description
 *
 * Percent of normal speed; 100 is normal, slowest reportable is 1% (ECMA-269
 * §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_currentSpeed = AttributeToQuery.currentSpeed satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentSpeed
 * @description
 *
 * Percent of normal speed; 100 is normal, slowest reportable is 1% (ECMA-269
 * §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const currentSpeed = AttributeToQuery.currentSpeed satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_currentVolume
 * @description
 *
 * Absolute play volume 0..100 (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_currentVolume = AttributeToQuery.currentVolume satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentVolume
 * @description
 *
 * Absolute play volume 0..100 (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const currentVolume = AttributeToQuery.currentVolume satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_currentLevel
 * @description
 *
 * Recording gain 0..100 as queried currentGain (ECMA-269 §26.1.7.2.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_currentLevel = AttributeToQuery.currentLevel satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentLevel
 * @description
 *
 * Recording gain 0..100 as queried currentGain (ECMA-269 §26.1.7.2.1).
 *
 * @constant
 * @type {number}
 */
export
const currentLevel = AttributeToQuery.currentLevel satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_currentState
 * @description
 *
 * Voice resource state (ECMA-269 §26.1.7.2.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_currentState = AttributeToQuery.currentState satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentState
 * @description
 *
 * Voice resource state (ECMA-269 §26.1.7.2.1).
 *
 * @constant
 * @type {number}
 */
export
const currentState = AttributeToQuery.currentState satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_grammars
 * @description
 *
 * Grammars (URI list) for Listener, DTMF, or Prompt Queue (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_grammars = AttributeToQuery.grammars satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary grammars
 * @description
 *
 * Grammars (URI list) for Listener, DTMF, or Prompt Queue (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const grammars = AttributeToQuery.grammars satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_language
 * @description
 *
 * xml:lang language(s) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_language = AttributeToQuery.language satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary language
 * @description
 *
 * xml:lang language(s) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const language = AttributeToQuery.language satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_mode
 * @description
 *
 * Listener mode: automatic, single, or multiple (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_mode = AttributeToQuery.mode satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mode
 * @description
 *
 * Listener mode: automatic, single, or multiple (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const mode = AttributeToQuery.mode satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_retainAudio
 * @description
 *
 * Whether Listener audio is recorded (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_retainAudio = AttributeToQuery.retainAudio satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retainAudio
 * @description
 *
 * Whether Listener audio is recorded (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const retainAudio = AttributeToQuery.retainAudio satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_silenceTimeout
 * @description
 *
 * Silence timeout in milliseconds (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_silenceTimeout = AttributeToQuery.silenceTimeout satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silenceTimeout
 * @description
 *
 * Silence timeout in milliseconds (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const silenceTimeout = AttributeToQuery.silenceTimeout satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_maxTimeout
 * @description
 *
 * Max timeout in milliseconds (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_maxTimeout = AttributeToQuery.maxTimeout satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxTimeout
 * @description
 *
 * Max timeout in milliseconds (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const maxTimeout = AttributeToQuery.maxTimeout satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_babbleTimeout
 * @description
 *
 * Babble timeout in milliseconds (Listener) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_babbleTimeout = AttributeToQuery.babbleTimeout satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary babbleTimeout
 * @description
 *
 * Babble timeout in milliseconds (Listener) (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const babbleTimeout = AttributeToQuery.babbleTimeout satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_endSilence
 * @description
 *
 * End-of-utterance / end-of-input silence in milliseconds (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_endSilence = AttributeToQuery.endSilence satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endSilence
 * @description
 *
 * End-of-utterance / end-of-input silence in milliseconds (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const endSilence = AttributeToQuery.endSilence satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_rejectionThreshold
 * @description
 *
 * Below this, Listener raises Not Recognized instead of Recognized (ECMA-269
 * §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_rejectionThreshold = AttributeToQuery.rejectionThreshold satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionThreshold
 * @description
 *
 * Below this, Listener raises Not Recognized instead of Recognized (ECMA-269
 * §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const rejectionThreshold = AttributeToQuery.rejectionThreshold satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_autoInterruptible
 * @description
 *
 * Prompt stops on Listener or DTMF activity (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_autoInterruptible = AttributeToQuery.autoInterruptible satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoInterruptible
 * @description
 *
 * Prompt stops on Listener or DTMF activity (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const autoInterruptible = AttributeToQuery.autoInterruptible satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_innerXml
 * @description
 *
 * SSML document the Prompt is rendering (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_innerXml = AttributeToQuery.innerXml satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary innerXml
 * @description
 *
 * SSML document the Prompt is rendering (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const innerXml = AttributeToQuery.innerXml satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_interDigitTimeout
 * @description
 *
 * DTMF inter-digit timeout in milliseconds (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_interDigitTimeout = AttributeToQuery.interDigitTimeout satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interDigitTimeout
 * @description
 *
 * DTMF inter-digit timeout in milliseconds (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const interDigitTimeout = AttributeToQuery.interDigitTimeout satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToQuery_preflush
 * @description
 *
 * DTMF clears its buffer before interaction (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const AttributeToQuery_preflush = AttributeToQuery.preflush satisfies AttributeToQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preflush
 * @description
 *
 * DTMF clears its buffer before interaction (ECMA-269 §26.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const preflush = AttributeToQuery.preflush satisfies AttributeToQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AttributeToQuery: $.ASN1Decoder<AttributeToQuery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeToQuery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeToQuery (el: _Element): AttributeToQuery {
    if (!_cached_decoder_for_AttributeToQuery) { _cached_decoder_for_AttributeToQuery = $._decodeEnumerated; }
    return _cached_decoder_for_AttributeToQuery(el);
}

let _cached_encoder_for_AttributeToQuery: $.ASN1Encoder<AttributeToQuery> | null = null;

/**
 * @summary Encodes a(n) AttributeToQuery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeToQuery, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeToQuery (value: AttributeToQuery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeToQuery) { _cached_encoder_for_AttributeToQuery = $._encodeEnumerated; }
    return _cached_encoder_for_AttributeToQuery(value, elGetter);
}


/* eslint-enable */
