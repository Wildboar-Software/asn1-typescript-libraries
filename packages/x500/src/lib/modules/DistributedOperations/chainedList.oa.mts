/* eslint-disable */
import { list } from "../DirectoryAbstractService/list.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/**
 * @summary chainedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedList               OPERATION ::= chained{list}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedList: ChainedOperation = chained(list);

/* eslint-enable */
