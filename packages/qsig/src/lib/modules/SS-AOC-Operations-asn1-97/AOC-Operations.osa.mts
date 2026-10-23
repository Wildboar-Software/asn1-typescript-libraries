/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { chargeRequest } from "../SS-AOC-Operations-asn1-97/chargeRequest.oa.mjs";
import { getFinalCharge } from "../SS-AOC-Operations-asn1-97/getFinalCharge.oa.mjs";
import { aocFinal } from "../SS-AOC-Operations-asn1-97/aocFinal.oa.mjs";
import { aocInterim } from "../SS-AOC-Operations-asn1-97/aocInterim.oa.mjs";
import { aocRate } from "../SS-AOC-Operations-asn1-97/aocRate.oa.mjs";
import { aocComplete } from "../SS-AOC-Operations-asn1-97/aocComplete.oa.mjs";
import { aocDivChargeReq } from "../SS-AOC-Operations-asn1-97/aocDivChargeReq.oa.mjs";

/**
 * @summary AOC_Operations
 * @description
 *
 * Object set of the SS-AOC operations (ECMA-212 §6.3.1): `chargeRequest`,
 * `getFinalCharge`, `aocFinal`, `aocInterim`, `aocRate`, `aocComplete`, and
 * `aocDivChargeReq`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
