/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { chargeRequest } from "../SS-AOC-Operations-asn1-97/chargeRequest.oa.mjs";
// export { chargeRequest } from "../SS-AOC-Operations-asn1-97/chargeRequest.oa.mjs";
import { getFinalCharge } from "../SS-AOC-Operations-asn1-97/getFinalCharge.oa.mjs";
// export { getFinalCharge } from "../SS-AOC-Operations-asn1-97/getFinalCharge.oa.mjs";
import { aocFinal } from "../SS-AOC-Operations-asn1-97/aocFinal.oa.mjs";
// export { aocFinal } from "../SS-AOC-Operations-asn1-97/aocFinal.oa.mjs";
import { aocInterim } from "../SS-AOC-Operations-asn1-97/aocInterim.oa.mjs";
// export { aocInterim } from "../SS-AOC-Operations-asn1-97/aocInterim.oa.mjs";
import { aocRate } from "../SS-AOC-Operations-asn1-97/aocRate.oa.mjs";
// export { aocRate } from "../SS-AOC-Operations-asn1-97/aocRate.oa.mjs";
import { aocComplete } from "../SS-AOC-Operations-asn1-97/aocComplete.oa.mjs";
// export { aocComplete } from "../SS-AOC-Operations-asn1-97/aocComplete.oa.mjs";
import { aocDivChargeReq } from "../SS-AOC-Operations-asn1-97/aocDivChargeReq.oa.mjs";
// export { aocDivChargeReq } from "../SS-AOC-Operations-asn1-97/aocDivChargeReq.oa.mjs";


/**
 * @summary AOC_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AOC-Operations OPERATION ::= {
 *     chargeRequest
 *     | getFinalCharge
 *     | aocFinal
 *     | aocInterim
 *     | aocRate
 *     | aocComplete
 *     | aocDivChargeReq
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const AOC_Operations: (OPERATION)[] = [ chargeRequest, getFinalCharge, aocFinal, aocInterim, aocRate, aocComplete, aocDivChargeReq, ];

/* eslint-enable */
