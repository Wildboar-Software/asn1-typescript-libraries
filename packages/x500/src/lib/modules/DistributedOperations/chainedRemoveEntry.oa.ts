/* eslint-disable */
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.js";
import { chained } from "../DistributedOperations/chained.oa.js";
import type { ChainedOperation } from "./chained.oa.js";

/* START_OF_SYMBOL_DEFINITION chainedRemoveEntry */
/**
 * @summary chainedRemoveEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedRemoveEntry        OPERATION ::= chained{removeEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedRemoveEntry: ChainedOperation = chained(removeEntry);
/* END_OF_SYMBOL_DEFINITION chainedRemoveEntry */

/* eslint-enable */
