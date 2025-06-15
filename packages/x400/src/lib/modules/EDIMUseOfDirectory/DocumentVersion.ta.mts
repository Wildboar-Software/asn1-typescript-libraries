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

/* START_OF_SYMBOL_DEFINITION DocumentVersion */
/**
 * @summary DocumentVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentVersion  ::=  TeletexString(SIZE (1..ub-edi-document-version))
 * ```
 */
export type DocumentVersion = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION DocumentVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentVersion */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DocumentVersion */

/* START_OF_SYMBOL_DEFINITION _decode_DocumentVersion */
export const _decode_DocumentVersion = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_DocumentVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentVersion */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DocumentVersion */

/* START_OF_SYMBOL_DEFINITION _encode_DocumentVersion */
export const _encode_DocumentVersion = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_DocumentVersion */

/* eslint-enable */
