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
 * @summary LoggingInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingInterval  ::=  ENUMERATED {
 *     d1dot28 (0),
 *     d2dot56 (1),
 *     d5dot12 (2),
 *     d10dot24 (3),
 *     d20dot48 (4),
 *     d30dot72 (5),
 *     d40dot96 (6),
 *     d61dot44 (7)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LoggingInterval {
    d1dot28 = 0,
    d2dot56 = 1,
    d5dot12 = 2,
    d10dot24 = 3,
    d20dot48 = 4,
    d30dot72 = 5,
    d40dot96 = 6,
    d61dot44 = 7,
}

/**
 * @summary LoggingInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingInterval  ::=  ENUMERATED {
 *     d1dot28 (0),
 *     d2dot56 (1),
 *     d5dot12 (2),
 *     d10dot24 (3),
 *     d20dot48 (4),
 *     d30dot72 (5),
 *     d40dot96 (6),
 *     d61dot44 (7)}
 * ```
 * 
 * @enum {number}
 */
export
type LoggingInterval = _enum_for_LoggingInterval;

/**
 * @summary LoggingInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingInterval  ::=  ENUMERATED {
 *     d1dot28 (0),
 *     d2dot56 (1),
 *     d5dot12 (2),
 *     d10dot24 (3),
 *     d20dot48 (4),
 *     d30dot72 (5),
 *     d40dot96 (6),
 *     d61dot44 (7)}
 * ```
 * 
 * @enum {number}
 */
export
const LoggingInterval = _enum_for_LoggingInterval;

/**
 * @summary LoggingInterval_d1dot28
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d1dot28: LoggingInterval = LoggingInterval.d1dot28; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1dot28
 * @constant
 * @type {number}
 */
export
const d1dot28: LoggingInterval = LoggingInterval.d1dot28; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d2dot56
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d2dot56: LoggingInterval = LoggingInterval.d2dot56; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2dot56
 * @constant
 * @type {number}
 */
export
const d2dot56: LoggingInterval = LoggingInterval.d2dot56; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d5dot12
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d5dot12: LoggingInterval = LoggingInterval.d5dot12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d5dot12
 * @constant
 * @type {number}
 */
export
const d5dot12: LoggingInterval = LoggingInterval.d5dot12; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d10dot24
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d10dot24: LoggingInterval = LoggingInterval.d10dot24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d10dot24
 * @constant
 * @type {number}
 */
export
const d10dot24: LoggingInterval = LoggingInterval.d10dot24; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d20dot48
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d20dot48: LoggingInterval = LoggingInterval.d20dot48; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d20dot48
 * @constant
 * @type {number}
 */
export
const d20dot48: LoggingInterval = LoggingInterval.d20dot48; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d30dot72
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d30dot72: LoggingInterval = LoggingInterval.d30dot72; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d30dot72
 * @constant
 * @type {number}
 */
export
const d30dot72: LoggingInterval = LoggingInterval.d30dot72; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d40dot96
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d40dot96: LoggingInterval = LoggingInterval.d40dot96; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d40dot96
 * @constant
 * @type {number}
 */
export
const d40dot96: LoggingInterval = LoggingInterval.d40dot96; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingInterval_d61dot44
 * @constant
 * @type {number}
 */
export
const LoggingInterval_d61dot44: LoggingInterval = LoggingInterval.d61dot44; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d61dot44
 * @constant
 * @type {number}
 */
export
const d61dot44: LoggingInterval = LoggingInterval.d61dot44; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LoggingInterval: $.ASN1Decoder<LoggingInterval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoggingInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LoggingInterval (el: _Element): LoggingInterval {
    if (!_cached_decoder_for_LoggingInterval) { _cached_decoder_for_LoggingInterval = $._decodeEnumerated; }
    return _cached_decoder_for_LoggingInterval(el);
}

let _cached_encoder_for_LoggingInterval: $.ASN1Encoder<LoggingInterval> | null = null;

/**
 * @summary Encodes a(n) LoggingInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoggingInterval, encoded as an ASN.1 Element.
 */
export
function _encode_LoggingInterval (value: LoggingInterval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LoggingInterval) { _cached_encoder_for_LoggingInterval = $._encodeEnumerated; }
    return _cached_encoder_for_LoggingInterval(value, elGetter);
}


/* eslint-enable */
