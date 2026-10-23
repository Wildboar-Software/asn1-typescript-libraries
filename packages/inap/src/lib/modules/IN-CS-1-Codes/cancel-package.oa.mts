/* eslint-disable */
import { cancel } from "../IN-CS-1-Operations/cancel.oa.mjs";
// export { cancel } from "../IN-CS-1-Operations/cancel.oa.mjs";
import { cancelStatusReportRequest } from "../IN-CS-1-Operations/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-CS-1-Operations/cancelStatusReportRequest.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cancel_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancel-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF/SRF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {cancel | cancelStatusReportRequest}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cancel_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ cancel, cancelStatusReportRequest, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
