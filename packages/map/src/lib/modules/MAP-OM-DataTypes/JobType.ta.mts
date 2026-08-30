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
 * @summary JobType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JobType  ::=  ENUMERATED {
 *     immediate-MDT-only (0),
 *     logged-MDT-only (1),
 *     trace-only (2),
 *     immediate-MDT-and-trace (3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_JobType {
    immediate_MDT_only = 0,
    logged_MDT_only = 1,
    trace_only = 2,
    immediate_MDT_and_trace = 3,
}

/**
 * @summary JobType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JobType  ::=  ENUMERATED {
 *     immediate-MDT-only (0),
 *     logged-MDT-only (1),
 *     trace-only (2),
 *     immediate-MDT-and-trace (3)}
 * ```
 * 
 * @enum {number}
 */
export
type JobType = _enum_for_JobType;

/**
 * @summary JobType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JobType  ::=  ENUMERATED {
 *     immediate-MDT-only (0),
 *     logged-MDT-only (1),
 *     trace-only (2),
 *     immediate-MDT-and-trace (3)}
 * ```
 * 
 * @enum {number}
 */
export
const JobType = _enum_for_JobType;

/**
 * @summary JobType_immediate_MDT_only
 * @constant
 * @type {number}
 */
export
const JobType_immediate_MDT_only: JobType = JobType.immediate_MDT_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediate_MDT_only
 * @constant
 * @type {number}
 */
export
const immediate_MDT_only: JobType = JobType.immediate_MDT_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary JobType_logged_MDT_only
 * @constant
 * @type {number}
 */
export
const JobType_logged_MDT_only: JobType = JobType.logged_MDT_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary logged_MDT_only
 * @constant
 * @type {number}
 */
export
const logged_MDT_only: JobType = JobType.logged_MDT_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary JobType_trace_only
 * @constant
 * @type {number}
 */
export
const JobType_trace_only: JobType = JobType.trace_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trace_only
 * @constant
 * @type {number}
 */
export
const trace_only: JobType = JobType.trace_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary JobType_immediate_MDT_and_trace
 * @constant
 * @type {number}
 */
export
const JobType_immediate_MDT_and_trace: JobType = JobType.immediate_MDT_and_trace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediate_MDT_and_trace
 * @constant
 * @type {number}
 */
export
const immediate_MDT_and_trace: JobType = JobType.immediate_MDT_and_trace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) JobType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_JobType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) JobType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JobType, encoded as an ASN.1 Element.
 */
export const _encode_JobType = $._encodeEnumerated;


/* eslint-enable */
