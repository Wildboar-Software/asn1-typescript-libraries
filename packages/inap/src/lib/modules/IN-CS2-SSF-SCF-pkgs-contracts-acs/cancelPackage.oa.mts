/* eslint-disable */
import { cancel } from "../IN-CS2-SSF-SCF-ops-args/cancel.oa.mjs";
// export { cancel } from "../IN-CS2-SSF-SCF-ops-args/cancel.oa.mjs";
import { cancelStatusReportRequest } from "../IN-CS2-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-CS2-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
import { id_package_cancel } from "../IN-CS2-object-identifiers/id-package-cancel.va.mjs";
// export { id_package_cancel } from "../IN-CS2-object-identifiers/id-package-cancel.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cancelPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {cancel | cancelStatusReportRequest}
 *   ID                id-package-cancel
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cancelPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ cancel, cancelStatusReportRequest, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cancel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
