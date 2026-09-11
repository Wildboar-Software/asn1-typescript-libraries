import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { resetTimerSMS } from "../CAP-SMS-ops-args/resetTimerSMS.oa.mjs";
import { id_package_smsTimer } from "../CAP-object-identifiers/id-package-smsTimer.va.mjs";

/**
 * @summary smsTimerPackage
 * @description
 *
 * smsSSF-gsmSCF timer package: gsmSCF (consumer) invokes `resetTimerSMS`. Used
 * in `cap3SMS` and `cap4SMS`. Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 7.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smsTimerPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{resetTimerSMS {bound}}
 * 	ID			id-package-smsTimer}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const smsTimerPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ resetTimerSMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_smsTimer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
