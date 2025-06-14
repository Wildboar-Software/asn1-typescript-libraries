/* eslint-disable */
import { QC_STATEMENT } from "../PKIXqualified97/QC-STATEMENT.oca.mjs";
import { qcStatement_1 } from "../PKIXqualified97/qcStatement-1.oa.mjs";
import { qcStatement_2 } from "../PKIXqualified97/qcStatement-2.oa.mjs";
/* START_OF_SYMBOL_DEFINITION SupportedStatements */
/**
 * @summary SupportedStatements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedStatements QC-STATEMENT ::= {
 *     qcStatement-1 |
 *     qcStatement-2 , ... -- For future extensions -- }
 * ```
 *
 * @constant
 * @type {QC_STATEMENT[]}
 *
 */
export const SupportedStatements: QC_STATEMENT[] = [
    qcStatement_1,
    qcStatement_2,
];
/* END_OF_SYMBOL_DEFINITION SupportedStatements */

/* eslint-enable */
