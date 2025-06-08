/* eslint-disable */
import { changePassword } from "../DirectoryAbstractService/changePassword.oa";
import { chained } from "../DistributedOperations/chained.oa";
import type { ChainedOperation } from "./chained.oa";

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
