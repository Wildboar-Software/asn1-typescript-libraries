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

/* START_OF_SYMBOL_DEFINITION LineImage */
/**
 * @summary LineImage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LineImage  ::=
 *   GraphicString
 * ```
 */
export type LineImage = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION LineImage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LineImage */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LineImage */

/* START_OF_SYMBOL_DEFINITION _decode_LineImage */
export const _decode_LineImage = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_LineImage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LineImage */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LineImage */

/* START_OF_SYMBOL_DEFINITION _encode_LineImage */
export const _encode_LineImage = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_LineImage */

/* eslint-enable */
