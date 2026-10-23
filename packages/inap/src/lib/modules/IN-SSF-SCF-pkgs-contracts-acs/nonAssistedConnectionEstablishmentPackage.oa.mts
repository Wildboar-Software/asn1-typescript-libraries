/* eslint-disable */
import { connectToResource } from "../IN-SSF-SCF-ops-args/connectToResource.oa.mjs";
// export { connectToResource } from "../IN-SSF-SCF-ops-args/connectToResource.oa.mjs";
import { id_package_nonAssistedConnectionEstablishment } from "../IN-object-identifiers/id-package-nonAssistedConnectionEstablishment.va.mjs";
// export { id_package_nonAssistedConnectionEstablishment } from "../IN-object-identifiers/id-package-nonAssistedConnectionEstablishment.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary nonAssistedConnectionEstablishmentPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nonAssistedConnectionEstablishmentPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {connectToResource}
 *   ID                id-package-nonAssistedConnectionEstablishment
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const nonAssistedConnectionEstablishmentPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ connectToResource, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_nonAssistedConnectionEstablishment /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
