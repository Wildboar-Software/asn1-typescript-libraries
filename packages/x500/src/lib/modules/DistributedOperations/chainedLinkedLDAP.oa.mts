/* eslint-disable */
import { linkedLDAP } from "../DirectoryAbstractService/linkedLDAP.oa.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
import type { ChainedOperation } from "./chained.oa.mjs";

/* START_OF_SYMBOL_DEFINITION chainedLinkedLDAP */
/**
 * @summary chainedLinkedLDAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedLinkedLDAP         OPERATION ::= chained{linkedLDAP}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedLinkedLDAP: ChainedOperation = chained(linkedLDAP);
/* END_OF_SYMBOL_DEFINITION chainedLinkedLDAP */

/* eslint-enable */
