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
let _cached_decoder_for_FileType: $.ASN1Decoder<FileType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FileType */

/* START_OF_SYMBOL_DEFINITION _decode_FileType */
/**
 * @summary Decodes an ASN.1 element into a(n) FileType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FileType} The decoded data structure.
 */
export function _decode_FileType(el: _Element) {
    if (!_cached_decoder_for_FileType) {
        _cached_decoder_for_FileType = $._decodeInteger;
    }
    return _cached_decoder_for_FileType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FileType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FileType */
let _cached_encoder_for_FileType: $.ASN1Encoder<FileType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FileType */

/* START_OF_SYMBOL_DEFINITION _encode_FileType */
/**
 * @summary Encodes a(n) FileType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileType, encoded as an ASN.1 Element.
 */
export function _encode_FileType(
    value: FileType,
    elGetter: $.ASN1Encoder<FileType>
) {
    if (!_cached_encoder_for_FileType) {
        _cached_encoder_for_FileType = $._encodeInteger;
    }
    return _cached_encoder_for_FileType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FileType */

/* eslint-enable */
