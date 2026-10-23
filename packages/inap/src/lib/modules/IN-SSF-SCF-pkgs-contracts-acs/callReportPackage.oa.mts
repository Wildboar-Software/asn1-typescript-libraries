/* eslint-disable */
import { callInformationRequest } from "../IN-SSF-SCF-ops-args/callInformationRequest.oa.mjs";
// export { callInformationRequest } from "../IN-SSF-SCF-ops-args/callInformationRequest.oa.mjs";
import { callInformationReport } from "../IN-SSF-SCF-ops-args/callInformationReport.oa.mjs";
// export { callInformationReport } from "../IN-SSF-SCF-ops-args/callInformationReport.oa.mjs";
import { id_package_callReport } from "../IN-object-identifiers/id-package-callReport.va.mjs";
// export { id_package_callReport } from "../IN-object-identifiers/id-package-callReport.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary callReportPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callReportPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {callInformationRequest}
 *   SUPPLIER INVOKES  {callInformationReport}
 *   ID                id-package-callReport
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const callReportPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ callInformationRequest, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ callInformationReport, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_callReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
