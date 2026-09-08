/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary CurrentState
 * @description
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
 * @constant
 * @type {number}
 */
export
const CurrentState_dtmfDetected: CurrentState = CurrentState.dtmfDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dtmfDetected
 * @constant
 * @type {number}
 */
export
const dtmfDetected: CurrentState = CurrentState.dtmfDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_formed
 * @constant
 * @type {number}
 */
export
const CurrentState_formed: CurrentState = CurrentState.formed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary formed
 * @constant
 * @type {number}
 */
export
const formed: CurrentState = CurrentState.formed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_play
 * @constant
 * @type {number}
 */
export
const CurrentState_play: CurrentState = CurrentState.play; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary play
 * @constant
 * @type {number}
 */
export
const play: CurrentState = CurrentState.play; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_playing
 * @constant
 * @type {number}
 */
export
const CurrentState_playing: CurrentState = CurrentState.playing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary playing
 * @constant
 * @type {number}
 */
export
const playing: CurrentState = CurrentState.playing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_ready
 * @constant
 * @type {number}
 */
export
const CurrentState_ready: CurrentState = CurrentState.ready; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ready
 * @constant
 * @type {number}
 */
export
const ready: CurrentState = CurrentState.ready; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_record
 * @constant
 * @type {number}
 */
export
const CurrentState_record: CurrentState = CurrentState.record; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary record
 * @constant
 * @type {number}
 */
export
const record: CurrentState = CurrentState.record; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_review
 * @constant
 * @type {number}
 */
export
const CurrentState_review: CurrentState = CurrentState.review; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary review
 * @constant
 * @type {number}
 */
export
const review: CurrentState = CurrentState.review; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_speechDetected
 * @constant
 * @type {number}
 */
export
const CurrentState_speechDetected: CurrentState = CurrentState.speechDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechDetected
 * @constant
 * @type {number}
 */
export
const speechDetected: CurrentState = CurrentState.speechDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_started
 * @constant
 * @type {number}
 */
export
const CurrentState_started: CurrentState = CurrentState.started; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary started
 * @constant
 * @type {number}
 */
export
const started: CurrentState = CurrentState.started; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_stop
 * @constant
 * @type {number}
 */
export
const CurrentState_stop: CurrentState = CurrentState.stop; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stop
 * @constant
 * @type {number}
 */
export
const stop: CurrentState = CurrentState.stop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_suspendPlay
 * @constant
 * @type {number}
 */
export
const CurrentState_suspendPlay: CurrentState = CurrentState.suspendPlay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspendPlay
 * @constant
 * @type {number}
 */
export
const suspendPlay: CurrentState = CurrentState.suspendPlay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CurrentState_suspendRecord
 * @constant
 * @type {number}
 */
export
const CurrentState_suspendRecord: CurrentState = CurrentState.suspendRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspendRecord
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
