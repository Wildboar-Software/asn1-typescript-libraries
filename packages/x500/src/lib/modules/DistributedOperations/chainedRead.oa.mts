/* eslint-disable */
import { read } from "../DirectoryAbstractService/read.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/* START_OF_SYMBOL_DEFINITION chainedRead */
/**
 * @summary chainedRead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedRead               OPERATION ::= chained{read}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedRead: ChainedOperation = chained(read);
/* END_OF_SYMBOL_DEFINITION chainedRead */

/* eslint-enable */
