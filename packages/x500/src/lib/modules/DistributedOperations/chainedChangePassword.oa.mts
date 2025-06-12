/* eslint-disable */
import { changePassword } from "../DirectoryAbstractService/changePassword.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/* START_OF_SYMBOL_DEFINITION chainedChangePassword */
/**
 * @summary chainedChangePassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedChangePassword     OPERATION ::= chained{changePassword}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedChangePassword: ChainedOperation = chained(changePassword);
/* END_OF_SYMBOL_DEFINITION chainedChangePassword */

/* eslint-enable */
