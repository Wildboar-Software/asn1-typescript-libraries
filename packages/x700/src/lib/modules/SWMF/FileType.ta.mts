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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FileType
 * @description
 *
 * Syntax of `fileType` for a softwareUnit:
 *
 * - `unstructuredText` (0) — FTAM-1; e.g. non-executable text
 * - `unstructuredBinary` (1) — FTAM-3; e.g. executable file
 * - `blockSpecial` (2) — block special file
 *
 * ITU-T Rec. X.744 (10/96)
 * [§8.2.9](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.3.9, A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FileType  ::=  INTEGER {
 *   unstructuredText(0), -- FTAM-1
 *   unstructuredBinary(1), -- FTAM-3
 *   blockSpecial(2)}
 * ```
 */
export type FileType = INTEGER;

/**
 * @summary FileType_unstructuredText
 * @description
 *
 * Unstructured text file (FTAM-1); e.g. non-executable. ITU-T Rec.
 * X.744 (10/96) §8.2.9, A.8.
 * @constant
 * @type {number}
 */
export const FileType_unstructuredText: FileType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_unstructuredText
 * @description
 *
 * Unstructured text file (FTAM-1); e.g. non-executable. ITU-T Rec.
 * X.744 (10/96) §8.2.9, A.8.
 * @constant
 * @type {number}
 */
export const unstructuredText: FileType = FileType_unstructuredText; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_unstructuredBinary
 * @description
 *
 * Unstructured binary file (FTAM-3); e.g. executable. ITU-T Rec.
 * X.744 (10/96) §8.2.9, A.8.
 * @constant
 * @type {number}
 */
export const FileType_unstructuredBinary: FileType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_unstructuredBinary
 * @description
 *
 * Unstructured binary file (FTAM-3); e.g. executable. ITU-T Rec.
 * X.744 (10/96) §8.2.9, A.8.
 * @constant
 * @type {number}
 */
export const unstructuredBinary: FileType = FileType_unstructuredBinary; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_blockSpecial
 * @description
 *
 * Block special file. ITU-T Rec. X.744 (10/96) §8.2.9, A.8.
 * @constant
 * @type {number}
 */
export const FileType_blockSpecial: FileType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_blockSpecial
 * @description
 *
 * Block special file. ITU-T Rec. X.744 (10/96) §8.2.9, A.8.
 * @constant
 * @type {number}
 */
export const blockSpecial: FileType = FileType_blockSpecial; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_FileType = $._decodeInteger;


export const _encode_FileType = $._encodeInteger;


/* eslint-enable */
