/* eslint-disable */
import { transferSTSI } from "../IN-SCF-SCF-ops-args/transferSTSI.oa.mjs";
// export { transferSTSI } from "../IN-SCF-SCF-ops-args/transferSTSI.oa.mjs";
import { id_package_transferStsi } from "../IN-object-identifiers/id-package-transferStsi.va.mjs";
// export { id_package_transferStsi } from "../IN-object-identifiers/id-package-transferStsi.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary transferStsiPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * transferStsiPackage OPERATION-PACKAGE ::= {
 *   OPERATIONS{transferSTSI}
 *   ID  id-package-transferStsi
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const transferStsiPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Both": [ transferSTSI, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_transferStsi /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
