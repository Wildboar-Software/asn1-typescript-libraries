/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
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
 * Errors of `tetra-sending-of-IRI`: `unknown-version`, `missing-parameter`,
 * `unknown-parameter-value`, and `unknown-parameter`. The LEMF may send these
 * when an operation or a parameter is misunderstood. Annex C returns one of
 * them in `RO_Error`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause C.1.2.2, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
