/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION SelectionPriority */
/**
 * @summary SelectionPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectionPriority  ::=  INTEGER(1..10)
 * ```
 */
export type SelectionPriority = INTEGER;
/* END_OF_SYMBOL_DEFINITION SelectionPriority */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectionPriority */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectionPriority */

/* START_OF_SYMBOL_DEFINITION _decode_SelectionPriority */
export const _decode_SelectionPriority = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SelectionPriority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectionPriority */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectionPriority */

/* START_OF_SYMBOL_DEFINITION _encode_SelectionPriority */
export const _encode_SelectionPriority = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SelectionPriority */

/* eslint-enable */
