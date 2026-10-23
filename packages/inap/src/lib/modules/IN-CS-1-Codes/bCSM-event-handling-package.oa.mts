/* eslint-disable */
import { eventReportBCSM } from "../IN-CS-1-Operations/eventReportBCSM.oa.mjs";
// export { eventReportBCSM } from "../IN-CS-1-Operations/eventReportBCSM.oa.mjs";
import { requestReportBCSMEvent } from "../IN-CS-1-Operations/requestReportBCSMEvent.oa.mjs";
// export { requestReportBCSMEvent } from "../IN-CS-1-Operations/requestReportBCSMEvent.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary bCSM_event_handling_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bCSM-event-handling-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES  {eventReportBCSM}
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {requestReportBCSMEvent}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const bCSM_event_handling_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ eventReportBCSM, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ requestReportBCSMEvent, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
