/* eslint-disable */
import { read } from "../DirectoryAbstractService/read.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedRead
 * @description
 *
 * `chained{read}`. Same opcode as DAP `read`. `dsaReferral` instead of
 * `referral`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedRead               OPERATION ::= chained{read}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedRead: ChainedOperation = chained(read);

/* eslint-enable */
