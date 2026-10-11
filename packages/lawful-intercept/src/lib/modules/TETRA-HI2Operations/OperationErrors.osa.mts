/* eslint-disable */
import { unknown_version } from "../TETRA-HI2Operations/unknown-version.oa.mjs";
// export { unknown_version } from "../TETRA-HI2Operations/unknown-version.oa.mjs";
import { missing_parameter } from "../TETRA-HI2Operations/missing-parameter.oa.mjs";
// export { missing_parameter } from "../TETRA-HI2Operations/missing-parameter.oa.mjs";
import { unknown_parameter_value } from "../TETRA-HI2Operations/unknown-parameter-value.oa.mjs";
// export { unknown_parameter_value } from "../TETRA-HI2Operations/unknown-parameter-value.oa.mjs";
import { unknown_parameter } from "../TETRA-HI2Operations/unknown-parameter.oa.mjs";
// export { unknown_parameter } from "../TETRA-HI2Operations/unknown-parameter.oa.mjs";


/**
 * @summary OperationErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationErrors         ERROR ::= {
 *     unknown-version | 
 *     missing-parameter | 
 *     unknown-parameter-value | 
 *     unknown-parameter 
 * }
 * ```
 * 
 * @constant
 * @type {ERROR[]}
 * 
 */
export
const OperationErrors: (ERROR)[] = [ unknown_version, missing_parameter, unknown_parameter_value, unknown_parameter, ];

/* eslint-enable */
