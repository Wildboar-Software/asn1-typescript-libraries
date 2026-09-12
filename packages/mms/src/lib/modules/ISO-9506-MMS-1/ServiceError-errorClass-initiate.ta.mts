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
 * @summary ServiceError_errorClass_initiate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-initiate ::= INTEGER {
 *     other (0),
 *     -- Values 1 and 2 are reserved for further definition
 *     max-services-outstanding-calling-insufficient (3),
 *     max-services-outstanding-called-insufficient (4),
 *     service-CBB-insufficient (5),
 *     parameter-CBB-insufficient (6),
 *     nesting-level-insufficient (7)
 * } (0..7)
 * ```
 */
export
type ServiceError_errorClass_initiate = INTEGER;

/**
 * @summary ServiceError_errorClass_initiate_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_other: ServiceError_errorClass_initiate = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient: ServiceError_errorClass_initiate = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient
 * @constant
 * @type {number}
 */
export
const max_services_outstanding_calling_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient: ServiceError_errorClass_initiate = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient
 * @constant
 * @type {number}
 */
export
const max_services_outstanding_called_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_service_CBB_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_service_CBB_insufficient: ServiceError_errorClass_initiate = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_service_CBB_insufficient
 * @constant
 * @type {number}
 */
export
const service_CBB_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_service_CBB_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_parameter_CBB_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_parameter_CBB_insufficient: ServiceError_errorClass_initiate = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_parameter_CBB_insufficient
 * @constant
 * @type {number}
 */
export
const parameter_CBB_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_parameter_CBB_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_nesting_level_insufficient
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_nesting_level_insufficient: ServiceError_errorClass_initiate = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_nesting_level_insufficient
 * @constant
 * @type {number}
 */
export
const nesting_level_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_nesting_level_insufficient; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_initiate = (el: _Element): ServiceError_errorClass_initiate => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 7) {
        throw new ASN1OverflowError("ServiceError_errorClass_initiate violates INTEGER range constraint");
    }
    return value;
};
export const _encode_ServiceError_errorClass_initiate = $._encodeInteger;


/* eslint-enable */
