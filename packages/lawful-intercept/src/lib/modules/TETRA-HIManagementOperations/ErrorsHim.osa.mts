/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { other_failure_causes } from "../TETRA-HIManagementOperations/other-failure-causes.oa.mjs";
// export { other_failure_causes } from "../TETRA-HIManagementOperations/other-failure-causes.oa.mjs";
import { missing_parameter } from "../TETRA-HIManagementOperations/missing-parameter.oa.mjs";
// export { missing_parameter } from "../TETRA-HIManagementOperations/missing-parameter.oa.mjs";
import { unknown_parameter } from "../TETRA-HIManagementOperations/unknown-parameter.oa.mjs";
// export { unknown_parameter } from "../TETRA-HIManagementOperations/unknown-parameter.oa.mjs";
import { erroneous_parameter } from "../TETRA-HIManagementOperations/erroneous-parameter.oa.mjs";
// export { erroneous_parameter } from "../TETRA-HIManagementOperations/erroneous-parameter.oa.mjs";


/**
 * @summary ErrorsHim
 * @description
 *
 * Errors `tETRA-sending-of-Password` may return. `tETRA-data-Link-Test` and
 * `tETRA-end-Of-Connection` list only `other-failure-causes`. Local codes 0 to
 * 3 as in the common management module. Clause D.10.1 applies only to ROSE. The
 * document does not say which condition selects which code.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.1, clause C.1.2.2.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorsHim                ERROR ::= {
 *     other-failure-causes | 
 *     missing-parameter | 
 *     unknown-parameter | 
 *     erroneous-parameter 
 * }
 * ```
 * 
 * @constant
 * @type {ERROR[]}
 * 
 */
export
const ErrorsHim: (ERROR)[] = [ other_failure_causes, missing_parameter, unknown_parameter, erroneous_parameter, ];

/* eslint-enable */
