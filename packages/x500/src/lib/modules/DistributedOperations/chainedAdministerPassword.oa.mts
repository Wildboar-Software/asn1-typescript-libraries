/* eslint-disable */
import { administerPassword } from "../DirectoryAbstractService/administerPassword.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedAdministerPassword
 * @description
 *
 * `chained{administerPassword}`. Same opcode as DAP
 * `administerPassword`. `dsaReferral` instead of `referral`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAdministerPassword OPERATION ::= chained{administerPassword}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAdministerPassword: ChainedOperation = chained(administerPassword);

/* eslint-enable */
