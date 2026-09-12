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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAlarmEnrollmentSummary-Request-acknowledgementFilter ::= INTEGER {
 *     not-acked (0),
 *     acked (1),
 *     all (2)
 * } (0..2)
 * ```
 */
export
type GetAlarmEnrollmentSummary_Request_acknowledgementFilter = INTEGER;

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked
 * @constant
 * @type {number}
 */
export
const GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked
 * @constant
 * @type {number}
 */
export
const not_acked: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked
 * @constant
 * @type {number}
 */
export
const GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked
 * @constant
 * @type {number}
 */
export
const acked: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all
 * @constant
 * @type {number}
 */
export
const GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all
 * @constant
 * @type {number}
 */
export
const all: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter = (el: _Element): GetAlarmEnrollmentSummary_Request_acknowledgementFilter => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 2) {
        throw new ASN1OverflowError("GetAlarmEnrollmentSummary_Request_acknowledgementFilter violates INTEGER range constraint");
    }
    return value;
};
export const _encode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter = $._encodeInteger;


/* eslint-enable */
