/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callFiltering } from "../IN-SSF-SCF-ops-args/callFiltering.oa.mjs";
// export { callFiltering } from "../IN-SSF-SCF-ops-args/callFiltering.oa.mjs";


/**
 * @summary ScfToSsfTrafficManagementInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfTrafficManagementInvokable OPERATION ::= {callFiltering}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfTrafficManagementInvokable: (OPERATION)[] = [ callFiltering, ];

/* eslint-enable */
