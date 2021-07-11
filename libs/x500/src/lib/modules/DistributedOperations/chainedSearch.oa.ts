/* eslint-disable */
import { search } from "../DirectoryAbstractService/search.oa";
import { chained } from "../DistributedOperations/chained.oa";
import type { ChainedOperation } from "./chained.oa";

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
