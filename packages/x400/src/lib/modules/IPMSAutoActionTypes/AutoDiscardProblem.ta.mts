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

/* START_OF_SYMBOL_DEFINITION AutoDiscardProblem */
/**
 * @summary AutoDiscardProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoDiscardProblem  ::=  INTEGER {not-obsoleted-by-originator(0)}
 * ```
 */
export type AutoDiscardProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION AutoDiscardProblem */

/* START_OF_SYMBOL_DEFINITION AutoDiscardProblem_not_obsoleted_by_originator */
/**
 * @summary AutoDiscardProblem_not_obsoleted_by_originator
 * @constant
 * @type {number}
 */
export const AutoDiscardProblem_not_obsoleted_by_originator: AutoDiscardProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoDiscardProblem_not_obsoleted_by_originator */

/* START_OF_SYMBOL_DEFINITION not_obsoleted_by_originator */
/**
 * @summary AutoDiscardProblem_not_obsoleted_by_originator
 * @constant
 * @type {number}
 */
export const not_obsoleted_by_originator: AutoDiscardProblem = AutoDiscardProblem_not_obsoleted_by_originator; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION not_obsoleted_by_originator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoDiscardProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoDiscardProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AutoDiscardProblem */
export const _decode_AutoDiscardProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AutoDiscardProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoDiscardProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoDiscardProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AutoDiscardProblem */
export const _encode_AutoDiscardProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AutoDiscardProblem */

/* eslint-enable */
