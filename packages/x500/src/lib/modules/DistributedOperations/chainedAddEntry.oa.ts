/* eslint-disable */
import { addEntry } from "../DirectoryAbstractService/addEntry.oa";
import { chained } from "../DistributedOperations/chained.oa";
import type { ChainedOperation } from "./chained.oa";

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
