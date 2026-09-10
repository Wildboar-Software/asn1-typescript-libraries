import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { requestReportGPRSEvent } from "../CAP-gprsSSF-gsmSCF-ops-args/requestReportGPRSEvent.oa.mjs";
import { eventReportGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/eventReportGPRS.oa.mjs";
import { id_package_gprsEventHandling } from "../CAP-object-identifiers/id-package-gprsEventHandling.va.mjs";

/**
 * @summary gprsEventHandlingPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gprsEventHandlingPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{requestReportGPRSEvent {bound}}
 * 	SUPPLIER INVOKES	{eventReportGPRS {bound}}
 * 	ID			id-package-gprsEventHandling}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsEventHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestReportGPRSEvent, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ eventReportGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsEventHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
