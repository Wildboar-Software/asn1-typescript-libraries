/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callGap } from "../IN-SSF-SCF-ops-args/callGap.oa.mjs";
// export { callGap } from "../IN-SSF-SCF-ops-args/callGap.oa.mjs";


/**
 * @summary ScfToSsfINTrafficManagementInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfINTrafficManagementInvokable OPERATION ::= {callGap}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfINTrafficManagementInvokable: (OPERATION)[] = [ callGap, ];

/* eslint-enable */
