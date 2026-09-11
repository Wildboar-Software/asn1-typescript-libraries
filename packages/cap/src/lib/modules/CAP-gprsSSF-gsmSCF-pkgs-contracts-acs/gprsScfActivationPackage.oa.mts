import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { initialDPGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/initialDPGPRS.oa.mjs";
import { id_package_gprsScfActivation } from "../CAP-object-identifiers/id-package-gprsScfActivation.va.mjs";

/**
 * @summary gprsScfActivationPackage
 * @description
 *
 * gprsSSF-gsmSCF SCF activation package: gprsSSF (consumer) invokes
 * `initialDPGPRS`. Used in `capGprsSsfToScf` (initiator). Package OID updated
 * in Rel-6. (3GPP TS 29.078 V19.0.0 clause 8.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gprsScfActivationPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{initialDPGPRS {bound}}
 * 	ID			id-package-gprsScfActivation}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsScfActivationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initialDPGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsScfActivation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
