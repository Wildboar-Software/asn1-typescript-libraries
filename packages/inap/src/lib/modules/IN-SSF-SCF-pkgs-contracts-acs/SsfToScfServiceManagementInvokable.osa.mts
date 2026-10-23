/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { serviceFilteringResponse } from "../IN-SSF-SCF-ops-args/serviceFilteringResponse.oa.mjs";
// export { serviceFilteringResponse } from "../IN-SSF-SCF-ops-args/serviceFilteringResponse.oa.mjs";


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
