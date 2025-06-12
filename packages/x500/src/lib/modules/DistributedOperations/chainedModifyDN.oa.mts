/* eslint-disable */
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/* START_OF_SYMBOL_DEFINITION chainedModifyDN */
/**
 * @summary chainedModifyDN
 * @description
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
/* END_OF_SYMBOL_DEFINITION chainedModifyDN */

/* eslint-enable */
