/* eslint-disable */
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
/**
 * @summary chainedAbandon
 * @description
 *
 * Not wrapped in `chained{}`: `chainedAbandon OPERATION ::= abandon`.
 * Never obliged to issue or honour. Success ⇒ subject operation
 * returns `abandoned`; failure ⇒ `abandonFailed`. May be used when
 * the original op was abandoned, the association broke, or a parallel
 * chain already answered.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAbandon            OPERATION ::= abandon
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAbandon: OPERATION = abandon;

/* eslint-enable */
