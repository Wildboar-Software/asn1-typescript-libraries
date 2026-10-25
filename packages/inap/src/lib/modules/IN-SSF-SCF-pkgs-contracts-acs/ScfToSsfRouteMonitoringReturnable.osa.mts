/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { monitorRouteRequest } from "../IN-SSF-SCF-ops-args/monitorRouteRequest.oa.mjs";
// export { monitorRouteRequest } from "../IN-SSF-SCF-ops-args/monitorRouteRequest.oa.mjs";


/**
 * @summary ScfToSsfRouteMonitoringReturnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfRouteMonitoringReturnable OPERATION ::= {monitorRouteRequest}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfRouteMonitoringReturnable: (OPERATION)[] = [ monitorRouteRequest, ];

/* eslint-enable */
