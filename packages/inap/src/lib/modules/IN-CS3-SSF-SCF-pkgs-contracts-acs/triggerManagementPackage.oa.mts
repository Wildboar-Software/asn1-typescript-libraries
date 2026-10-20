/* eslint-disable */
import { createOrRemoveTriggerData } from "../IN-CS3-SSF-SCF-ops-args/createOrRemoveTriggerData.oa.mjs";
// export { createOrRemoveTriggerData } from "../IN-CS3-SSF-SCF-ops-args/createOrRemoveTriggerData.oa.mjs";
import { manageTriggerData } from "../IN-CS3-SSF-SCF-ops-args/manageTriggerData.oa.mjs";
// export { manageTriggerData } from "../IN-CS3-SSF-SCF-ops-args/manageTriggerData.oa.mjs";
import { id_package_triggerManagement } from "../IN-CS3-object-identifiers/id-package-triggerManagement.va.mjs";
// export { id_package_triggerManagement } from "../IN-CS3-object-identifiers/id-package-triggerManagement.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary triggerManagementPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * triggerManagementPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {createOrRemoveTriggerData | manageTriggerData}
 *   ID                id-package-triggerManagement
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const triggerManagementPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ createOrRemoveTriggerData, manageTriggerData, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_triggerManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
