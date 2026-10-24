/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activateServiceFiltering } from "../IN-CS2-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";
// export { activateServiceFiltering } from "../IN-CS2-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";


/**
 * @summary ScfToSsfServiceManagementReturnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfServiceManagementReturnable OPERATION ::= {activateServiceFiltering}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfServiceManagementReturnable: (OPERATION)[] = [ activateServiceFiltering, ];

/* eslint-enable */
