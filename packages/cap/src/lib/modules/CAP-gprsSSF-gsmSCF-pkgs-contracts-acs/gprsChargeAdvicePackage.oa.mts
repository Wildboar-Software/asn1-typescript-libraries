import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { sendChargingInformationGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/sendChargingInformationGPRS.oa.mjs";
import { id_package_gprsChargeAdvice } from "../CAP-object-identifiers/id-package-gprsChargeAdvice.va.mjs";

/**
 * @summary gprsChargeAdvicePackage
 * @description
 *
 * gprsSSF-gsmSCF charge-advice package: gsmSCF (consumer) invokes
 * `sendChargingInformationGPRS`. Used in `capGprsSsfToScf` (responder) and
 * `capGsmScfToGprsSsf` (initiator). Package OID updated in Rel-6.
 * (3GPP TS 29.078 V19.0.0 clause 8.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gprsChargeAdvicePackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{sendChargingInformationGPRS {bound}}
 * 	ID			id-package-gprsChargeAdvice}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsChargeAdvicePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ sendChargingInformationGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsChargeAdvice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
