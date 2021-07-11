/* eslint-disable */
import { administerPassword } from "../DirectoryAbstractService/administerPassword.oa";
import { chained } from "../DistributedOperations/chained.oa";
import type { ChainedOperation } from "./chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedAdministerPassword */
/**
 * @summary chainedAdministerPassword
 * @description
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
/* END_OF_SYMBOL_DEFINITION chainedAdministerPassword */

/* eslint-enable */
