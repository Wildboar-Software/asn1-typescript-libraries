/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { serviceFilteringResponse } from "../IN-CS3-SSF-SCF-ops-args/serviceFilteringResponse.oa.mjs";
// export { serviceFilteringResponse } from "../IN-CS3-SSF-SCF-ops-args/serviceFilteringResponse.oa.mjs";


/**
 * @summary SsfToScfServiceManagementInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SsfToScfServiceManagementInvokable OPERATION ::= {serviceFilteringResponse}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SsfToScfServiceManagementInvokable: (OPERATION)[] = [ serviceFilteringResponse, ];

/* eslint-enable */
