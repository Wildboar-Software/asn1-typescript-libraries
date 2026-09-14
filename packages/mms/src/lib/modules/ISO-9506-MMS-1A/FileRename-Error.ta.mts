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
 * File In Error on Result(-). Present when it is
 * necessary to distinguish whether an error
 * pertains to the source (current) or
 * destination (new) file. Not present if failure
 * is due to a modifier (see 24.5). Informative
 * Annex D.
 *
 * [ISO 9506-1:2003 Annex D, D.6.1.3.1]
 * [ISO 9506-2:2003 Annex D, D.5.3]
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
 * @description
 *
 * SOURCE-FILE: the error pertains to the current
 * (source) file.
 *
 * [ISO 9506-1:2003 Annex D, D.6.1.3.1]
 * @constant
 * @type {number}
 */
export
const FileRename_Error_source_file: FileRename_Error = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileRename_Error_source_file
 * @description
 *
 * SOURCE-FILE: the error pertains to the current
 * (source) file.
 *
 * [ISO 9506-1:2003 Annex D, D.6.1.3.1]
 * @constant
 * @type {number}
 */
export
const source_file: FileRename_Error = FileRename_Error_source_file; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FileRename_Error_destination_file
 * @description
 *
 * DESTINATION-FILE: the error pertains to the
 * new (destination) file.
 *
 * [ISO 9506-1:2003 Annex D, D.6.1.3.1]
 * @constant
 * @type {number}
 */
export
const FileRename_Error_destination_file: FileRename_Error = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileRename_Error_destination_file
 * @description
 *
 * DESTINATION-FILE: the error pertains to the
 * new (destination) file.
 *
 * [ISO 9506-1:2003 Annex D, D.6.1.3.1]
 * @constant
 * @type {number}
 */
export
const destination_file: FileRename_Error = FileRename_Error_destination_file; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FileRename_Error = $._decodeInteger;
export const _encode_FileRename_Error = $._encodeInteger;


/* eslint-enable */
