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

/* START_OF_SYMBOL_DEFINITION RangeZeroToMax */
/**
 * @summary RangeZeroToMax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeZeroToMax  ::=  INTEGER(0..MAX)
 * ```
 */
export type RangeZeroToMax = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeZeroToMax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeZeroToMax */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeZeroToMax */

/* START_OF_SYMBOL_DEFINITION _decode_RangeZeroToMax */
export const _decode_RangeZeroToMax = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RangeZeroToMax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeZeroToMax */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeZeroToMax */

/* START_OF_SYMBOL_DEFINITION _encode_RangeZeroToMax */
export const _encode_RangeZeroToMax = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RangeZeroToMax */

/* eslint-enable */
