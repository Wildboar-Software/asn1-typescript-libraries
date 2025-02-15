/* eslint-disable */
import { ldapTransport } from "../DirectoryAbstractService/ldapTransport.oa";
import { chained } from "../DistributedOperations/chained.oa";
import type { ChainedOperation } from "./chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedLdapTransport */
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
/* END_OF_SYMBOL_DEFINITION chainedLdapTransport */

/* eslint-enable */
