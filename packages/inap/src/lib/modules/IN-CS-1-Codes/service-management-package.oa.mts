/* eslint-disable */
import { serviceFilteringResponse } from "../IN-CS-1-Operations/serviceFilteringResponse.oa.mjs";
// export { serviceFilteringResponse } from "../IN-CS-1-Operations/serviceFilteringResponse.oa.mjs";
import { activateServiceFiltering } from "../IN-CS-1-Operations/activateServiceFiltering.oa.mjs";
// export { activateServiceFiltering } from "../IN-CS-1-Operations/activateServiceFiltering.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary service_management_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * service-management-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES  {serviceFilteringResponse}
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {activateServiceFiltering}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const service_management_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ serviceFilteringResponse, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ activateServiceFiltering, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
