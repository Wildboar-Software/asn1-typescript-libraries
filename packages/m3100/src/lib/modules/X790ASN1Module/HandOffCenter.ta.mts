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

/* START_OF_SYMBOL_DEFINITION HandOffCenter */
/**
 * @summary HandOffCenter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandOffCenter  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type HandOffCenter = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION HandOffCenter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HandOffCenter */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HandOffCenter */

/* START_OF_SYMBOL_DEFINITION _decode_HandOffCenter */
export const _decode_HandOffCenter = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_HandOffCenter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HandOffCenter */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HandOffCenter */

/* START_OF_SYMBOL_DEFINITION _encode_HandOffCenter */
export const _encode_HandOffCenter = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_HandOffCenter */

/* eslint-enable */
