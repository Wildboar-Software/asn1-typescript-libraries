/* eslint-disable */
import { linkedLDAP } from "../DirectoryAbstractService/linkedLDAP.oa";
import { chained } from "../DistributedOperations/chained.oa";
import type { ChainedOperation } from "./chained.oa";

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
