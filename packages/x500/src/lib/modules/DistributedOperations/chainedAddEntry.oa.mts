/* eslint-disable */
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

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
