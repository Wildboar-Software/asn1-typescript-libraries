/* eslint-disable */
import { setServiceProfile } from "../IN-SSF-SCF-ops-args/setServiceProfile.oa.mjs";
// export { setServiceProfile } from "../IN-SSF-SCF-ops-args/setServiceProfile.oa.mjs";
import { id_package_triggerCallManagement } from "../IN-object-identifiers/id-package-triggerCallManagement.va.mjs";
// export { id_package_triggerCallManagement } from "../IN-object-identifiers/id-package-triggerCallManagement.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary triggerCallManagementPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * triggerCallManagementPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {setServiceProfile}
 *   ID                id-package-triggerCallManagement
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const triggerCallManagementPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ setServiceProfile, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_triggerCallManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
