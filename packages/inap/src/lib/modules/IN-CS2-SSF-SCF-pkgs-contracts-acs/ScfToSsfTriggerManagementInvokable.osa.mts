/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { manageTriggerData } from "../IN-CS2-SSF-SCF-ops-args/manageTriggerData.oa.mjs";
// export { manageTriggerData } from "../IN-CS2-SSF-SCF-ops-args/manageTriggerData.oa.mjs";


/**
 * @summary ScfToSsfTriggerManagementInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfTriggerManagementInvokable OPERATION ::= {manageTriggerData}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfTriggerManagementInvokable: (OPERATION)[] = [ manageTriggerData, ];

/* eslint-enable */
