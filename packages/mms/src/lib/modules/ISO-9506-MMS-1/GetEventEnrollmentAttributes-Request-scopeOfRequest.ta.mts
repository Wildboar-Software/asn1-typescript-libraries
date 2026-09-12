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
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEventEnrollmentAttributes-Request-scopeOfRequest ::= INTEGER {
 *     specific (0),
 *     client (1),
 *     ec (2),
 *     ea (3)
 * } (0..3)
 * ```
 */
export
type GetEventEnrollmentAttributes_Request_scopeOfRequest = INTEGER;

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_specific
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_specific: GetEventEnrollmentAttributes_Request_scopeOfRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_specific
 * @constant
 * @type {number}
 */
export
const specific: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_client
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_client: GetEventEnrollmentAttributes_Request_scopeOfRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_client
 * @constant
 * @type {number}
 */
export
const client: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_client; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ec
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_ec: GetEventEnrollmentAttributes_Request_scopeOfRequest = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ec
 * @constant
 * @type {number}
 */
export
const ec: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_ec; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ea
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_ea: GetEventEnrollmentAttributes_Request_scopeOfRequest = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ea
 * @constant
 * @type {number}
 */
export
const ea: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_ea; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetEventEnrollmentAttributes_Request_scopeOfRequest = (el: _Element): GetEventEnrollmentAttributes_Request_scopeOfRequest => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 3) {
        throw new ASN1OverflowError("GetEventEnrollmentAttributes_Request_scopeOfRequest violates INTEGER range constraint");
    }
    return value;
};
export const _encode_GetEventEnrollmentAttributes_Request_scopeOfRequest = $._encodeInteger;


/* eslint-enable */
