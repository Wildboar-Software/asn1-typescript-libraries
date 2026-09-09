import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { assistRequestInstructions } from "../CAP-gsmSSF-gsmSCF-ops-args/assistRequestInstructions.oa.mjs";
import { id_package_gsmSRF_scfActivationOfAssist } from "../CAP-object-identifiers/id-package-gsmSRF-scfActivationOfAssist.va.mjs";

/**
 * @summary gsmSRF-scfActivationOfAssistPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gsmSRF-scfActivationOfAssistPackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{assistRequestInstructions {bound}}
 * 	ID			id-package-gsmSRF-scfActivationOfAssist}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gsmSRF_scfActivationOfAssistPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ assistRequestInstructions, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gsmSRF_scfActivationOfAssist /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
