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
 * @summary ServiceError_errorClass_file
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-file ::= INTEGER {
 *     other (0),
 *     filename-ambiguous (1),
 *     file-busy (2),
 *     filename-syntax-error (3),
 *     content-type-invalid (4),
 *     position-invalid (5),
 *     file-access-denied (6),
 *     file-non-existent (7),
 *     duplicate-filename (8),
 *     insufficient-space-in-filestore (9)
 * } (0..9)
 * ```
 */
export
type ServiceError_errorClass_file = INTEGER;

/**
 * @summary ServiceError_errorClass_file_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_other: ServiceError_errorClass_file = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_file = ServiceError_errorClass_file_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_filename_ambiguous
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_filename_ambiguous: ServiceError_errorClass_file = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_filename_ambiguous
 * @constant
 * @type {number}
 */
export
const filename_ambiguous: ServiceError_errorClass_file = ServiceError_errorClass_file_filename_ambiguous; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_busy
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_file_busy: ServiceError_errorClass_file = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_busy
 * @constant
 * @type {number}
 */
export
const file_busy: ServiceError_errorClass_file = ServiceError_errorClass_file_file_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_filename_syntax_error
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_filename_syntax_error: ServiceError_errorClass_file = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_filename_syntax_error
 * @constant
 * @type {number}
 */
export
const filename_syntax_error: ServiceError_errorClass_file = ServiceError_errorClass_file_filename_syntax_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_content_type_invalid
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_content_type_invalid: ServiceError_errorClass_file = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_content_type_invalid
 * @constant
 * @type {number}
 */
export
const content_type_invalid: ServiceError_errorClass_file = ServiceError_errorClass_file_content_type_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_position_invalid
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_position_invalid: ServiceError_errorClass_file = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_position_invalid
 * @constant
 * @type {number}
 */
export
const position_invalid: ServiceError_errorClass_file = ServiceError_errorClass_file_position_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_access_denied
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_file_access_denied: ServiceError_errorClass_file = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_access_denied
 * @constant
 * @type {number}
 */
export
const file_access_denied: ServiceError_errorClass_file = ServiceError_errorClass_file_file_access_denied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_non_existent
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_file_non_existent: ServiceError_errorClass_file = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_non_existent
 * @constant
 * @type {number}
 */
export
const file_non_existent: ServiceError_errorClass_file = ServiceError_errorClass_file_file_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_duplicate_filename
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_duplicate_filename: ServiceError_errorClass_file = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_duplicate_filename
 * @constant
 * @type {number}
 */
export
const duplicate_filename: ServiceError_errorClass_file = ServiceError_errorClass_file_duplicate_filename; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_insufficient_space_in_filestore
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_insufficient_space_in_filestore: ServiceError_errorClass_file = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_insufficient_space_in_filestore
 * @constant
 * @type {number}
 */
export
const insufficient_space_in_filestore: ServiceError_errorClass_file = ServiceError_errorClass_file_insufficient_space_in_filestore; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_file = $._decodeInteger;
export const _encode_ServiceError_errorClass_file = $._encodeInteger;


/* eslint-enable */
