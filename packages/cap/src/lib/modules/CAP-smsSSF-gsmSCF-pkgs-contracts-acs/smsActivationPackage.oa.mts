import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { initialDPSMS } from "../CAP-SMS-ops-args/initialDPSMS.oa.mjs";
import { id_package_smsActivation } from "../CAP-object-identifiers/id-package-smsActivation.va.mjs";

/**
 * @summary smsActivationPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smsActivationPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{initialDPSMS {bound}}
 * 	ID			id-package-smsActivation}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const smsActivationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initialDPSMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_smsActivation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
