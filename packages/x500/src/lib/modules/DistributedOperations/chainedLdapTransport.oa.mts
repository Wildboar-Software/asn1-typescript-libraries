/* eslint-disable */
import { ldapTransport } from "../DirectoryAbstractService/ldapTransport.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedLdapTransport
 * @description
 *
 * `chained{ldapTransport}`. Same opcode as DAP `ldapTransport`.
 * `dsaReferral` instead of `referral`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedLdapTransport      OPERATION ::= chained{ldapTransport}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedLdapTransport: ChainedOperation = chained(ldapTransport);

/* eslint-enable */
