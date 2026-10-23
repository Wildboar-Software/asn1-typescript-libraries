/* eslint-disable */
import { callGap } from "../IN-SSF-SCF-ops-args/callGap.oa.mjs";
// export { callGap } from "../IN-SSF-SCF-ops-args/callGap.oa.mjs";
import { id_package_iNTrafficManagement } from "../IN-object-identifiers/id-package-iNTrafficManagement.va.mjs";
// export { id_package_iNTrafficManagement } from "../IN-object-identifiers/id-package-iNTrafficManagement.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary iNTrafficManagementPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iNTrafficManagementPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {callGap}
 *   ID                id-package-iNTrafficManagement
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const iNTrafficManagementPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ callGap, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_iNTrafficManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
