/* eslint-disable */
import { serviceFilteringResponse } from "../IN-CS2-SSF-SCF-ops-args/serviceFilteringResponse.oa.mjs";
// export { serviceFilteringResponse } from "../IN-CS2-SSF-SCF-ops-args/serviceFilteringResponse.oa.mjs";
import { id_package_serviceManagementResponse } from "../IN-CS2-object-identifiers/id-package-serviceManagementResponse.va.mjs";
// export { id_package_serviceManagementResponse } from "../IN-CS2-object-identifiers/id-package-serviceManagementResponse.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary serviceManagementResponsePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceManagementResponsePackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {serviceFilteringResponse}
 *   ID                id-package-serviceManagementResponse
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const serviceManagementResponsePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ serviceFilteringResponse, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_serviceManagementResponse /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
