/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
/* START_OF_SYMBOL_DEFINITION chainedAbandon */
/**
 * @summary chainedAbandon
 * @description
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
/* END_OF_SYMBOL_DEFINITION chainedAbandon */

/* eslint-enable */
