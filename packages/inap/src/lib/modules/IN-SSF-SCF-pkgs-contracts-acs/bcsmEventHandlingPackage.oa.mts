/* eslint-disable */
import { requestReportBCSMEvent } from "../IN-SSF-SCF-ops-args/requestReportBCSMEvent.oa.mjs";
// export { requestReportBCSMEvent } from "../IN-SSF-SCF-ops-args/requestReportBCSMEvent.oa.mjs";
import { eventReportBCSM } from "../IN-SSF-SCF-ops-args/eventReportBCSM.oa.mjs";
// export { eventReportBCSM } from "../IN-SSF-SCF-ops-args/eventReportBCSM.oa.mjs";
import { id_package_bcsmEventHandling } from "../IN-object-identifiers/id-package-bcsmEventHandling.va.mjs";
// export { id_package_bcsmEventHandling } from "../IN-object-identifiers/id-package-bcsmEventHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary bcsmEventHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bcsmEventHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {requestReportBCSMEvent}
 *   SUPPLIER INVOKES  {eventReportBCSM}
 *   ID                id-package-bcsmEventHandling
 * }
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

/* eslint-enable */
