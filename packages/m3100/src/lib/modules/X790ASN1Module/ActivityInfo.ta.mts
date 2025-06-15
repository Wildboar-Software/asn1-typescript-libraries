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

/* START_OF_SYMBOL_DEFINITION ActivityInfo */
/**
 * @summary ActivityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityInfo  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export type ActivityInfo = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ActivityInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityInfo */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityInfo */
export const _decode_ActivityInfo = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_ActivityInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityInfo */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityInfo */
export const _encode_ActivityInfo = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_ActivityInfo */

/* eslint-enable */
