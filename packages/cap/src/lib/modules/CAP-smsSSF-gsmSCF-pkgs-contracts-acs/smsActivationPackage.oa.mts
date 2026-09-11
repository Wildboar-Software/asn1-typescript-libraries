import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { initialDPSMS } from "../CAP-SMS-ops-args/initialDPSMS.oa.mjs";
import { id_package_smsActivation } from "../CAP-object-identifiers/id-package-smsActivation.va.mjs";

/**
 * @summary smsActivationPackage
 * @description
 *
 * smsSSF-gsmSCF activation package: smsSSF (consumer) invokes `initialDPSMS`.
 * Used in `cap3SMS` (MO-SMS) and `cap4SMS` (MT-SMS). Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 7.2).
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
