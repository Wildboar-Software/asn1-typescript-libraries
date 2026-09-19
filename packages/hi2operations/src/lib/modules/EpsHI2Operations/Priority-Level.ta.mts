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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Priority_Level {
    pre_emptive = 0,
    high_priority = 1,
    normal_priority = 2,
    listen_only = 3,
}

/**
 * @summary Priority_Level
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority-Level  ::=  ENUMERATED
 * {
 *  pre-emptive (0),
 *  high-priority (1),
 *  normal-priority (2),
 *  listen-only (3),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Priority_Level = _enum_for_Priority_Level | ENUMERATED;

/**
 * @summary Priority_Level_pre_emptive
 * @constant
 * @type {number}
 */
export
const Priority_Level_pre_emptive: Priority_Level = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_emptive
 * @constant
 * @type {number}
 */
export
const pre_emptive: Priority_Level = Priority_Level_pre_emptive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_Level_high_priority
 * @constant
 * @type {number}
 */
export
const Priority_Level_high_priority: Priority_Level = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high_priority
 * @constant
 * @type {number}
 */
export
const high_priority: Priority_Level = Priority_Level_high_priority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_Level_normal_priority
 * @constant
 * @type {number}
 */
export
const Priority_Level_normal_priority: Priority_Level = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal_priority
 * @constant
 * @type {number}
 */
export
const normal_priority: Priority_Level = Priority_Level_normal_priority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_Level_listen_only
 * @constant
 * @type {number}
 */
export
const Priority_Level_listen_only: Priority_Level = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listen_only
 * @constant
 * @type {number}
 */
export
const listen_only: Priority_Level = Priority_Level_listen_only; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Priority_Level: $.ASN1Decoder<Priority_Level> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Priority_Level
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Priority_Level (el: _Element): Priority_Level {
    if (!_cached_decoder_for_Priority_Level) { _cached_decoder_for_Priority_Level = $._decodeEnumerated; }
    return _cached_decoder_for_Priority_Level(el);
}

let _cached_encoder_for_Priority_Level: $.ASN1Encoder<Priority_Level> | null = null;

/**
 * @summary Encodes a(n) Priority_Level into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Priority_Level, encoded as an ASN.1 Element.
 */
export
function _encode_Priority_Level (value: Priority_Level, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Priority_Level) { _cached_encoder_for_Priority_Level = $._encodeEnumerated; }
    return _cached_encoder_for_Priority_Level(value, elGetter);
}


/* eslint-enable */
