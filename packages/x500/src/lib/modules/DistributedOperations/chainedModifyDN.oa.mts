/* eslint-disable */
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedModifyDN
 * @description
 *
 * `chained{modifyDN}`. Same opcode as DAP `modifyDN`. `dsaReferral`
 * instead of `referral`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedModifyDN           OPERATION ::= chained{modifyDN}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedModifyDN: ChainedOperation = chained(modifyDN);

/* eslint-enable */
