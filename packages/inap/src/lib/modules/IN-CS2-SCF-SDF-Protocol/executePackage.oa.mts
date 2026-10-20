import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
/* eslint-disable */
import { execute } from "../IN-CS2-SCF-SDF-Operations/execute.oa.mjs";
// export { execute } from "../IN-CS2-SCF-SDF-Operations/execute.oa.mjs";
import { id_package_execute } from "../IN-CS2-object-identifiers/id-package-execute.va.mjs";
// export { id_package_execute } from "../IN-CS2-object-identifiers/id-package-execute.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary executePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * executePackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {execute}
 *   ID                id-package-execute
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const executePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ execute, ] as unknown as OPERATION[] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_execute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
