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

/**
 * @summary SequenceNumberProblem_no_such_entry
 * @constant
 * @type {number}
 */
export const SequenceNumberProblem_no_such_entry: SequenceNumberProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceNumberProblem_no_such_entry
 * @constant
 * @type {number}
 */
export const no_such_entry: SequenceNumberProblem = SequenceNumberProblem_no_such_entry; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SequenceNumberProblem = $._decodeInteger;


export const _encode_SequenceNumberProblem = $._encodeInteger;


/* eslint-enable */
