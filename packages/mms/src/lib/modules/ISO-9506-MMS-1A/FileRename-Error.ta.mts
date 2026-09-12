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
 * @summary FileRename_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileRename-Error  ::=  INTEGER {
 *     source-file            (0),
 *     destination-file       (1)
 * } (0..1)
 * ```
 */
export
type FileRename_Error = INTEGER;

/**
 * @summary FileRename_Error_source_file
 * @constant
 * @type {number}
 */
export
const FileRename_Error_source_file: FileRename_Error = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileRename_Error_source_file
 * @constant
 * @type {number}
 */
export
const source_file: FileRename_Error = FileRename_Error_source_file; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FileRename_Error_destination_file
 * @constant
 * @type {number}
 */
export
const FileRename_Error_destination_file: FileRename_Error = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileRename_Error_destination_file
 * @constant
 * @type {number}
 */
export
const destination_file: FileRename_Error = FileRename_Error_destination_file; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FileRename_Error = $._decodeInteger;
export const _encode_FileRename_Error = $._encodeInteger;


/* eslint-enable */
