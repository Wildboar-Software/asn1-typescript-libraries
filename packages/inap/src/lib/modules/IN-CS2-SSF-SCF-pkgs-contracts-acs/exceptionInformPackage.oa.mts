/* eslint-disable */
import { entityReleased } from "../IN-CS2-SSF-SCF-ops-args/entityReleased.oa.mjs";
// export { entityReleased } from "../IN-CS2-SSF-SCF-ops-args/entityReleased.oa.mjs";
import { id_package_entityReleased } from "../IN-CS2-object-identifiers/id-package-entityReleased.va.mjs";
// export { id_package_entityReleased } from "../IN-CS2-object-identifiers/id-package-entityReleased.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary exceptionInformPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * exceptionInformPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {entityReleased}
 *   ID                id-package-entityReleased
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const exceptionInformPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ entityReleased, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_entityReleased /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
