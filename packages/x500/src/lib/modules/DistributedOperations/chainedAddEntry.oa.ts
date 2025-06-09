/* eslint-disable */
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.js";
import { chained } from "../DistributedOperations/chained.oa.js";
import type { ChainedOperation } from "./chained.oa.js";

/* START_OF_SYMBOL_DEFINITION chainedAddEntry */
/**
 * @summary chainedAddEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAddEntry           OPERATION ::= chained{addEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAddEntry: ChainedOperation = chained(addEntry);
/* END_OF_SYMBOL_DEFINITION chainedAddEntry */

/* eslint-enable */
