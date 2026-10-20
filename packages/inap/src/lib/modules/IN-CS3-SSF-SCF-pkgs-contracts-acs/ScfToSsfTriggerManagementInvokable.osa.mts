/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { createOrRemoveTriggerData } from "../IN-CS3-SSF-SCF-ops-args/createOrRemoveTriggerData.oa.mjs";
// export { createOrRemoveTriggerData } from "../IN-CS3-SSF-SCF-ops-args/createOrRemoveTriggerData.oa.mjs";
import { manageTriggerData } from "../IN-CS3-SSF-SCF-ops-args/manageTriggerData.oa.mjs";
// export { manageTriggerData } from "../IN-CS3-SSF-SCF-ops-args/manageTriggerData.oa.mjs";


/**
 * @summary ScfToSsfTriggerManagementInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfTriggerManagementInvokable OPERATION ::= {createOrRemoveTriggerData |
 *    manageTriggerData}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfTriggerManagementInvokable: (OPERATION)[] = [ createOrRemoveTriggerData, manageTriggerData, ];

/* eslint-enable */
