import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { furnishChargingInformationSMS } from "../CAP-SMS-ops-args/furnishChargingInformationSMS.oa.mjs";
import { id_package_smsBilling } from "../CAP-object-identifiers/id-package-smsBilling.va.mjs";

/**
 * @summary smsBillingPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smsBillingPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{furnishChargingInformationSMS {bound}}
 * 	ID			id-package-smsBilling}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const smsBillingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ furnishChargingInformationSMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_smsBilling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
