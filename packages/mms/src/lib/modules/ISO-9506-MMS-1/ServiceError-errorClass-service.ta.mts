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
 * @summary ServiceError_errorClass_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-service ::= INTEGER {
 *     other (0),
 *     primitives-out-of-sequence (1),
 *     object-state-conflict (2),
 *     -- Value 3 reserved for further definition
 *     continuation-invalid (4),
 *     object-constraint-conflict (5)
 * } (0..5)
 * ```
 */
export
type ServiceError_errorClass_service = INTEGER;

/**
 * @summary ServiceError_errorClass_service_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_other: ServiceError_errorClass_service = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_service = ServiceError_errorClass_service_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_primitives_out_of_sequence
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_primitives_out_of_sequence: ServiceError_errorClass_service = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_primitives_out_of_sequence
 * @constant
 * @type {number}
 */
export
const primitives_out_of_sequence: ServiceError_errorClass_service = ServiceError_errorClass_service_primitives_out_of_sequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_object_state_conflict
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_object_state_conflict: ServiceError_errorClass_service = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_object_state_conflict
 * @constant
 * @type {number}
 */
export
const object_state_conflict: ServiceError_errorClass_service = ServiceError_errorClass_service_object_state_conflict; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_continuation_invalid
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_continuation_invalid: ServiceError_errorClass_service = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_continuation_invalid
 * @constant
 * @type {number}
 */
export
const continuation_invalid: ServiceError_errorClass_service = ServiceError_errorClass_service_continuation_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_object_constraint_conflict
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_object_constraint_conflict: ServiceError_errorClass_service = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_object_constraint_conflict
 * @constant
 * @type {number}
 */
export
const object_constraint_conflict: ServiceError_errorClass_service = ServiceError_errorClass_service_object_constraint_conflict; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_service = (el: _Element): ServiceError_errorClass_service => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 5) {
        throw new ASN1OverflowError("ServiceError_errorClass_service violates INTEGER range constraint");
    }
    return value;
};
export const _encode_ServiceError_errorClass_service = $._encodeInteger;


/* eslint-enable */
