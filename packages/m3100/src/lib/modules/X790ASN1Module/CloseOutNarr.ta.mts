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

/* START_OF_SYMBOL_DEFINITION CloseOutNarr */
/**
 * @summary CloseOutNarr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CloseOutNarr  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export type CloseOutNarr = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION CloseOutNarr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CloseOutNarr */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CloseOutNarr */

/* START_OF_SYMBOL_DEFINITION _decode_CloseOutNarr */
export const _decode_CloseOutNarr = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_CloseOutNarr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CloseOutNarr */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CloseOutNarr */

/* START_OF_SYMBOL_DEFINITION _encode_CloseOutNarr */
export const _encode_CloseOutNarr = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_CloseOutNarr */

/* eslint-enable */
