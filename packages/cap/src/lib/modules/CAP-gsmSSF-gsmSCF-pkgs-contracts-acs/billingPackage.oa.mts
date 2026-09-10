import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { furnishChargingInformation } from "../CAP-gsmSSF-gsmSCF-ops-args/furnishChargingInformation.oa.mjs";
import { id_package_billing } from "../CAP-object-identifiers/id-package-billing.va.mjs";

/**
 * @summary billingPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * billingPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{furnishChargingInformation {bound}}
 * 	ID			id-package-billing}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const billingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ furnishChargingInformation, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_billing /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
