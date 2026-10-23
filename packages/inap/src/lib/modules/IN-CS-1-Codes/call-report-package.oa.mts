/* eslint-disable */
import { callInformationReport } from "../IN-CS-1-Operations/callInformationReport.oa.mjs";
// export { callInformationReport } from "../IN-CS-1-Operations/callInformationReport.oa.mjs";
import { callInformationRequest } from "../IN-CS-1-Operations/callInformationRequest.oa.mjs";
// export { callInformationRequest } from "../IN-CS-1-Operations/callInformationRequest.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary call_report_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * call-report-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES  {callInformationReport}
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {callInformationRequest}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const call_report_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ callInformationReport, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ callInformationRequest, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
