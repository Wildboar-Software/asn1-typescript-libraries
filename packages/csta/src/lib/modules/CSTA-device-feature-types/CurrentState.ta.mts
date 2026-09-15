/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CurrentState
 * @description
 *
 * Current voice-unit state (AttributeInfo). ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentState  ::=  ENUMERATED
 * {    dtmfDetected            ( 6),
 *     formed                ( 7),
 *     play                 ( 1),
 *     playing                ( 8),
 *     ready                ( 9),
 *     record                 ( 2),
 *     review                 ( 5),
 *     speechDetected            (10),
 *     started                (11),
 *     stop                 ( 0),
 *     suspendPlay             ( 3),
 *     suspendRecord             ( 4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CurrentState {
    dtmfDetected = 6,
    formed = 7,
    play = 1,
    playing = 8,
    ready = 9,
    record = 2,
    review = 5,
    speechDetected = 10,
    started = 11,
    stop = 0,
    suspendPlay = 3,
    suspendRecord = 4,
}

/**
 * @summary CurrentState
 * @description
 *
 * Current voice-unit state (AttributeInfo). ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentState  ::=  ENUMERATED
 * {    dtmfDetected            ( 6),
 *     formed                ( 7),
 *     play                 ( 1),
 *     playing                ( 8),
 *     ready                ( 9),
 *     record                 ( 2),
 *     review                 ( 5),
 *     speechDetected            (10),
 *     started                (11),
 *     stop                 ( 0),
 *     suspendPlay             ( 3),
 *     suspendRecord             ( 4) }
 * ```
 * 
 * @enum {number}
 */
export
type CurrentState = _enum_for_CurrentState;

/**
 * @summary CurrentState
 * @description
 *
 * Current voice-unit state (AttributeInfo). ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentState  ::=  ENUMERATED
 * {    dtmfDetected            ( 6),
 *     formed                ( 7),
 *     play                 ( 1),
 *     playing                ( 8),
 *     ready                ( 9),
 *     record                 ( 2),
 *     review                 ( 5),
 *     speechDetected            (10),
 *     started                (11),
 *     stop                 ( 0),
 *     suspendPlay             ( 3),
 *     suspendRecord             ( 4) }
 * ```
 * 
 * @enum {number}
 */
export
const CurrentState = _enum_for_CurrentState;

/**
 * @summary CurrentState_dtmfDetected
 * @description DTMF detected. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_dtmfDetected: CurrentState = CurrentState.dtmfDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dtmfDetected
 * @description Alias of {@link CurrentState_dtmfDetected}.
 * @constant
 * @type {number}
 */
export
const dtmfDetected: CurrentState = CurrentState.dtmfDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_formed
 * @description Formed. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_formed: CurrentState = CurrentState.formed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary formed
 * @description Alias of {@link CurrentState_formed}.
 * @constant
 * @type {number}
 */
export
const formed: CurrentState = CurrentState.formed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_play
 * @description Play. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_play: CurrentState = CurrentState.play; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary play
 * @description Alias of {@link CurrentState_play}.
 * @constant
 * @type {number}
 */
export
const play: CurrentState = CurrentState.play; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_playing
 * @description Playing. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_playing: CurrentState = CurrentState.playing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary playing
 * @description Alias of {@link CurrentState_playing}.
 * @constant
 * @type {number}
 */
export
const playing: CurrentState = CurrentState.playing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_ready
 * @description Ready. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_ready: CurrentState = CurrentState.ready; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ready
 * @description Alias of {@link CurrentState_ready}.
 * @constant
 * @type {number}
 */
export
const ready: CurrentState = CurrentState.ready; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_record
 * @description Record. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_record: CurrentState = CurrentState.record; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary record
 * @description Alias of {@link CurrentState_record}.
 * @constant
 * @type {number}
 */
export
const record: CurrentState = CurrentState.record; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_review
 * @description Review. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_review: CurrentState = CurrentState.review; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary review
 * @description Alias of {@link CurrentState_review}.
 * @constant
 * @type {number}
 */
export
const review: CurrentState = CurrentState.review; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_speechDetected
 * @description Speech detected. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_speechDetected: CurrentState = CurrentState.speechDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechDetected
 * @description Alias of {@link CurrentState_speechDetected}.
 * @constant
 * @type {number}
 */
export
const speechDetected: CurrentState = CurrentState.speechDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_started
 * @description Started. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_started: CurrentState = CurrentState.started; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary started
 * @description Alias of {@link CurrentState_started}.
 * @constant
 * @type {number}
 */
export
const started: CurrentState = CurrentState.started; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_stop
 * @description Stop. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_stop: CurrentState = CurrentState.stop; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stop
 * @description Alias of {@link CurrentState_stop}.
 * @constant
 * @type {number}
 */
export
const stop: CurrentState = CurrentState.stop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_suspendPlay
 * @description Suspend play. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_suspendPlay: CurrentState = CurrentState.suspendPlay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspendPlay
 * @description Alias of {@link CurrentState_suspendPlay}.
 * @constant
 * @type {number}
 */
export
const suspendPlay: CurrentState = CurrentState.suspendPlay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_suspendRecord
 * @description Suspend record. ECMA-285 §9.6.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CurrentState_suspendRecord: CurrentState = CurrentState.suspendRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspendRecord
 * @description Alias of {@link CurrentState_suspendRecord}.
 * @constant
 * @type {number}
 */
export
const suspendRecord: CurrentState = CurrentState.suspendRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CurrentState: $.ASN1Decoder<CurrentState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CurrentState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CurrentState (el: _Element): CurrentState {
    if (!_cached_decoder_for_CurrentState) { _cached_decoder_for_CurrentState = $._decodeEnumerated; }
    return _cached_decoder_for_CurrentState(el);
}

let _cached_encoder_for_CurrentState: $.ASN1Encoder<CurrentState> | null = null;

/**
 * @summary Encodes a(n) CurrentState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrentState, encoded as an ASN.1 Element.
 */
export
function _encode_CurrentState (value: CurrentState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CurrentState) { _cached_encoder_for_CurrentState = $._encodeEnumerated; }
    return _cached_encoder_for_CurrentState(value, elGetter);
}


/* eslint-enable */
