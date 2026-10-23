/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callGap } from "../IN-CS2-SSF-SCF-ops-args/callGap.oa.mjs";
// export { callGap } from "../IN-CS2-SSF-SCF-ops-args/callGap.oa.mjs";


/**
 * @summary ScfToSsfTrafficManagementInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfTrafficManagementInvokable OPERATION ::= {callGap}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfTrafficManagementInvokable: (OPERATION)[] = [ callGap, ];

/* eslint-enable */
