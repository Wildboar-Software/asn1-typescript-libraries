/* eslint-disable */
import { requestReportBCSMEvent } from "../IN-CS3-SSF-SCF-ops-args/requestReportBCSMEvent.oa.mjs";
// export { requestReportBCSMEvent } from "../IN-CS3-SSF-SCF-ops-args/requestReportBCSMEvent.oa.mjs";
import { originationAttemptAuthorized } from "../IN-CS3-SSF-SCF-ops-args/originationAttemptAuthorized.oa.mjs";
// export { originationAttemptAuthorized } from "../IN-CS3-SSF-SCF-ops-args/originationAttemptAuthorized.oa.mjs";
import { collectedInformation } from "../IN-CS3-SSF-SCF-ops-args/collectedInformation.oa.mjs";
// export { collectedInformation } from "../IN-CS3-SSF-SCF-ops-args/collectedInformation.oa.mjs";
import { analysedInformation } from "../IN-CS3-SSF-SCF-ops-args/analysedInformation.oa.mjs";
// export { analysedInformation } from "../IN-CS3-SSF-SCF-ops-args/analysedInformation.oa.mjs";
import { routeSelectFailure } from "../IN-CS3-SSF-SCF-ops-args/routeSelectFailure.oa.mjs";
// export { routeSelectFailure } from "../IN-CS3-SSF-SCF-ops-args/routeSelectFailure.oa.mjs";
import { facilitySelectedAndAvailable } from "../IN-CS3-SSF-SCF-ops-args/facilitySelectedAndAvailable.oa.mjs";
// export { facilitySelectedAndAvailable } from "../IN-CS3-SSF-SCF-ops-args/facilitySelectedAndAvailable.oa.mjs";
import { oAbandon } from "../IN-CS3-SSF-SCF-ops-args/oAbandon.oa.mjs";
// export { oAbandon } from "../IN-CS3-SSF-SCF-ops-args/oAbandon.oa.mjs";
import { originationAttempt } from "../IN-CS3-SSF-SCF-ops-args/originationAttempt.oa.mjs";
// export { originationAttempt } from "../IN-CS3-SSF-SCF-ops-args/originationAttempt.oa.mjs";
import { terminationAttempt } from "../IN-CS3-SSF-SCF-ops-args/terminationAttempt.oa.mjs";
// export { terminationAttempt } from "../IN-CS3-SSF-SCF-ops-args/terminationAttempt.oa.mjs";
import { oCalledPartyBusy } from "../IN-CS3-SSF-SCF-ops-args/oCalledPartyBusy.oa.mjs";
// export { oCalledPartyBusy } from "../IN-CS3-SSF-SCF-ops-args/oCalledPartyBusy.oa.mjs";
import { oNoAnswer } from "../IN-CS3-SSF-SCF-ops-args/oNoAnswer.oa.mjs";
// export { oNoAnswer } from "../IN-CS3-SSF-SCF-ops-args/oNoAnswer.oa.mjs";
import { oAnswer } from "../IN-CS3-SSF-SCF-ops-args/oAnswer.oa.mjs";
// export { oAnswer } from "../IN-CS3-SSF-SCF-ops-args/oAnswer.oa.mjs";
import { oDisconnect } from "../IN-CS3-SSF-SCF-ops-args/oDisconnect.oa.mjs";
// export { oDisconnect } from "../IN-CS3-SSF-SCF-ops-args/oDisconnect.oa.mjs";
import { termAttemptAuthorized } from "../IN-CS3-SSF-SCF-ops-args/termAttemptAuthorized.oa.mjs";
// export { termAttemptAuthorized } from "../IN-CS3-SSF-SCF-ops-args/termAttemptAuthorized.oa.mjs";
import { tBusy } from "../IN-CS3-SSF-SCF-ops-args/tBusy.oa.mjs";
// export { tBusy } from "../IN-CS3-SSF-SCF-ops-args/tBusy.oa.mjs";
import { tNoAnswer } from "../IN-CS3-SSF-SCF-ops-args/tNoAnswer.oa.mjs";
// export { tNoAnswer } from "../IN-CS3-SSF-SCF-ops-args/tNoAnswer.oa.mjs";
import { tAnswer } from "../IN-CS3-SSF-SCF-ops-args/tAnswer.oa.mjs";
// export { tAnswer } from "../IN-CS3-SSF-SCF-ops-args/tAnswer.oa.mjs";
import { tDisconnect } from "../IN-CS3-SSF-SCF-ops-args/tDisconnect.oa.mjs";
// export { tDisconnect } from "../IN-CS3-SSF-SCF-ops-args/tDisconnect.oa.mjs";
import { oMidCall } from "../IN-CS3-SSF-SCF-ops-args/oMidCall.oa.mjs";
// export { oMidCall } from "../IN-CS3-SSF-SCF-ops-args/oMidCall.oa.mjs";
import { oSuspended } from "../IN-CS3-SSF-SCF-ops-args/oSuspended.oa.mjs";
// export { oSuspended } from "../IN-CS3-SSF-SCF-ops-args/oSuspended.oa.mjs";
import { tMidCall } from "../IN-CS3-SSF-SCF-ops-args/tMidCall.oa.mjs";
// export { tMidCall } from "../IN-CS3-SSF-SCF-ops-args/tMidCall.oa.mjs";
import { tSuspended } from "../IN-CS3-SSF-SCF-ops-args/tSuspended.oa.mjs";
// export { tSuspended } from "../IN-CS3-SSF-SCF-ops-args/tSuspended.oa.mjs";
import { id_package_dpSpecificEventHandling } from "../IN-CS3-object-identifiers/id-package-dpSpecificEventHandling.va.mjs";
// export { id_package_dpSpecificEventHandling } from "../IN-CS3-object-identifiers/id-package-dpSpecificEventHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary dpSpecificEventHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dpSpecificEventHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {requestReportBCSMEvent}
 *   SUPPLIER INVOKES
 *     {originationAttemptAuthorized | collectedInformation |
 *       analysedInformation | routeSelectFailure |
 *       facilitySelectedAndAvailable | oAbandon |
 *       originationAttempt | terminationAttempt |
 *       oCalledPartyBusy | oNoAnswer | oAnswer |
 *       oDisconnect | termAttemptAuthorized | tBusy |
 *       tNoAnswer | tAnswer | tDisconnect |
 *       oMidCall | oSuspended | tMidCall |
 *       tSuspended}
 *   ID                id-package-dpSpecificEventHandling
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const dpSpecificEventHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestReportBCSMEvent, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ originationAttemptAuthorized, collectedInformation, analysedInformation, routeSelectFailure, facilitySelectedAndAvailable, oAbandon, originationAttempt, terminationAttempt, oCalledPartyBusy, oNoAnswer, oAnswer, oDisconnect, termAttemptAuthorized, tBusy, tNoAnswer, tAnswer, tDisconnect, oMidCall, oSuspended, tMidCall, tSuspended, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_dpSpecificEventHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
