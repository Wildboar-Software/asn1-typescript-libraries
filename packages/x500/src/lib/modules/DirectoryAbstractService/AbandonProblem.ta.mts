/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AbandonProblem
 * @description
 *
 * INTEGER, not ENUMERATED (unknown values possible). No 0.
 * `noSuchOperation` (1) = never existed or forgotten.
 * `tooLate` (2) = already responded (Abandon racing completion may return
 * this plus the actual error). `cannotAbandon` (3) = e.g. modify, or
 * could not perform.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonProblem  ::=  INTEGER {
 *   noSuchOperation (1),
 *   tooLate         (2),
 *   cannotAbandon   (3) }
 * ```
 */
export type AbandonProblem = INTEGER;

/**
 * @summary AbandonProblem_noSuchOperation
 * @description
 *
 * Never existed or forgotten.
 *
 * @constant
 * @type {number}
 */
export const AbandonProblem_noSuchOperation: 1 = 1 satisfies AbandonProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_noSuchOperation
 * @description
 *
 * Never existed or forgotten.
 *
 * @constant
 * @type {number}
 */
export const noSuchOperation: 1 = AbandonProblem_noSuchOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_tooLate
 * @description
 *
 * Already responded. If Abandon races completion, Directory may return
 * this plus the actual error.
 *
 * @constant
 * @type {number}
 */
export const AbandonProblem_tooLate: 2 = 2 satisfies AbandonProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_tooLate
 * @description
 *
 * Already responded. If Abandon races completion, Directory may return
 * this plus the actual error.
 *
 * @constant
 * @type {number}
 */
export const tooLate: 2 = AbandonProblem_tooLate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_cannotAbandon
 * @description
 *
 * E.g. modify (enquiry ops only), or could not perform.
 *
 * @constant
 * @type {number}
 */
export const AbandonProblem_cannotAbandon: 3 = 3 satisfies AbandonProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_cannotAbandon
 * @description
 *
 * E.g. modify (enquiry ops only), or could not perform.
 *
 * @constant
 * @type {number}
 */
export const cannotAbandon: 3 = AbandonProblem_cannotAbandon; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AbandonProblem: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_AbandonProblem: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
