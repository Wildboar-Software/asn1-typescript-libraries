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



/**
 * @summary LoggingDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingDuration  ::=  ENUMERATED {
 *     d600sec (0),
 *     d1200sec (1),
 *     d2400sec (2),
 *     d3600sec (3),
 *     d5400sec (4),
 *     d7200sec (5)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LoggingDuration {
    d600sec = 0,
    d1200sec = 1,
    d2400sec = 2,
    d3600sec = 3,
    d5400sec = 4,
    d7200sec = 5,
}

/**
 * @summary LoggingDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingDuration  ::=  ENUMERATED {
 *     d600sec (0),
 *     d1200sec (1),
 *     d2400sec (2),
 *     d3600sec (3),
 *     d5400sec (4),
 *     d7200sec (5)}
 * ```
 * 
 * @enum {number}
 */
export
type LoggingDuration = _enum_for_LoggingDuration;

/**
 * @summary LoggingDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingDuration  ::=  ENUMERATED {
 *     d600sec (0),
 *     d1200sec (1),
 *     d2400sec (2),
 *     d3600sec (3),
 *     d5400sec (4),
 *     d7200sec (5)}
 * ```
 * 
 * @enum {number}
 */
export
const LoggingDuration = _enum_for_LoggingDuration;

/**
 * @summary LoggingDuration_d600sec
 * @constant
 * @type {number}
 */
export
const LoggingDuration_d600sec: LoggingDuration = LoggingDuration.d600sec; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d600sec
 * @constant
 * @type {number}
 */
export
const d600sec: LoggingDuration = LoggingDuration.d600sec; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingDuration_d1200sec
 * @constant
 * @type {number}
 */
export
const LoggingDuration_d1200sec: LoggingDuration = LoggingDuration.d1200sec; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1200sec
 * @constant
 * @type {number}
 */
export
const d1200sec: LoggingDuration = LoggingDuration.d1200sec; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingDuration_d2400sec
 * @constant
 * @type {number}
 */
export
const LoggingDuration_d2400sec: LoggingDuration = LoggingDuration.d2400sec; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2400sec
 * @constant
 * @type {number}
 */
export
const d2400sec: LoggingDuration = LoggingDuration.d2400sec; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingDuration_d3600sec
 * @constant
 * @type {number}
 */
export
const LoggingDuration_d3600sec: LoggingDuration = LoggingDuration.d3600sec; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d3600sec
 * @constant
 * @type {number}
 */
export
const d3600sec: LoggingDuration = LoggingDuration.d3600sec; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingDuration_d5400sec
 * @constant
 * @type {number}
 */
export
const LoggingDuration_d5400sec: LoggingDuration = LoggingDuration.d5400sec; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d5400sec
 * @constant
 * @type {number}
 */
export
const d5400sec: LoggingDuration = LoggingDuration.d5400sec; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LoggingDuration_d7200sec
 * @constant
 * @type {number}
 */
export
const LoggingDuration_d7200sec: LoggingDuration = LoggingDuration.d7200sec; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d7200sec
 * @constant
 * @type {number}
 */
export
const d7200sec: LoggingDuration = LoggingDuration.d7200sec; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LoggingDuration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LoggingDuration = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LoggingDuration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoggingDuration, encoded as an ASN.1 Element.
 */
export const _encode_LoggingDuration = $._encodeEnumerated;


/* eslint-enable */
