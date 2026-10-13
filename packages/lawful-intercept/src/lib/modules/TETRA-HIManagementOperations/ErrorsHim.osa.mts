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
