/* eslint-disable */
import {
    INTEGER,
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
 * @summary ServiceError_errorClass_file
 * @description
 * 
 * Error Class FILE: errors from file operations. Encoded as INTEGER when
 * file-management / ObtainFile CBBs are selected; otherwise the `file` Error
 * Class alternative is NULL. ISO 9506-1:2003 §24.2.13; ISO 9506-2:2003 §7.4.1.
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
 * @description
 *
 * Reason other than those identified for FILE. ISO 9506-1:2003 §24.2.13.10.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_other: ServiceError_errorClass_file = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_other
 * @description
 *
 * Reason other than those identified for FILE. ISO 9506-1:2003 §24.2.13.10.
 *
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_file = ServiceError_errorClass_file_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_filename_ambiguous
 * @description
 *
 * Wildcard filename matches more than one file. Cannot occur on FileDirectory,
 * which allows multi-file names. ISO 9506-1:2003 §24.2.13.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_filename_ambiguous: ServiceError_errorClass_file = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_filename_ambiguous
 * @description
 *
 * Wildcard filename matches more than one file. Cannot occur on FileDirectory,
 * which allows multi-file names. ISO 9506-1:2003 §24.2.13.1.
 *
 * @constant
 * @type {number}
 */
export
const filename_ambiguous: ServiceError_errorClass_file = ServiceError_errorClass_file_filename_ambiguous; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_busy
 * @description
 *
 * The file is busy. ISO 9506-1:2003 §24.2.13.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_file_busy: ServiceError_errorClass_file = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_busy
 * @description
 *
 * The file is busy. ISO 9506-1:2003 §24.2.13.2.
 *
 * @constant
 * @type {number}
 */
export
const file_busy: ServiceError_errorClass_file = ServiceError_errorClass_file_file_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_filename_syntax_error
 * @description
 *
 * The file name is syntactically incorrect. ISO 9506-1:2003 §24.2.13.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_filename_syntax_error: ServiceError_errorClass_file = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_filename_syntax_error
 * @description
 *
 * The file name is syntactically incorrect. ISO 9506-1:2003 §24.2.13.3.
 *
 * @constant
 * @type {number}
 */
export
const filename_syntax_error: ServiceError_errorClass_file = ServiceError_errorClass_file_filename_syntax_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_content_type_invalid
 * @description
 *
 * The file is not unstructured binary. ISO 9506-1:2003 §24.2.13.4.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_content_type_invalid: ServiceError_errorClass_file = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_content_type_invalid
 * @description
 *
 * The file is not unstructured binary. ISO 9506-1:2003 §24.2.13.4.
 *
 * @constant
 * @type {number}
 */
export
const content_type_invalid: ServiceError_errorClass_file = ServiceError_errorClass_file_content_type_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_position_invalid
 * @description
 *
 * The initial position is past the end of the file. ISO 9506-1:2003 §24.2.13.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_position_invalid: ServiceError_errorClass_file = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_position_invalid
 * @description
 *
 * The initial position is past the end of the file. ISO 9506-1:2003 §24.2.13.5.
 *
 * @constant
 * @type {number}
 */
export
const position_invalid: ServiceError_errorClass_file = ServiceError_errorClass_file_position_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_access_denied
 * @description
 *
 * Access to the file is denied. ISO 9506-1:2003 §24.2.13.6.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_file_access_denied: ServiceError_errorClass_file = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_access_denied
 * @description
 *
 * Access to the file is denied. ISO 9506-1:2003 §24.2.13.6.
 *
 * @constant
 * @type {number}
 */
export
const file_access_denied: ServiceError_errorClass_file = ServiceError_errorClass_file_file_access_denied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_non_existent
 * @description
 *
 * The file does not exist. ISO 9506-1:2003 §24.2.13.7.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_file_non_existent: ServiceError_errorClass_file = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_file_non_existent
 * @description
 *
 * The file does not exist. ISO 9506-1:2003 §24.2.13.7.
 *
 * @constant
 * @type {number}
 */
export
const file_non_existent: ServiceError_errorClass_file = ServiceError_errorClass_file_file_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_duplicate_filename
 * @description
 *
 * Create would use a filename that already exists in the filestore.
 * ISO 9506-1:2003 §24.2.13.8.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_duplicate_filename: ServiceError_errorClass_file = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_duplicate_filename
 * @description
 *
 * Create would use a filename that already exists in the filestore.
 * ISO 9506-1:2003 §24.2.13.8.
 *
 * @constant
 * @type {number}
 */
export
const duplicate_filename: ServiceError_errorClass_file = ServiceError_errorClass_file_duplicate_filename; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_insufficient_space_in_filestore
 * @description
 *
 * No additional filestore space to add a file. ISO 9506-1:2003 §24.2.13.9.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_file_insufficient_space_in_filestore: ServiceError_errorClass_file = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_file_insufficient_space_in_filestore
 * @description
 *
 * No additional filestore space to add a file. ISO 9506-1:2003 §24.2.13.9.
 *
 * @constant
 * @type {number}
 */
export
const insufficient_space_in_filestore: ServiceError_errorClass_file = ServiceError_errorClass_file_insufficient_space_in_filestore; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_file = $._decodeInteger;
export const _encode_ServiceError_errorClass_file = $._encodeInteger;


/* eslint-enable */
