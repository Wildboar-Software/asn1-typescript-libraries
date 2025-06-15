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

/* START_OF_SYMBOL_DEFINITION RangeFromOneToOne */
/**
 * @summary RangeFromOneToOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeFromOneToOne  ::=  INTEGER(1..1)
 * ```
 */
export type RangeFromOneToOne = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeFromOneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeFromOneToOne */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeFromOneToOne */

/* START_OF_SYMBOL_DEFINITION _decode_RangeFromOneToOne */
export const _decode_RangeFromOneToOne = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RangeFromOneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeFromOneToOne */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeFromOneToOne */

/* START_OF_SYMBOL_DEFINITION _encode_RangeFromOneToOne */
export const _encode_RangeFromOneToOne = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RangeFromOneToOne */

/* eslint-enable */
