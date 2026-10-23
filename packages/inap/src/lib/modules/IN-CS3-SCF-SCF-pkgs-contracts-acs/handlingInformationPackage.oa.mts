/* eslint-disable */
import { handlingInformationRequest } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationRequest.oa.mjs";
// export { handlingInformationRequest } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationRequest.oa.mjs";
import { handlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
// export { handlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
import { id_package_handlingInformation } from "../IN-CS3-object-identifiers/id-package-handlingInformation.va.mjs";
// export { id_package_handlingInformation } from "../IN-CS3-object-identifiers/id-package-handlingInformation.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary handlingInformationPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * handlingInformationPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {handlingInformationRequest}
 *   SUPPLIER INVOKES  {handlingInformationResult}
 *   ID                id-package-handlingInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const handlingInformationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ handlingInformationRequest, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ handlingInformationResult, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_handlingInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
