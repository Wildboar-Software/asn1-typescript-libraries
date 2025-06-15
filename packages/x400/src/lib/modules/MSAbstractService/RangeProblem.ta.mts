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

/* START_OF_SYMBOL_DEFINITION RangeProblem */
/**
 * @summary RangeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeProblem  ::=  INTEGER {reversed(0)}(0..ub-error-reasons)
 * ```
 */
export type RangeProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeProblem */

/* START_OF_SYMBOL_DEFINITION RangeProblem_reversed */
/**
 * @summary RangeProblem_reversed
 * @constant
 * @type {number}
 */
export const RangeProblem_reversed: RangeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RangeProblem_reversed */

/* START_OF_SYMBOL_DEFINITION reversed */
/**
 * @summary RangeProblem_reversed
 * @constant
 * @type {number}
 */
export const reversed: RangeProblem = RangeProblem_reversed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reversed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeProblem */

/* START_OF_SYMBOL_DEFINITION _decode_RangeProblem */
export const _decode_RangeProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RangeProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeProblem */

/* START_OF_SYMBOL_DEFINITION _encode_RangeProblem */
export const _encode_RangeProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RangeProblem */

/* eslint-enable */
