/* eslint-disable */
import { search } from "../DirectoryAbstractService/search.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/* START_OF_SYMBOL_DEFINITION chainedSearch */
/**
 * @summary chainedSearch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedSearch             OPERATION ::= chained{search}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedSearch: ChainedOperation = chained(search);
/* END_OF_SYMBOL_DEFINITION chainedSearch */

/* eslint-enable */
