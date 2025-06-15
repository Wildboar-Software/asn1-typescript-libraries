/* eslint-disable */
import { ldapTransport } from "../DirectoryAbstractService/ldapTransport.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedLdapTransport
 * @description
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
