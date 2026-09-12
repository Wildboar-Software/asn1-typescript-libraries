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
 * @summary StatusResponse_vmdPhysicalStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusResponse-vmdPhysicalStatus ::= INTEGER {
 *     operational (0),
 *     partially-operational (1),
 *     inoperable (2),
 *     needs-commissioning (3)
 * } (0..3)
 * ```
 */
export
type StatusResponse_vmdPhysicalStatus = INTEGER;

/**
 * @summary StatusResponse_vmdPhysicalStatus_operational
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdPhysicalStatus_operational: StatusResponse_vmdPhysicalStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_operational
 * @constant
 * @type {number}
 */
export
const operational: StatusResponse_vmdPhysicalStatus = StatusResponse_vmdPhysicalStatus_operational; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_partially_operational
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdPhysicalStatus_partially_operational: StatusResponse_vmdPhysicalStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_partially_operational
 * @constant
 * @type {number}
 */
export
const partially_operational: StatusResponse_vmdPhysicalStatus = StatusResponse_vmdPhysicalStatus_partially_operational; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_inoperable
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdPhysicalStatus_inoperable: StatusResponse_vmdPhysicalStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_inoperable
 * @constant
 * @type {number}
 */
export
const inoperable: StatusResponse_vmdPhysicalStatus = StatusResponse_vmdPhysicalStatus_inoperable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_needs_commissioning
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdPhysicalStatus_needs_commissioning: StatusResponse_vmdPhysicalStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_needs_commissioning
 * @constant
 * @type {number}
 */
export
const needs_commissioning: StatusResponse_vmdPhysicalStatus = StatusResponse_vmdPhysicalStatus_needs_commissioning; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_StatusResponse_vmdPhysicalStatus = (el: _Element): StatusResponse_vmdPhysicalStatus => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 3) {
        throw new ASN1OverflowError("StatusResponse_vmdPhysicalStatus violates INTEGER range constraint");
    }
    return value;
};
export const _encode_StatusResponse_vmdPhysicalStatus = $._encodeInteger;


/* eslint-enable */
