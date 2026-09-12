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
 * @summary ServiceError_errorClass_resource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-resource ::= INTEGER {
 *     other (0),
 *     memory-unavailable (1),
 *     processor-resource-unavailable (2),
 *     mass-storage-unavailable (3),
 *     capability-unavailable (4),
 *     capability-unknown (5)
 * } (0..5)
 * ```
 */
export
type ServiceError_errorClass_resource = INTEGER;

/**
 * @summary ServiceError_errorClass_resource_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_resource_other: ServiceError_errorClass_resource = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_resource = ServiceError_errorClass_resource_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_memory_unavailable
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_resource_memory_unavailable: ServiceError_errorClass_resource = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_memory_unavailable
 * @constant
 * @type {number}
 */
export
const memory_unavailable: ServiceError_errorClass_resource = ServiceError_errorClass_resource_memory_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_processor_resource_unavailable
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_resource_processor_resource_unavailable: ServiceError_errorClass_resource = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_processor_resource_unavailable
 * @constant
 * @type {number}
 */
export
const processor_resource_unavailable: ServiceError_errorClass_resource = ServiceError_errorClass_resource_processor_resource_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_mass_storage_unavailable
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_resource_mass_storage_unavailable: ServiceError_errorClass_resource = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_mass_storage_unavailable
 * @constant
 * @type {number}
 */
export
const mass_storage_unavailable: ServiceError_errorClass_resource = ServiceError_errorClass_resource_mass_storage_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_capability_unavailable
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_resource_capability_unavailable: ServiceError_errorClass_resource = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_capability_unavailable
 * @constant
 * @type {number}
 */
export
const capability_unavailable: ServiceError_errorClass_resource = ServiceError_errorClass_resource_capability_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_capability_unknown
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_resource_capability_unknown: ServiceError_errorClass_resource = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_resource_capability_unknown
 * @constant
 * @type {number}
 */
export
const capability_unknown: ServiceError_errorClass_resource = ServiceError_errorClass_resource_capability_unknown; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_resource = $._decodeInteger;
export const _encode_ServiceError_errorClass_resource = $._encodeInteger;


/* eslint-enable */
