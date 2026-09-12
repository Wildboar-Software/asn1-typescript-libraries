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
 * @summary ServiceError_errorClass_definition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-definition ::= INTEGER {
 *     other (0),
 *     object-undefined (1),
 *     invalid-address (2),
 *     type-unsupported (3),
 *     type-inconsistent (4),
 *     object-exists (5),
 *     object-attribute-inconsistent (6)
 * } (0..6)
 * ```
 */
export
type ServiceError_errorClass_definition = INTEGER;

/**
 * @summary ServiceError_errorClass_definition_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_other: ServiceError_errorClass_definition = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_definition = ServiceError_errorClass_definition_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_undefined
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_undefined: ServiceError_errorClass_definition = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_undefined
 * @constant
 * @type {number}
 */
export
const object_undefined: ServiceError_errorClass_definition = ServiceError_errorClass_definition_object_undefined; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_invalid_address
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_invalid_address: ServiceError_errorClass_definition = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_invalid_address
 * @constant
 * @type {number}
 */
export
const invalid_address: ServiceError_errorClass_definition = ServiceError_errorClass_definition_invalid_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_unsupported
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_type_unsupported: ServiceError_errorClass_definition = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_unsupported
 * @constant
 * @type {number}
 */
export
const type_unsupported: ServiceError_errorClass_definition = ServiceError_errorClass_definition_type_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_inconsistent
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_type_inconsistent: ServiceError_errorClass_definition = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_inconsistent
 * @constant
 * @type {number}
 */
export
const type_inconsistent: ServiceError_errorClass_definition = ServiceError_errorClass_definition_type_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_exists
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_exists: ServiceError_errorClass_definition = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_exists
 * @constant
 * @type {number}
 */
export
const object_exists: ServiceError_errorClass_definition = ServiceError_errorClass_definition_object_exists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_attribute_inconsistent
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_attribute_inconsistent: ServiceError_errorClass_definition = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_attribute_inconsistent
 * @constant
 * @type {number}
 */
export
const object_attribute_inconsistent: ServiceError_errorClass_definition = ServiceError_errorClass_definition_object_attribute_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_definition = $._decodeInteger;
export const _encode_ServiceError_errorClass_definition = $._encodeInteger;


/* eslint-enable */
