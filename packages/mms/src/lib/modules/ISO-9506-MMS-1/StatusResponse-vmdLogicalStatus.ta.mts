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
 * @summary StatusResponse_vmdLogicalStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusResponse-vmdLogicalStatus ::= INTEGER {
 *     state-changes-allowed (0),
 *     no-state-changes-allowed (1),
 *     limited-services-permitted (2),
 *     support-services-allowed (3)
 * } (0..3)
 * ```
 */
export
type StatusResponse_vmdLogicalStatus = INTEGER;

/**
 * @summary StatusResponse_vmdLogicalStatus_state_changes_allowed
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdLogicalStatus_state_changes_allowed: StatusResponse_vmdLogicalStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_state_changes_allowed
 * @constant
 * @type {number}
 */
export
const state_changes_allowed: StatusResponse_vmdLogicalStatus = StatusResponse_vmdLogicalStatus_state_changes_allowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_no_state_changes_allowed
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdLogicalStatus_no_state_changes_allowed: StatusResponse_vmdLogicalStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_no_state_changes_allowed
 * @constant
 * @type {number}
 */
export
const no_state_changes_allowed: StatusResponse_vmdLogicalStatus = StatusResponse_vmdLogicalStatus_no_state_changes_allowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_limited_services_permitted
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdLogicalStatus_limited_services_permitted: StatusResponse_vmdLogicalStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_limited_services_permitted
 * @constant
 * @type {number}
 */
export
const limited_services_permitted: StatusResponse_vmdLogicalStatus = StatusResponse_vmdLogicalStatus_limited_services_permitted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_support_services_allowed
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdLogicalStatus_support_services_allowed: StatusResponse_vmdLogicalStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_support_services_allowed
 * @constant
 * @type {number}
 */
export
const support_services_allowed: StatusResponse_vmdLogicalStatus = StatusResponse_vmdLogicalStatus_support_services_allowed; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_StatusResponse_vmdLogicalStatus = (el: _Element): StatusResponse_vmdLogicalStatus => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 3) {
        throw new ASN1OverflowError("StatusResponse_vmdLogicalStatus violates INTEGER range constraint");
    }
    return value;
};
export const _encode_StatusResponse_vmdLogicalStatus = $._encodeInteger;


/* eslint-enable */
