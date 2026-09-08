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
 * @summary TimeStampMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStampMode  ::=  BIT STRING
 * {     allEvents                 ( 0),
 *     allAcks                 ( 1),
 *     allServReqs                 ( 2) }
 * ```
 */
export
type TimeStampMode = BIT_STRING;

/**
 * @summary TimeStampMode_allEvents
 * @constant
 */
export
const TimeStampMode_allEvents: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary allEvents
 * @constant
 */
export
const allEvents: number = TimeStampMode_allEvents; /* SHORT_NAMED_BIT */

/**
 * @summary TimeStampMode_allAcks
 * @constant
 */
export
const TimeStampMode_allAcks: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary allAcks
 * @constant
 */
export
const allAcks: number = TimeStampMode_allAcks; /* SHORT_NAMED_BIT */

/**
 * @summary TimeStampMode_allServReqs
 * @constant
 */
export
const TimeStampMode_allServReqs: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary allServReqs
 * @constant
 */
export
const allServReqs: number = TimeStampMode_allServReqs; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TimeStampMode: $.ASN1Decoder<TimeStampMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeStampMode (el: _Element): TimeStampMode {
    if (!_cached_decoder_for_TimeStampMode) { _cached_decoder_for_TimeStampMode = $._decodeBitString; }
    return _cached_decoder_for_TimeStampMode(el);
}

let _cached_encoder_for_TimeStampMode: $.ASN1Encoder<TimeStampMode> | null = null;

/**
 * @summary Encodes a(n) TimeStampMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampMode, encoded as an ASN.1 Element.
 */
export
function _encode_TimeStampMode (value: TimeStampMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeStampMode) { _cached_encoder_for_TimeStampMode = $._encodeBitString; }
    return _cached_encoder_for_TimeStampMode(value, elGetter);
}


/* eslint-enable */
