import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { requestReportBCSMEvent } from "../CAP-gsmSSF-gsmSCF-ops-args/requestReportBCSMEvent.oa.mjs";
import { eventReportBCSM } from "../CAP-gsmSSF-gsmSCF-ops-args/eventReportBCSM.oa.mjs";
import { id_package_bcsmEventHandling } from "../CAP-object-identifiers/id-package-bcsmEventHandling.va.mjs";

/**
 * @summary bcsmEventHandlingPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bcsmEventHandlingPackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{requestReportBCSMEvent {bound}}
 * 	SUPPLIER INVOKES	{eventReportBCSM {bound}}
 * 	ID			id-package-bcsmEventHandling}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const bcsmEventHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestReportBCSMEvent, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ eventReportBCSM, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_bcsmEventHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
