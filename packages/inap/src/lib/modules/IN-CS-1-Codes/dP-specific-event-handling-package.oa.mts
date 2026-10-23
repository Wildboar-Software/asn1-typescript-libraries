/* eslint-disable */
import { originationAttemptAuthorized } from "../IN-CS-1-Operations/originationAttemptAuthorized.oa.mjs";
// export { originationAttemptAuthorized } from "../IN-CS-1-Operations/originationAttemptAuthorized.oa.mjs";
import { collectedInformation } from "../IN-CS-1-Operations/collectedInformation.oa.mjs";
// export { collectedInformation } from "../IN-CS-1-Operations/collectedInformation.oa.mjs";
import { analysedInformation } from "../IN-CS-1-Operations/analysedInformation.oa.mjs";
// export { analysedInformation } from "../IN-CS-1-Operations/analysedInformation.oa.mjs";
import { routeSelectFailure } from "../IN-CS-1-Operations/routeSelectFailure.oa.mjs";
// export { routeSelectFailure } from "../IN-CS-1-Operations/routeSelectFailure.oa.mjs";
import { oCalledPartyBusy } from "../IN-CS-1-Operations/oCalledPartyBusy.oa.mjs";
// export { oCalledPartyBusy } from "../IN-CS-1-Operations/oCalledPartyBusy.oa.mjs";
import { oNoAnswer } from "../IN-CS-1-Operations/oNoAnswer.oa.mjs";
// export { oNoAnswer } from "../IN-CS-1-Operations/oNoAnswer.oa.mjs";
import { oAnswer } from "../IN-CS-1-Operations/oAnswer.oa.mjs";
// export { oAnswer } from "../IN-CS-1-Operations/oAnswer.oa.mjs";
import { oDisconnect } from "../IN-CS-1-Operations/oDisconnect.oa.mjs";
// export { oDisconnect } from "../IN-CS-1-Operations/oDisconnect.oa.mjs";
import { termAttemptAuthorized } from "../IN-CS-1-Operations/termAttemptAuthorized.oa.mjs";
// export { termAttemptAuthorized } from "../IN-CS-1-Operations/termAttemptAuthorized.oa.mjs";
import { tBusy } from "../IN-CS-1-Operations/tBusy.oa.mjs";
// export { tBusy } from "../IN-CS-1-Operations/tBusy.oa.mjs";
import { tNoAnswer } from "../IN-CS-1-Operations/tNoAnswer.oa.mjs";
// export { tNoAnswer } from "../IN-CS-1-Operations/tNoAnswer.oa.mjs";
import { tAnswer } from "../IN-CS-1-Operations/tAnswer.oa.mjs";
// export { tAnswer } from "../IN-CS-1-Operations/tAnswer.oa.mjs";
import { tDisconnect } from "../IN-CS-1-Operations/tDisconnect.oa.mjs";
// export { tDisconnect } from "../IN-CS-1-Operations/tDisconnect.oa.mjs";
import { oMidCall } from "../IN-CS-1-Operations/oMidCall.oa.mjs";
// export { oMidCall } from "../IN-CS-1-Operations/oMidCall.oa.mjs";
import { tMidCall } from "../IN-CS-1-Operations/tMidCall.oa.mjs";
// export { tMidCall } from "../IN-CS-1-Operations/tMidCall.oa.mjs";
import { requestReportBCSMEvent } from "../IN-CS-1-Operations/requestReportBCSMEvent.oa.mjs";
// export { requestReportBCSMEvent } from "../IN-CS-1-Operations/requestReportBCSMEvent.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary dP_specific_event_handling_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dP-specific-event-handling-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES
 *     {originationAttemptAuthorized | collectedInformation | analysedInformation
 *       | routeSelectFailure | oCalledPartyBusy | oNoAnswer | oAnswer |
 *       oDisconnect | termAttemptAuthorized | tBusy | tNoAnswer | tAnswer |
 *       tDisconnect | oMidCall | tMidCall}
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
const dP_specific_event_handling_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ originationAttemptAuthorized, collectedInformation, analysedInformation, routeSelectFailure, oCalledPartyBusy, oNoAnswer, oAnswer, oDisconnect, termAttemptAuthorized, tBusy, tNoAnswer, tAnswer, tDisconnect, oMidCall, tMidCall, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ requestReportBCSMEvent, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
