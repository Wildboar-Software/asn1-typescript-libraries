/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activateServiceFiltering } from "../IN-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";
// export { activateServiceFiltering } from "../IN-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";


/**
 * @summary ScfToSsfServiceManagementInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfServiceManagementInvokable OPERATION ::= {activateServiceFiltering}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfServiceManagementInvokable: (OPERATION)[] = [ activateServiceFiltering, ];

/* eslint-enable */
