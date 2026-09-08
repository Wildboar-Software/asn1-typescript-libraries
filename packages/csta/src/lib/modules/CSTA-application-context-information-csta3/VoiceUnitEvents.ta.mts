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
 * @summary VoiceUnitEvents
 * @description
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
 * @constant
 */
export
const VoiceUnitEvents_bookmarkReached: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary bookmarkReached
 * @constant
 */
export
const bookmarkReached: number = VoiceUnitEvents_bookmarkReached; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_completed
 * @constant
 */
export
const VoiceUnitEvents_completed: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary completed
 * @constant
 */
export
const completed: number = VoiceUnitEvents_completed; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_dtmfDetected
 * @constant
 */
export
const VoiceUnitEvents_dtmfDetected: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary dtmfDetected
 * @constant
 */
export
const dtmfDetected: number = VoiceUnitEvents_dtmfDetected; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_emptied
 * @constant
 */
export
const VoiceUnitEvents_emptied: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary emptied
 * @constant
 */
export
const emptied: number = VoiceUnitEvents_emptied; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_interruptionDetected
 * @constant
 */
export
const VoiceUnitEvents_interruptionDetected: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary interruptionDetected
 * @constant
 */
export
const interruptionDetected: number = VoiceUnitEvents_interruptionDetected; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_notRecognized
 * @constant
 */
export
const VoiceUnitEvents_notRecognized: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary notRecognized
 * @constant
 */
export
const notRecognized: number = VoiceUnitEvents_notRecognized; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_play
 * @constant
 */
export
const VoiceUnitEvents_play: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary play
 * @constant
 */
export
const play: number = VoiceUnitEvents_play; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_recognized
 * @constant
 */
export
const VoiceUnitEvents_recognized: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary recognized
 * @constant
 */
export
const recognized: number = VoiceUnitEvents_recognized; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_record
 * @constant
 */
export
const VoiceUnitEvents_record: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary record
 * @constant
 */
export
const record: number = VoiceUnitEvents_record; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_review
 * @constant
 */
export
const VoiceUnitEvents_review: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary review
 * @constant
 */
export
const review: number = VoiceUnitEvents_review; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_started
 * @constant
 */
export
const VoiceUnitEvents_started: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary started
 * @constant
 */
export
const started: number = VoiceUnitEvents_started; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_silenceTimeoutExpired
 * @constant
 */
export
const VoiceUnitEvents_silenceTimeoutExpired: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary silenceTimeoutExpired
 * @constant
 */
export
const silenceTimeoutExpired: number = VoiceUnitEvents_silenceTimeoutExpired; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_speechDetected
 * @constant
 */
export
const VoiceUnitEvents_speechDetected: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary speechDetected
 * @constant
 */
export
const speechDetected: number = VoiceUnitEvents_speechDetected; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_stop
 * @constant
 */
export
const VoiceUnitEvents_stop: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary stop
 * @constant
 */
export
const stop: number = VoiceUnitEvents_stop; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_suspendPlay
 * @constant
 */
export
const VoiceUnitEvents_suspendPlay: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary suspendPlay
 * @constant
 */
export
const suspendPlay: number = VoiceUnitEvents_suspendPlay; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_suspendRecord
 * @constant
 */
export
const VoiceUnitEvents_suspendRecord: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary suspendRecord
 * @constant
 */
export
const suspendRecord: number = VoiceUnitEvents_suspendRecord; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_voiceAttributesChange
 * @constant
 */
export
const VoiceUnitEvents_voiceAttributesChange: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary voiceAttributesChange
 * @constant
 */
export
const voiceAttributesChange: number = VoiceUnitEvents_voiceAttributesChange; /* SHORT_NAMED_BIT */

/**
 * @summary VoiceUnitEvents_voiceErrorOccured
 * @constant
 */
export
const VoiceUnitEvents_voiceErrorOccured: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary voiceErrorOccured
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
