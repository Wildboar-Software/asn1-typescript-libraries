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

/* START_OF_SYMBOL_DEFINITION SequenceNumberProblem */
/**
 * @summary SequenceNumberProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumberProblem  ::=  INTEGER {no-such-entry(0)}(0..ub-error-reasons)
 * ```
 */
export type SequenceNumberProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION SequenceNumberProblem */

/* START_OF_SYMBOL_DEFINITION SequenceNumberProblem_no_such_entry */
/**
 * @summary SequenceNumberProblem_no_such_entry
 * @constant
 * @type {number}
 */
export const SequenceNumberProblem_no_such_entry: SequenceNumberProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SequenceNumberProblem_no_such_entry */

/* START_OF_SYMBOL_DEFINITION no_such_entry */
/**
 * @summary SequenceNumberProblem_no_such_entry
 * @constant
 * @type {number}
 */
export const no_such_entry: SequenceNumberProblem = SequenceNumberProblem_no_such_entry; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_such_entry */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumberProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumberProblem */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceNumberProblem */
export const _decode_SequenceNumberProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SequenceNumberProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumberProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumberProblem */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceNumberProblem */
export const _encode_SequenceNumberProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SequenceNumberProblem */

/* eslint-enable */
