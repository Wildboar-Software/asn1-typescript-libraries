/* eslint-disable */
import { assistRequestInstructions } from "../IN-SSF-SCF-ops-args/assistRequestInstructions.oa.mjs";
// export { assistRequestInstructions } from "../IN-SSF-SCF-ops-args/assistRequestInstructions.oa.mjs";
import { id_package_srf_scfActivationOfAssist } from "../IN-object-identifiers/id-package-srf-scfActivationOfAssist.va.mjs";
// export { id_package_srf_scfActivationOfAssist } from "../IN-object-identifiers/id-package-srf-scfActivationOfAssist.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary srf_scfActivationOfAssistPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * srf-scfActivationOfAssistPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {assistRequestInstructions}
 *   ID                id-package-srf-scfActivationOfAssist
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const srf_scfActivationOfAssistPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ assistRequestInstructions, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_srf_scfActivationOfAssist /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
