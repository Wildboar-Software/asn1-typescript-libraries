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

/* START_OF_SYMBOL_DEFINITION RangeOneToOne */
/**
 * @summary RangeOneToOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeOneToOne  ::=  INTEGER(1..1)
 * ```
 */
export type RangeOneToOne = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeOneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeOneToOne */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeOneToOne */

/* START_OF_SYMBOL_DEFINITION _decode_RangeOneToOne */
export const _decode_RangeOneToOne = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RangeOneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeOneToOne */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeOneToOne */

/* START_OF_SYMBOL_DEFINITION _encode_RangeOneToOne */
export const _encode_RangeOneToOne = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RangeOneToOne */

/* eslint-enable */
