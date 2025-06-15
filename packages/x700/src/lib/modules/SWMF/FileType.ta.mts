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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION FileType */
/**
 * @summary FileType
 * @description
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
/* END_OF_SYMBOL_DEFINITION FileType */

/* START_OF_SYMBOL_DEFINITION FileType_unstructuredText */
/**
 * @summary FileType_unstructuredText
 * @constant
 * @type {number}
 */
export const FileType_unstructuredText: FileType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FileType_unstructuredText */

/* START_OF_SYMBOL_DEFINITION unstructuredText */
/**
 * @summary FileType_unstructuredText
 * @constant
 * @type {number}
 */
export const unstructuredText: FileType = FileType_unstructuredText; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unstructuredText */

/* START_OF_SYMBOL_DEFINITION FileType_unstructuredBinary */
/**
 * @summary FileType_unstructuredBinary
 * @constant
 * @type {number}
 */
export const FileType_unstructuredBinary: FileType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FileType_unstructuredBinary */

/* START_OF_SYMBOL_DEFINITION unstructuredBinary */
/**
 * @summary FileType_unstructuredBinary
 * @constant
 * @type {number}
 */
export const unstructuredBinary: FileType = FileType_unstructuredBinary; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unstructuredBinary */

/* START_OF_SYMBOL_DEFINITION FileType_blockSpecial */
/**
 * @summary FileType_blockSpecial
 * @constant
 * @type {number}
 */
export const FileType_blockSpecial: FileType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FileType_blockSpecial */

/* START_OF_SYMBOL_DEFINITION blockSpecial */
/**
 * @summary FileType_blockSpecial
 * @constant
 * @type {number}
 */
export const blockSpecial: FileType = FileType_blockSpecial; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION blockSpecial */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FileType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FileType */

/* START_OF_SYMBOL_DEFINITION _decode_FileType */
export const _decode_FileType = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_FileType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FileType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FileType */

/* START_OF_SYMBOL_DEFINITION _encode_FileType */
export const _encode_FileType = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_FileType */

/* eslint-enable */
