import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { furnishChargingInformationGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/furnishChargingInformationGPRS.oa.mjs";
import { id_package_gprsBilling } from "../CAP-object-identifiers/id-package-gprsBilling.va.mjs";

/**
 * @summary gprsBillingPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gprsBillingPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{furnishChargingInformationGPRS {bound}}
 * 	ID			id-package-gprsBilling}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsBillingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ furnishChargingInformationGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsBilling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
