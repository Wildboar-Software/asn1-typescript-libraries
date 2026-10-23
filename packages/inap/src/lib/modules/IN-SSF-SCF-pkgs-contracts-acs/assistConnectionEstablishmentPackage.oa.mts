/* eslint-disable */
import { establishTemporaryConnection } from "../IN-SSF-SCF-ops-args/establishTemporaryConnection.oa.mjs";
// export { establishTemporaryConnection } from "../IN-SSF-SCF-ops-args/establishTemporaryConnection.oa.mjs";
import { id_package_assistConnectionEstablishment } from "../IN-object-identifiers/id-package-assistConnectionEstablishment.va.mjs";
// export { id_package_assistConnectionEstablishment } from "../IN-object-identifiers/id-package-assistConnectionEstablishment.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary assistConnectionEstablishmentPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * assistConnectionEstablishmentPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {establishTemporaryConnection}
 *   ID                id-package-assistConnectionEstablishment
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const assistConnectionEstablishmentPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ establishTemporaryConnection, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_assistConnectionEstablishment /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
