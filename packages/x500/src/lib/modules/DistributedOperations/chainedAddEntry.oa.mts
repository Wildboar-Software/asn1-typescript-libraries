/* eslint-disable */
import { addEntry } from "../DirectoryAbstractService/addEntry.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedAddEntry
 * @description
 *
 * `chained{addEntry}`. Same opcode as DAP `addEntry`. `dsaReferral`
 * instead of `referral`.
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

/* eslint-enable */
