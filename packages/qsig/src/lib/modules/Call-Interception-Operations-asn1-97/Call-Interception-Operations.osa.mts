/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { cintLegInformation1 } from "../Call-Interception-Operations-asn1-97/cintLegInformation1.oa.mjs";
import { cintLegInformation2 } from "../Call-Interception-Operations-asn1-97/cintLegInformation2.oa.mjs";
import { cintCondition } from "../Call-Interception-Operations-asn1-97/cintCondition.oa.mjs";
import { cintDisable } from "../Call-Interception-Operations-asn1-97/cintDisable.oa.mjs";
import { cintEnable } from "../Call-Interception-Operations-asn1-97/cintEnable.oa.mjs";

/**
 * @summary Call_Interception_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Interception-Operations OPERATION ::= {
 *     cintLegInformation1
 *     | cintLegInformation2
 *     | cintCondition
 *     | cintDisable
 *     | cintEnable
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Call_Interception_Operations: (OPERATION)[] = [ cintLegInformation1, cintLegInformation2, cintCondition, cintDisable, cintEnable, ];

/* eslint-enable */
