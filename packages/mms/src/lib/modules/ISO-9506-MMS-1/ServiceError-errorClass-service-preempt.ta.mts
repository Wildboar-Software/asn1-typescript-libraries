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
 * @summary ServiceError_errorClass_service_preempt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-service-preempt ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServiceError_errorClass_service_preempt = INTEGER;

/**
 * @summary ServiceError_errorClass_service_preempt_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_preempt_other: ServiceError_errorClass_service_preempt = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_service_preempt = ServiceError_errorClass_service_preempt_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_timeout
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_preempt_timeout: ServiceError_errorClass_service_preempt = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_timeout
 * @constant
 * @type {number}
 */
export
const timeout: ServiceError_errorClass_service_preempt = ServiceError_errorClass_service_preempt_timeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_deadlock
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_preempt_deadlock: ServiceError_errorClass_service_preempt = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_deadlock
 * @constant
 * @type {number}
 */
export
const deadlock: ServiceError_errorClass_service_preempt = ServiceError_errorClass_service_preempt_deadlock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_cancel
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_preempt_cancel: ServiceError_errorClass_service_preempt = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_cancel
 * @constant
 * @type {number}
 */
export
const cancel: ServiceError_errorClass_service_preempt = ServiceError_errorClass_service_preempt_cancel; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_service_preempt = $._decodeInteger;
export const _encode_ServiceError_errorClass_service_preempt = $._encodeInteger;


/* eslint-enable */
