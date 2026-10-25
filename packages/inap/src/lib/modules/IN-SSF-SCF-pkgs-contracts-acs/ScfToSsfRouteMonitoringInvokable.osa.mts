/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { monitorRouteRequest } from "../IN-SSF-SCF-ops-args/monitorRouteRequest.oa.mjs";
// export { monitorRouteRequest } from "../IN-SSF-SCF-ops-args/monitorRouteRequest.oa.mjs";


/**
 * @summary ScfToSsfRouteMonitoringInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfRouteMonitoringInvokable OPERATION ::= {monitorRouteRequest}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfRouteMonitoringInvokable: (OPERATION)[] = [ monitorRouteRequest, ];

/* eslint-enable */
