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
 * @summary DataAccessError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataAccessError  ::=  INTEGER {
 *    object-invalidated            (0),
 *    hardware-fault                (1),
 *    temporarily-unavailable       (2),
 *    object-access-denied          (3),
 *    object-undefined              (4),
 *    invalid-address               (5),
 *    type-unsupported              (6),
 *    type-inconsistent             (7),
 *    object-attribute-inconsistent (8),
 *    object-access-unsupported     (9),
 *    object-non-existent           (10),
 *    object-value-invalid          (11)
 * } (0..11)
 * ```
 */
export
type DataAccessError = INTEGER;

/**
 * @summary DataAccessError_object_invalidated
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_invalidated: DataAccessError = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_invalidated
 * @constant
 * @type {number}
 */
export
const object_invalidated: DataAccessError = DataAccessError_object_invalidated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_hardware_fault
 * @constant
 * @type {number}
 */
export
const DataAccessError_hardware_fault: DataAccessError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_hardware_fault
 * @constant
 * @type {number}
 */
export
const hardware_fault: DataAccessError = DataAccessError_hardware_fault; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_temporarily_unavailable
 * @constant
 * @type {number}
 */
export
const DataAccessError_temporarily_unavailable: DataAccessError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_temporarily_unavailable
 * @constant
 * @type {number}
 */
export
const temporarily_unavailable: DataAccessError = DataAccessError_temporarily_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_access_denied
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_access_denied: DataAccessError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_access_denied
 * @constant
 * @type {number}
 */
export
const object_access_denied: DataAccessError = DataAccessError_object_access_denied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_undefined
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_undefined: DataAccessError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_undefined
 * @constant
 * @type {number}
 */
export
const object_undefined: DataAccessError = DataAccessError_object_undefined; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_invalid_address
 * @constant
 * @type {number}
 */
export
const DataAccessError_invalid_address: DataAccessError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_invalid_address
 * @constant
 * @type {number}
 */
export
const invalid_address: DataAccessError = DataAccessError_invalid_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_type_unsupported
 * @constant
 * @type {number}
 */
export
const DataAccessError_type_unsupported: DataAccessError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_type_unsupported
 * @constant
 * @type {number}
 */
export
const type_unsupported: DataAccessError = DataAccessError_type_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_type_inconsistent
 * @constant
 * @type {number}
 */
export
const DataAccessError_type_inconsistent: DataAccessError = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_type_inconsistent
 * @constant
 * @type {number}
 */
export
const type_inconsistent: DataAccessError = DataAccessError_type_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_attribute_inconsistent
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_attribute_inconsistent: DataAccessError = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_attribute_inconsistent
 * @constant
 * @type {number}
 */
export
const object_attribute_inconsistent: DataAccessError = DataAccessError_object_attribute_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_access_unsupported
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_access_unsupported: DataAccessError = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_access_unsupported
 * @constant
 * @type {number}
 */
export
const object_access_unsupported: DataAccessError = DataAccessError_object_access_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_non_existent
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_non_existent: DataAccessError = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_non_existent
 * @constant
 * @type {number}
 */
export
const object_non_existent: DataAccessError = DataAccessError_object_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_value_invalid
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_value_invalid: DataAccessError = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_value_invalid
 * @constant
 * @type {number}
 */
export
const object_value_invalid: DataAccessError = DataAccessError_object_value_invalid; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DataAccessError = $._decodeInteger;
export const _encode_DataAccessError = $._encodeInteger;


/* eslint-enable */
