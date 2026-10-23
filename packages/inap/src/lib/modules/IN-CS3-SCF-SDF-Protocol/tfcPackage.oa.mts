/* eslint-disable */
import { trafficFlowControl } from "../IN-CS3-SCF-SDF-Operations/trafficFlowControl.oa.mjs";
// export { trafficFlowControl } from "../IN-CS3-SCF-SDF-Operations/trafficFlowControl.oa.mjs";
import { id_package_tfcOperations } from "../IN-CS3-object-identifiers/id-package-tfcOperations.va.mjs";
// export { id_package_tfcOperations } from "../IN-CS3-object-identifiers/id-package-tfcOperations.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary tfcPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {trafficFlowControl}
 *   ID                id-package-tfcOperations
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const tfcPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ trafficFlowControl, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_tfcOperations /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
