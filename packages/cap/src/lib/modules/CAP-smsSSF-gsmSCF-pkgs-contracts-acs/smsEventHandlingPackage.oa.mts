import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { requestReportSMSEvent } from "../CAP-SMS-ops-args/requestReportSMSEvent.oa.mjs";
import { eventReportSMS } from "../CAP-SMS-ops-args/eventReportSMS.oa.mjs";
import { id_package_smsEventHandling } from "../CAP-object-identifiers/id-package-smsEventHandling.va.mjs";

/**
 * @summary smsEventHandlingPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smsEventHandlingPackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{requestReportSMSEvent {bound}}
 * 	SUPPLIER INVOKES	{eventReportSMS {bound}}
 * 	ID			id-package-smsEventHandling}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const smsEventHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestReportSMSEvent, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ eventReportSMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_smsEventHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
