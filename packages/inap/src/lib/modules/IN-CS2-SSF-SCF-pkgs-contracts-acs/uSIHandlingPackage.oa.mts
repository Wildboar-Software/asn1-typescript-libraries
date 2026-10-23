/* eslint-disable */
import { requestReportUTSI } from "../IN-CS2-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
// export { requestReportUTSI } from "../IN-CS2-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
import { sendSTUI } from "../IN-CS2-SSF-SCF-ops-args/sendSTUI.oa.mjs";
// export { sendSTUI } from "../IN-CS2-SSF-SCF-ops-args/sendSTUI.oa.mjs";
import { reportUTSI } from "../IN-CS2-SSF-SCF-ops-args/reportUTSI.oa.mjs";
// export { reportUTSI } from "../IN-CS2-SSF-SCF-ops-args/reportUTSI.oa.mjs";
import { id_package_uSIHandling } from "../IN-CS2-object-identifiers/id-package-uSIHandling.va.mjs";
// export { id_package_uSIHandling } from "../IN-CS2-object-identifiers/id-package-uSIHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary uSIHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uSIHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {requestReportUTSI | sendSTUI}
 *   SUPPLIER INVOKES  {reportUTSI}
 *   ID                id-package-uSIHandling
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const uSIHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestReportUTSI, sendSTUI, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ reportUTSI, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_uSIHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
