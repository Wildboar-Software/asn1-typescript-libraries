/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { manageTriggerData } from "../IN-CS2-SSF-SCF-ops-args/manageTriggerData.oa.mjs";
// export { manageTriggerData } from "../IN-CS2-SSF-SCF-ops-args/manageTriggerData.oa.mjs";


/**
 * @summary ScfToSsfTriggerManagementReturnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfTriggerManagementReturnable OPERATION ::= {manageTriggerData}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfTriggerManagementReturnable: (OPERATION)[] = [ manageTriggerData, ];

/* eslint-enable */
