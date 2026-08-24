/* eslint-disable */
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedRemoveEntry
 * @description
 *
 * `chained{removeEntry}`. Same opcode as DAP `removeEntry`.
 * `dsaReferral` instead of `referral`.
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

/* eslint-enable */
