import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { initiateCallAttempt } from "../CAP-gsmSSF-gsmSCF-ops-args/initiateCallAttempt.oa.mjs";
import { id_package_scfCallInitiation } from "../CAP-object-identifiers/id-package-scfCallInitiation.va.mjs";

/**
 * @summary scfCallInitiationPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scfCallInitiationPackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{initiateCallAttempt {bound}}
 * 	ID			id-package-scfCallInitiation}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const scfCallInitiationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initiateCallAttempt, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_scfCallInitiation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
