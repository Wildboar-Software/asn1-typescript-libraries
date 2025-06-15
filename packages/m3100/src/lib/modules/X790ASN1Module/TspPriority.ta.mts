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

/* START_OF_SYMBOL_DEFINITION TspPriority */
/**
 * @summary TspPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TspPriority  ::=  GraphicString(SIZE (2))
 * ```
 */
export type TspPriority = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION TspPriority */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TspPriority */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TspPriority */

/* START_OF_SYMBOL_DEFINITION _decode_TspPriority */
export const _decode_TspPriority = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_TspPriority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TspPriority */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TspPriority */

/* START_OF_SYMBOL_DEFINITION _encode_TspPriority */
export const _encode_TspPriority = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_TspPriority */

/* eslint-enable */
