import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { releaseGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/releaseGPRS.oa.mjs";
import { id_package_gprsRelease } from "../CAP-object-identifiers/id-package-gprsRelease.va.mjs";

/**
 * @summary gprsReleasePackage
 * @description
 *
 * gprsSSF-gsmSCF release package: gsmSCF (consumer) invokes `releaseGPRS`. Used
 * in `capGprsSsfToScf` (responder) and `capGsmScfToGprsSsf` (initiator).
 * Package OID updated in Rel-6. (3GPP TS 29.078 V19.0.0 clause 8.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gprsReleasePackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
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
