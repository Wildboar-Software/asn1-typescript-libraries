/* eslint-disable */
import { compare } from "../DirectoryAbstractService/compare.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedCompare
 * @description
 *
 * `chained{compare}`. Same opcode as DAP `compare`. `dsaReferral`
 * instead of `referral`.
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

/* eslint-enable */
