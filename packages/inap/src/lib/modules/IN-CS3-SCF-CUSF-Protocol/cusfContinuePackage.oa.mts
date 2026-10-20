/* eslint-disable */
import { continueAssociation } from "../IN-CS3-SCF-CUSF-Operations/continueAssociation.oa.mjs";
// export { continueAssociation } from "../IN-CS3-SCF-CUSF-Operations/continueAssociation.oa.mjs";
import { id_package_cusfContinue } from "../IN-CS3-object-identifiers/id-package-cusfContinue.va.mjs";
// export { id_package_cusfContinue } from "../IN-CS3-object-identifiers/id-package-cusfContinue.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfContinuePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfContinuePackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {continueAssociation}
 *   ID                id-package-cusfContinue
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfContinuePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ continueAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfContinue /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
