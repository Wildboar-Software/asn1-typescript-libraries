/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION DocumentRelease */
/**
 * @summary DocumentRelease
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentRelease  ::=  TeletexString(SIZE (1..ub-edi-document-release))
 * ```
 */
export type DocumentRelease = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION DocumentRelease */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentRelease */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentRelease */

/* START_OF_SYMBOL_DEFINITION _decode_DocumentRelease */
export const _decode_DocumentRelease = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_DocumentRelease */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentRelease */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentRelease */

/* START_OF_SYMBOL_DEFINITION _encode_DocumentRelease */
export const _encode_DocumentRelease = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_DocumentRelease */

/* eslint-enable */
