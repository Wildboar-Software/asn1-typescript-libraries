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
 * @summary CallControlEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallControlEvents  ::=  BIT STRING
 * {    bridged                         (15),
 *         callCleared                        ( 0),
 *         conferenced                        ( 1),
 *         connectionCleared                    ( 2),
 *         delivered                        ( 3),
 *         digitsDialed                        (14),
 *         diverted                        ( 4),
 *         established                        ( 5),
 *         failed                            ( 6),
 *         held                            ( 7),
 *         networkCapabilitiesChanged                (16),
 *         networkReached                         ( 8),
 *         offered                         (17),
 *         originated                        ( 9),
 *         queued                            (10),
 *         retrieved                        (11),
 *         serviceInitiated                    (12),
 *         transferred                        (13) }
 * ```
 */
export
type CallControlEvents = BIT_STRING;

/**
 * @summary CallControlEvents_bridged
 * @constant
 */
export
const CallControlEvents_bridged: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary bridged
 * @constant
 */
export
const bridged: number = CallControlEvents_bridged; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_callCleared
 * @constant
 */
export
const CallControlEvents_callCleared: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callCleared
 * @constant
 */
export
const callCleared: number = CallControlEvents_callCleared; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_conferenced
 * @constant
 */
export
const CallControlEvents_conferenced: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary conferenced
 * @constant
 */
export
const conferenced: number = CallControlEvents_conferenced; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_connectionCleared
 * @constant
 */
export
const CallControlEvents_connectionCleared: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary connectionCleared
 * @constant
 */
export
const connectionCleared: number = CallControlEvents_connectionCleared; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_delivered
 * @constant
 */
export
const CallControlEvents_delivered: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary delivered
 * @constant
 */
export
const delivered: number = CallControlEvents_delivered; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_digitsDialed
 * @constant
 */
export
const CallControlEvents_digitsDialed: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary digitsDialed
 * @constant
 */
export
const digitsDialed: number = CallControlEvents_digitsDialed; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_diverted
 * @constant
 */
export
const CallControlEvents_diverted: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary diverted
 * @constant
 */
export
const diverted: number = CallControlEvents_diverted; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_established
 * @constant
 */
export
const CallControlEvents_established: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary established
 * @constant
 */
export
const established: number = CallControlEvents_established; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_failed
 * @constant
 */
export
const CallControlEvents_failed: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @constant
 */
export
const failed: number = CallControlEvents_failed; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_held
 * @constant
 */
export
const CallControlEvents_held: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary held
 * @constant
 */
export
const held: number = CallControlEvents_held; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_networkCapabilitiesChanged
 * @constant
 */
export
const CallControlEvents_networkCapabilitiesChanged: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary networkCapabilitiesChanged
 * @constant
 */
export
const networkCapabilitiesChanged: number = CallControlEvents_networkCapabilitiesChanged; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_networkReached
 * @constant
 */
export
const CallControlEvents_networkReached: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary networkReached
 * @constant
 */
export
const networkReached: number = CallControlEvents_networkReached; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_offered
 * @constant
 */
export
const CallControlEvents_offered: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary offered
 * @constant
 */
export
const offered: number = CallControlEvents_offered; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_originated
 * @constant
 */
export
const CallControlEvents_originated: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary originated
 * @constant
 */
export
const originated: number = CallControlEvents_originated; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_queued
 * @constant
 */
export
const CallControlEvents_queued: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = CallControlEvents_queued; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_retrieved
 * @constant
 */
export
const CallControlEvents_retrieved: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary retrieved
 * @constant
 */
export
const retrieved: number = CallControlEvents_retrieved; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_serviceInitiated
 * @constant
 */
export
const CallControlEvents_serviceInitiated: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary serviceInitiated
 * @constant
 */
export
const serviceInitiated: number = CallControlEvents_serviceInitiated; /* SHORT_NAMED_BIT */

/**
 * @summary CallControlEvents_transferred
 * @constant
 */
export
const CallControlEvents_transferred: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary transferred
 * @constant
 */
export
const transferred: number = CallControlEvents_transferred; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallControlEvents: $.ASN1Decoder<CallControlEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallControlEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallControlEvents (el: _Element): CallControlEvents {
    if (!_cached_decoder_for_CallControlEvents) { _cached_decoder_for_CallControlEvents = $._decodeBitString; }
    return _cached_decoder_for_CallControlEvents(el);
}

let _cached_encoder_for_CallControlEvents: $.ASN1Encoder<CallControlEvents> | null = null;

/**
 * @summary Encodes a(n) CallControlEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallControlEvents, encoded as an ASN.1 Element.
 */
export
function _encode_CallControlEvents (value: CallControlEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallControlEvents) { _cached_encoder_for_CallControlEvents = $._encodeBitString; }
    return _cached_encoder_for_CallControlEvents(value, elGetter);
}


/* eslint-enable */
