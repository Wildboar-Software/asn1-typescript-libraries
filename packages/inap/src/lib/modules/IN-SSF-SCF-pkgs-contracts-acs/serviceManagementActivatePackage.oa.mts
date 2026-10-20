/* eslint-disable */
import { activateServiceFiltering } from "../IN-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";
// export { activateServiceFiltering } from "../IN-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";
import { id_package_serviceManagementActivate } from "../IN-object-identifiers/id-package-serviceManagementActivate.va.mjs";
// export { id_package_serviceManagementActivate } from "../IN-object-identifiers/id-package-serviceManagementActivate.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary serviceManagementActivatePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceManagementActivatePackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {activateServiceFiltering}
 *   ID                id-package-serviceManagementActivate
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const serviceManagementActivatePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ activateServiceFiltering, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_serviceManagementActivate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
