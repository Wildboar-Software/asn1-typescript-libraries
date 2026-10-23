/* eslint-disable */
import { callGap } from "../IN-CS2-SSF-SCF-ops-args/callGap.oa.mjs";
// export { callGap } from "../IN-CS2-SSF-SCF-ops-args/callGap.oa.mjs";
import { id_package_trafficManagement } from "../IN-CS2-object-identifiers/id-package-trafficManagement.va.mjs";
// export { id_package_trafficManagement } from "../IN-CS2-object-identifiers/id-package-trafficManagement.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary trafficManagementPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * trafficManagementPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {callGap}
 *   ID                id-package-trafficManagement
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const trafficManagementPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ callGap, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_trafficManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
