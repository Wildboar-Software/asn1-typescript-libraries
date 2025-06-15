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

/* START_OF_SYMBOL_DEFINITION ArcInterval */
/**
 * @summary ArcInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcInterval  ::=  INTEGER(0..5940)
 * ```
 */
export type ArcInterval = INTEGER;
/* END_OF_SYMBOL_DEFINITION ArcInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcInterval */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcInterval */

/* START_OF_SYMBOL_DEFINITION _decode_ArcInterval */
export const _decode_ArcInterval = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ArcInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcInterval */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcInterval */

/* START_OF_SYMBOL_DEFINITION _encode_ArcInterval */
export const _encode_ArcInterval = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ArcInterval */

/* eslint-enable */
