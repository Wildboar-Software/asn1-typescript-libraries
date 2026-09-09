import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { releaseGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/releaseGPRS.oa.mjs";
import { id_package_gprsRelease } from "../CAP-object-identifiers/id-package-gprsRelease.va.mjs";

/**
 * @summary gprsReleasePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gprsReleasePackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{releaseGPRS {bound}}
 * 	ID			id-package-gprsRelease}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsReleasePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ releaseGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsRelease /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
