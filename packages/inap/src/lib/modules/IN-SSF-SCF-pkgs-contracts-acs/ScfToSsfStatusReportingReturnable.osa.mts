/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { cancelStatusReportRequest } from "../IN-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
import { requestCurrentStatusReport } from "../IN-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
import { statusReport } from "../IN-SSF-SCF-ops-args/statusReport.oa.mjs";
// export { statusReport } from "../IN-SSF-SCF-ops-args/statusReport.oa.mjs";


/**
 * @summary ScfToSsfStatusReportingReturnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfStatusReportingReturnable OPERATION ::= {cancelStatusReportRequest |
 *    requestCurrentStatusReport |
 *    requestEveryStatusChangeReport |
 *    requestFirstStatusMatchReport |
 *    statusReport}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfStatusReportingReturnable: (OPERATION)[] = [ cancelStatusReportRequest, requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, statusReport, ];

/* eslint-enable */
