/* eslint-disable */
import { cancelStatusReportRequest } from "../IN-CS3-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-CS3-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
import { requestCurrentStatusReport } from "../IN-CS3-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-CS3-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-CS3-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-CS3-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-CS3-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-CS3-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
import { statusReport } from "../IN-CS3-SSF-SCF-ops-args/statusReport.oa.mjs";
// export { statusReport } from "../IN-CS3-SSF-SCF-ops-args/statusReport.oa.mjs";
import { id_package_statusReporting } from "../IN-CS3-object-identifiers/id-package-statusReporting.va.mjs";
// export { id_package_statusReporting } from "../IN-CS3-object-identifiers/id-package-statusReporting.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary statusReportingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * statusReportingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {cancelStatusReportRequest | requestCurrentStatusReport |
 *       requestEveryStatusChangeReport |
 *       requestFirstStatusMatchReport}
 *   SUPPLIER INVOKES  {statusReport}
 *   ID                id-package-statusReporting
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const statusReportingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ cancelStatusReportRequest, requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ statusReport, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_statusReporting /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
