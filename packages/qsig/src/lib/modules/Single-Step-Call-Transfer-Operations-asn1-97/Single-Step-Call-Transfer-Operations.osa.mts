/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ssctInitiate } from "../Single-Step-Call-Transfer-Operations-asn1-97/ssctInitiate.oa.mjs";
import { ssctSetup } from "../Single-Step-Call-Transfer-Operations-asn1-97/ssctSetup.oa.mjs";
import { ssctPostDial } from "../Single-Step-Call-Transfer-Operations-asn1-97/ssctPostDial.oa.mjs";
import { ssctDigitInfo } from "../Single-Step-Call-Transfer-Operations-asn1-97/ssctDigitInfo.oa.mjs";

/**
 * @summary Single_Step_Call_Transfer_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Single-Step-Call-Transfer-Operations OPERATION ::= {
 *     ssctInitiate
 *     | ssctSetup
 *     | ssctPostDial
 *     | ssctDigitInfo
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Single_Step_Call_Transfer_Operations: (OPERATION)[] = [ ssctInitiate, ssctSetup, ssctPostDial, ssctDigitInfo, ];

/* eslint-enable */
