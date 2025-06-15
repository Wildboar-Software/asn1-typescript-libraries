/* eslint-disable */
import {
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION AccountName */
/**
 * @summary AccountName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccountName  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type AccountName = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION AccountName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountName */

/* START_OF_SYMBOL_DEFINITION _decode_AccountName */
export const _decode_AccountName = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_AccountName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountName */

/* START_OF_SYMBOL_DEFINITION _encode_AccountName */
export const _encode_AccountName = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_AccountName */

/* eslint-enable */
