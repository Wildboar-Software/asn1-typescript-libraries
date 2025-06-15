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

/* START_OF_SYMBOL_DEFINITION ExternalPointMessage */
/**
 * @summary ExternalPointMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalPointMessage  ::=  GraphicString
 * ```
 */
export type ExternalPointMessage = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ExternalPointMessage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalPointMessage */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalPointMessage */

/* START_OF_SYMBOL_DEFINITION _decode_ExternalPointMessage */
export const _decode_ExternalPointMessage = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_ExternalPointMessage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalPointMessage */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalPointMessage */

/* START_OF_SYMBOL_DEFINITION _encode_ExternalPointMessage */
export const _encode_ExternalPointMessage = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_ExternalPointMessage */

/* eslint-enable */
