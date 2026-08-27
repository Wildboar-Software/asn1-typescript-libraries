/* eslint-disable */
import { type QC_STATEMENT } from "../PKIXqualified97/QC-STATEMENT.oca.mjs";
import { qcStatement_1 } from "../PKIXqualified97/qcStatement-1.oa.mjs";
import { qcStatement_2 } from "../PKIXqualified97/qcStatement-2.oa.mjs";

/**
 * @summary SupportedStatements
 * @description
 *
 * Information object set constraining the QC statements applications
 * are required to recognize: `qcStatement-1`, `qcStatement-2`, and
 * extensible for future statements
 * ([RFC 3739](https://datatracker.ietf.org/doc/html/rfc3739) Appendix A.2).
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

/* eslint-enable */
