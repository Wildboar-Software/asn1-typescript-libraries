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

/* START_OF_SYMBOL_DEFINITION ObjectName */
/**
 * @summary ObjectName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectName  ::=  GraphicString
 * ```
 */
export type ObjectName = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ObjectName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectName */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectName */
export const _decode_ObjectName = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_ObjectName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectName */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectName */
export const _encode_ObjectName = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_ObjectName */

/* eslint-enable */
