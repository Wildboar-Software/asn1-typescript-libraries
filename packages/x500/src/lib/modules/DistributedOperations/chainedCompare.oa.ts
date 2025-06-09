/* eslint-disable */
import { compare } from "../DirectoryAbstractService/compare.oa.js";
import { chained } from "../DistributedOperations/chained.oa.js";
import type { ChainedOperation } from "./chained.oa.js";

/* START_OF_SYMBOL_DEFINITION chainedCompare */
/**
 * @summary chainedCompare
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedCompare            OPERATION ::= chained{compare}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedCompare: ChainedOperation = chained(compare);
/* END_OF_SYMBOL_DEFINITION chainedCompare */

/* eslint-enable */
