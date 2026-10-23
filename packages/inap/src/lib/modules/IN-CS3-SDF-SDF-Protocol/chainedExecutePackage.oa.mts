/* eslint-disable */
import { chainedExecute } from "../IN-CS3-SDF-SDF-Protocol/chainedExecute.oa.mjs";
// export { chainedExecute } from "../IN-CS3-SDF-SDF-Protocol/chainedExecute.oa.mjs";
import { id_package_chainedExecute } from "../IN-CS3-object-identifiers/id-package-chainedExecute.va.mjs";
// export { id_package_chainedExecute } from "../IN-CS3-object-identifiers/id-package-chainedExecute.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary chainedExecutePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedExecutePackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {chainedExecute}
 *   ID                id-package-chainedExecute
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const chainedExecutePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ chainedExecute, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_chainedExecute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
