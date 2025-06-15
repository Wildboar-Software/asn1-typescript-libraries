/* eslint-disable */
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedModifyEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedModifyEntry        OPERATION ::= chained{modifyEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedModifyEntry: ChainedOperation = chained(modifyEntry);

/* eslint-enable */
