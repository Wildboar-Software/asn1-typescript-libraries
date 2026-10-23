/* eslint-disable */
import { statusReport } from "../IN-CS-1-Operations/statusReport.oa.mjs";
// export { statusReport } from "../IN-CS-1-Operations/statusReport.oa.mjs";
import { requestCurrentStatusReport } from "../IN-CS-1-Operations/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-CS-1-Operations/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-CS-1-Operations/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-CS-1-Operations/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-CS-1-Operations/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-CS-1-Operations/requestFirstStatusMatchReport.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary status_reporting_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * status-reporting-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES  {statusReport}
 *   -- supplier is SCF
 *   SUPPLIER INVOKES
 *     {requestCurrentStatusReport | requestEveryStatusChangeReport |
 *       requestFirstStatusMatchReport}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const status_reporting_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ statusReport, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
