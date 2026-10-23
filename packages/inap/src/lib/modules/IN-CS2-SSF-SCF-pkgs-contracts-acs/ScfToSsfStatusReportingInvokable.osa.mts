/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { cancel } from "../IN-CS2-SSF-SCF-ops-args/cancel.oa.mjs";
// export { cancel } from "../IN-CS2-SSF-SCF-ops-args/cancel.oa.mjs";
import { cancelStatusReportRequest } from "../IN-CS2-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-CS2-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
import { requestCurrentStatusReport } from "../IN-CS2-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-CS2-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-CS2-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-CS2-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-CS2-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-CS2-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";


/**
 * @summary ScfToSsfStatusReportingInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfStatusReportingInvokable OPERATION ::= {cancel |
 *    cancelStatusReportRequest |
 *    requestCurrentStatusReport |
 *    requestEveryStatusChangeReport |
 *    requestFirstStatusMatchReport}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfStatusReportingInvokable: (OPERATION)[] = [ cancel, cancelStatusReportRequest, requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, ];

/* eslint-enable */
