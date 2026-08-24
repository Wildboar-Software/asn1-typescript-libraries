/* eslint-disable */
import { linkedLDAP } from "../DirectoryAbstractService/linkedLDAP.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedLinkedLDAP
 * @description
 *
 * `chained{linkedLDAP}`. Same opcode as DAP `linkedLDAP`.
 * `dsaReferral` instead of `referral`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedLinkedLDAP         OPERATION ::= chained{linkedLDAP}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedLinkedLDAP: ChainedOperation = chained(linkedLDAP);

/* eslint-enable */
