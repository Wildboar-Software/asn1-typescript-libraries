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
 * @summary ServiceError_errorClass_application_reference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-application-reference ::= INTEGER {
 *     other (0),
 *     application-unreachable (1),
 *     connection-lost (2),
 *     application-reference-invalid (3),
 *     context-unsupported (4)
 * } (0..4)
 * ```
 */
export
type ServiceError_errorClass_application_reference = INTEGER;

/**
 * @summary ServiceError_errorClass_application_reference_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_other: ServiceError_errorClass_application_reference = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_application_unreachable
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_application_unreachable: ServiceError_errorClass_application_reference = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_application_unreachable
 * @constant
 * @type {number}
 */
export
const application_unreachable: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_application_unreachable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_connection_lost
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_connection_lost: ServiceError_errorClass_application_reference = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_connection_lost
 * @constant
 * @type {number}
 */
export
const connection_lost: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_connection_lost; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_application_reference_invalid
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_application_reference_invalid: ServiceError_errorClass_application_reference = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_application_reference_invalid
 * @constant
 * @type {number}
 */
export
const application_reference_invalid: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_application_reference_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_context_unsupported
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_context_unsupported: ServiceError_errorClass_application_reference = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_context_unsupported
 * @constant
 * @type {number}
 */
export
const context_unsupported: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_context_unsupported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_application_reference = $._decodeInteger;
export const _encode_ServiceError_errorClass_application_reference = $._encodeInteger;


/* eslint-enable */
