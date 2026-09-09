import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { entityReleasedGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/entityReleasedGPRS.oa.mjs";
import { id_package_gprsExceptionInformation } from "../CAP-object-identifiers/id-package-gprsExceptionInformation.va.mjs";

/**
 * @summary gprsExceptionInformationPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gprsExceptionInformationPackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{entityReleasedGPRS {bound}}
 * 	ID			id-package-gprsExceptionInformation}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsExceptionInformationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ entityReleasedGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsExceptionInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
