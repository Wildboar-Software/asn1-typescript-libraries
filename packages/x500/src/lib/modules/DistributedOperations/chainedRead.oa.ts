/* eslint-disable */
import { read } from "../DirectoryAbstractService/read.oa";
import { chained } from "../DistributedOperations/chained.oa";
import type { ChainedOperation } from "./chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedRead */
/**
 * @summary chainedRead
 * @description
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
/* END_OF_SYMBOL_DEFINITION chainedRead */

/* eslint-enable */
