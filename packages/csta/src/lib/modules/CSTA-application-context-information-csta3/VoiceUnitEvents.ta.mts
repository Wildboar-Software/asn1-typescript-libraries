/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary VoiceUnitEvents
 * @description
 *
 * Voice-unit events. BIT STRING advertised in ACSE user-information listing
 * which CSTA services or events this association will use. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceUnitEvents  ::=  BIT STRING
 * {    bookmarkReached                        ( 7),
 *     completed                        ( 8),
 *     dtmfDetected                        ( 9),
 *     emptied                            (10),
 *     interruptionDetected                    (11),
 *     notRecognized                        (12),
 *     play                             ( 1),
 *     recognized                        (13),
 *     record                             ( 3),
 *     review                             ( 5),
 *     started                            (14),
 *     silenceTimeoutExpired                    (15),
 *     speechDetected                        (16),
 *     stop                             ( 0),
 *     suspendPlay                         ( 2),
 *     suspendRecord                         ( 4),
 *     voiceAttributesChange                     ( 6),
 *     voiceErrorOccured                    (17) }
 * ```
 */
export
type VoiceUnitEvents = BIT_STRING;

/**
 * @summary VoiceUnitEvents_bookmarkReached
 * @description
 * Advertises the `bookmarkReached` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_bookmarkReached: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary bookmarkReached
 * @description Alias of {@link VoiceUnitEvents_bookmarkReached}.
 * @constant
 */
export
const bookmarkReached: number = VoiceUnitEvents_bookmarkReached; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_completed
 * @description
 * Advertises the `completed` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_completed: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary completed
 * @description Alias of {@link VoiceUnitEvents_completed}.
 * @constant
 */
export
const completed: number = VoiceUnitEvents_completed; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_dtmfDetected
 * @description
 * Advertises the `dtmfDetected` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_dtmfDetected: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary dtmfDetected
 * @description Alias of {@link VoiceUnitEvents_dtmfDetected}.
 * @constant
 */
export
const dtmfDetected: number = VoiceUnitEvents_dtmfDetected; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_emptied
 * @description
 * Advertises the `emptied` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_emptied: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary emptied
 * @description Alias of {@link VoiceUnitEvents_emptied}.
 * @constant
 */
export
const emptied: number = VoiceUnitEvents_emptied; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_interruptionDetected
 * @description
 * Advertises the `interruptionDetected` event for this association. ECMA-285
 * §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_interruptionDetected: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary interruptionDetected
 * @description Alias of {@link VoiceUnitEvents_interruptionDetected}.
 * @constant
 */
export
const interruptionDetected: number = VoiceUnitEvents_interruptionDetected; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_notRecognized
 * @description
 * Advertises the `notRecognized` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_notRecognized: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary notRecognized
 * @description Alias of {@link VoiceUnitEvents_notRecognized}.
 * @constant
 */
export
const notRecognized: number = VoiceUnitEvents_notRecognized; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_play
 * @description Advertises the `play` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_play: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary play
 * @description Alias of {@link VoiceUnitEvents_play}.
 * @constant
 */
export
const play: number = VoiceUnitEvents_play; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_recognized
 * @description
 * Advertises the `recognized` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_recognized: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary recognized
 * @description Alias of {@link VoiceUnitEvents_recognized}.
 * @constant
 */
export
const recognized: number = VoiceUnitEvents_recognized; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_record
 * @description
 * Advertises the `record` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_record: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary record
 * @description Alias of {@link VoiceUnitEvents_record}.
 * @constant
 */
export
const record: number = VoiceUnitEvents_record; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_review
 * @description
 * Advertises the `review` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_review: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary review
 * @description Alias of {@link VoiceUnitEvents_review}.
 * @constant
 */
export
const review: number = VoiceUnitEvents_review; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_started
 * @description
 * Advertises the `started` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_started: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary started
 * @description Alias of {@link VoiceUnitEvents_started}.
 * @constant
 */
export
const started: number = VoiceUnitEvents_started; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_silenceTimeoutExpired
 * @description
 * Advertises the `silenceTimeoutExpired` event for this association. ECMA-285
 * §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_silenceTimeoutExpired: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary silenceTimeoutExpired
 * @description Alias of {@link VoiceUnitEvents_silenceTimeoutExpired}.
 * @constant
 */
export
const silenceTimeoutExpired: number = VoiceUnitEvents_silenceTimeoutExpired; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_speechDetected
 * @description
 * Advertises the `speechDetected` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_speechDetected: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary speechDetected
 * @description Alias of {@link VoiceUnitEvents_speechDetected}.
 * @constant
 */
export
const speechDetected: number = VoiceUnitEvents_speechDetected; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_stop
 * @description Advertises the `stop` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_stop: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary stop
 * @description Alias of {@link VoiceUnitEvents_stop}.
 * @constant
 */
export
const stop: number = VoiceUnitEvents_stop; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_suspendPlay
 * @description
 * Advertises the `suspendPlay` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_suspendPlay: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary suspendPlay
 * @description Alias of {@link VoiceUnitEvents_suspendPlay}.
 * @constant
 */
export
const suspendPlay: number = VoiceUnitEvents_suspendPlay; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_suspendRecord
 * @description
 * Advertises the `suspendRecord` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_suspendRecord: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary suspendRecord
 * @description Alias of {@link VoiceUnitEvents_suspendRecord}.
 * @constant
 */
export
const suspendRecord: number = VoiceUnitEvents_suspendRecord; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_voiceAttributesChange
 * @description
 * Advertises the `voiceAttributesChange` event for this association. ECMA-285
 * §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_voiceAttributesChange: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary voiceAttributesChange
 * @description Alias of {@link VoiceUnitEvents_voiceAttributesChange}.
 * @constant
 */
export
const voiceAttributesChange: number = VoiceUnitEvents_voiceAttributesChange; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_voiceErrorOccured
 * @description
 * Advertises the `voiceErrorOccured` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const VoiceUnitEvents_voiceErrorOccured: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary voiceErrorOccured
 * @description Alias of {@link VoiceUnitEvents_voiceErrorOccured}.
 * @constant
 */
export
const voiceErrorOccured: number = VoiceUnitEvents_voiceErrorOccured; /* SHORT_NAMED_BIT */

let _cached_decoder_for_VoiceUnitEvents: $.ASN1Decoder<VoiceUnitEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceUnitEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceUnitEvents (el: _Element): VoiceUnitEvents {
    if (!_cached_decoder_for_VoiceUnitEvents) { _cached_decoder_for_VoiceUnitEvents = $._decodeBitString; }
    return _cached_decoder_for_VoiceUnitEvents(el);
}

let _cached_encoder_for_VoiceUnitEvents: $.ASN1Encoder<VoiceUnitEvents> | null = null;

/**
 * @summary Encodes a(n) VoiceUnitEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceUnitEvents, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceUnitEvents (value: VoiceUnitEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceUnitEvents) { _cached_encoder_for_VoiceUnitEvents = $._encodeBitString; }
    return _cached_encoder_for_VoiceUnitEvents(value, elGetter);
}


/* eslint-enable */
