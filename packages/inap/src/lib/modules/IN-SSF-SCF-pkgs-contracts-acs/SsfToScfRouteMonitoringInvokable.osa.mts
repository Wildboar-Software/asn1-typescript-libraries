/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { monitorRouteReport } from "../IN-SSF-SCF-ops-args/monitorRouteReport.oa.mjs";
// export { monitorRouteReport } from "../IN-SSF-SCF-ops-args/monitorRouteReport.oa.mjs";


/**
 * @summary SsfToScfRouteMonitoringInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SsfToScfRouteMonitoringInvokable OPERATION ::= {monitorRouteReport}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SsfToScfRouteMonitoringInvokable: (OPERATION)[] = [ monitorRouteReport, ];

/* eslint-enable */
