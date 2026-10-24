/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activateServiceFiltering } from "../IN-CS-1-Operations/activateServiceFiltering.oa.mjs";
// export { activateServiceFiltering } from "../IN-CS-1-Operations/activateServiceFiltering.oa.mjs";
import { activityTest } from "../IN-CS-1-Operations/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS-1-Operations/activityTest.oa.mjs";
import { analysedInformation } from "../IN-CS-1-Operations/analysedInformation.oa.mjs";
// export { analysedInformation } from "../IN-CS-1-Operations/analysedInformation.oa.mjs";
import { analyseInformation } from "../IN-CS-1-Operations/analyseInformation.oa.mjs";
// export { analyseInformation } from "../IN-CS-1-Operations/analyseInformation.oa.mjs";
import { applyCharging } from "../IN-CS-1-Operations/applyCharging.oa.mjs";
// export { applyCharging } from "../IN-CS-1-Operations/applyCharging.oa.mjs";
import { applyChargingReport } from "../IN-CS-1-Operations/applyChargingReport.oa.mjs";
// export { applyChargingReport } from "../IN-CS-1-Operations/applyChargingReport.oa.mjs";
import { assistRequestInstructions } from "../IN-CS-1-Operations/assistRequestInstructions.oa.mjs";
// export { assistRequestInstructions } from "../IN-CS-1-Operations/assistRequestInstructions.oa.mjs";
import { callGap } from "../IN-CS-1-Operations/callGap.oa.mjs";
// export { callGap } from "../IN-CS-1-Operations/callGap.oa.mjs";
import { callInformationReport } from "../IN-CS-1-Operations/callInformationReport.oa.mjs";
// export { callInformationReport } from "../IN-CS-1-Operations/callInformationReport.oa.mjs";
import { callInformationRequest } from "../IN-CS-1-Operations/callInformationRequest.oa.mjs";
// export { callInformationRequest } from "../IN-CS-1-Operations/callInformationRequest.oa.mjs";
import { cancel } from "../IN-CS-1-Operations/cancel.oa.mjs";
// export { cancel } from "../IN-CS-1-Operations/cancel.oa.mjs";
import { cancelStatusReportRequest } from "../IN-CS-1-Operations/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-CS-1-Operations/cancelStatusReportRequest.oa.mjs";
import { collectedInformation } from "../IN-CS-1-Operations/collectedInformation.oa.mjs";
// export { collectedInformation } from "../IN-CS-1-Operations/collectedInformation.oa.mjs";
import { collectInformation } from "../IN-CS-1-Operations/collectInformation.oa.mjs";
// export { collectInformation } from "../IN-CS-1-Operations/collectInformation.oa.mjs";
import { connect } from "../IN-CS-1-Operations/connect.oa.mjs";
// export { connect } from "../IN-CS-1-Operations/connect.oa.mjs";
import { connectToResource } from "../IN-CS-1-Operations/connectToResource.oa.mjs";
// export { connectToResource } from "../IN-CS-1-Operations/connectToResource.oa.mjs";
import { continue_ } from "../IN-CS-1-Operations/continue.oa.mjs";
// export { continue_ } from "../IN-CS-1-Operations/continue.oa.mjs";
import { disconnectForwardConnection } from "../IN-CS-1-Operations/disconnectForwardConnection.oa.mjs";
// export { disconnectForwardConnection } from "../IN-CS-1-Operations/disconnectForwardConnection.oa.mjs";
import { establishTemporaryConnection } from "../IN-CS-1-Operations/establishTemporaryConnection.oa.mjs";
// export { establishTemporaryConnection } from "../IN-CS-1-Operations/establishTemporaryConnection.oa.mjs";
import { eventNotificationCharging } from "../IN-CS-1-Operations/eventNotificationCharging.oa.mjs";
// export { eventNotificationCharging } from "../IN-CS-1-Operations/eventNotificationCharging.oa.mjs";
import { eventReportBCSM } from "../IN-CS-1-Operations/eventReportBCSM.oa.mjs";
// export { eventReportBCSM } from "../IN-CS-1-Operations/eventReportBCSM.oa.mjs";
import { furnishChargingInformation } from "../IN-CS-1-Operations/furnishChargingInformation.oa.mjs";
// export { furnishChargingInformation } from "../IN-CS-1-Operations/furnishChargingInformation.oa.mjs";
import { holdCallInNetwork } from "../IN-CS-1-Operations/holdCallInNetwork.oa.mjs";
// export { holdCallInNetwork } from "../IN-CS-1-Operations/holdCallInNetwork.oa.mjs";
import { initialDP } from "../IN-CS-1-Operations/initialDP.oa.mjs";
// export { initialDP } from "../IN-CS-1-Operations/initialDP.oa.mjs";
import { initiateCallAttempt } from "../IN-CS-1-Operations/initiateCallAttempt.oa.mjs";
// export { initiateCallAttempt } from "../IN-CS-1-Operations/initiateCallAttempt.oa.mjs";
import { oAnswer } from "../IN-CS-1-Operations/oAnswer.oa.mjs";
// export { oAnswer } from "../IN-CS-1-Operations/oAnswer.oa.mjs";
import { oCalledPartyBusy } from "../IN-CS-1-Operations/oCalledPartyBusy.oa.mjs";
// export { oCalledPartyBusy } from "../IN-CS-1-Operations/oCalledPartyBusy.oa.mjs";
import { oDisconnect } from "../IN-CS-1-Operations/oDisconnect.oa.mjs";
// export { oDisconnect } from "../IN-CS-1-Operations/oDisconnect.oa.mjs";
import { oMidCall } from "../IN-CS-1-Operations/oMidCall.oa.mjs";
// export { oMidCall } from "../IN-CS-1-Operations/oMidCall.oa.mjs";
import { oNoAnswer } from "../IN-CS-1-Operations/oNoAnswer.oa.mjs";
// export { oNoAnswer } from "../IN-CS-1-Operations/oNoAnswer.oa.mjs";
import { originationAttemptAuthorized } from "../IN-CS-1-Operations/originationAttemptAuthorized.oa.mjs";
// export { originationAttemptAuthorized } from "../IN-CS-1-Operations/originationAttemptAuthorized.oa.mjs";
import { releaseCall } from "../IN-CS-1-Operations/releaseCall.oa.mjs";
// export { releaseCall } from "../IN-CS-1-Operations/releaseCall.oa.mjs";
import { requestCurrentStatusReport } from "../IN-CS-1-Operations/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-CS-1-Operations/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-CS-1-Operations/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-CS-1-Operations/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-CS-1-Operations/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-CS-1-Operations/requestFirstStatusMatchReport.oa.mjs";
import { requestNotificationChargingEvent } from "../IN-CS-1-Operations/requestNotificationChargingEvent.oa.mjs";
// export { requestNotificationChargingEvent } from "../IN-CS-1-Operations/requestNotificationChargingEvent.oa.mjs";
import { requestReportBCSMEvent } from "../IN-CS-1-Operations/requestReportBCSMEvent.oa.mjs";
// export { requestReportBCSMEvent } from "../IN-CS-1-Operations/requestReportBCSMEvent.oa.mjs";
import { resetTimer } from "../IN-CS-1-Operations/resetTimer.oa.mjs";
// export { resetTimer } from "../IN-CS-1-Operations/resetTimer.oa.mjs";
import { routeSelectFailure } from "../IN-CS-1-Operations/routeSelectFailure.oa.mjs";
// export { routeSelectFailure } from "../IN-CS-1-Operations/routeSelectFailure.oa.mjs";
import { selectFacility } from "../IN-CS-1-Operations/selectFacility.oa.mjs";
// export { selectFacility } from "../IN-CS-1-Operations/selectFacility.oa.mjs";
import { selectRoute } from "../IN-CS-1-Operations/selectRoute.oa.mjs";
// export { selectRoute } from "../IN-CS-1-Operations/selectRoute.oa.mjs";
import { sendChargingInformation } from "../IN-CS-1-Operations/sendChargingInformation.oa.mjs";
// export { sendChargingInformation } from "../IN-CS-1-Operations/sendChargingInformation.oa.mjs";
import { serviceFilteringResponse } from "../IN-CS-1-Operations/serviceFilteringResponse.oa.mjs";
// export { serviceFilteringResponse } from "../IN-CS-1-Operations/serviceFilteringResponse.oa.mjs";
import { statusReport } from "../IN-CS-1-Operations/statusReport.oa.mjs";
// export { statusReport } from "../IN-CS-1-Operations/statusReport.oa.mjs";
import { tAnswer } from "../IN-CS-1-Operations/tAnswer.oa.mjs";
// export { tAnswer } from "../IN-CS-1-Operations/tAnswer.oa.mjs";
import { tBusy } from "../IN-CS-1-Operations/tBusy.oa.mjs";
// export { tBusy } from "../IN-CS-1-Operations/tBusy.oa.mjs";
import { tDisconnect } from "../IN-CS-1-Operations/tDisconnect.oa.mjs";
// export { tDisconnect } from "../IN-CS-1-Operations/tDisconnect.oa.mjs";
import { termAttemptAuthorized } from "../IN-CS-1-Operations/termAttemptAuthorized.oa.mjs";
// export { termAttemptAuthorized } from "../IN-CS-1-Operations/termAttemptAuthorized.oa.mjs";
import { tMidCall } from "../IN-CS-1-Operations/tMidCall.oa.mjs";
// export { tMidCall } from "../IN-CS-1-Operations/tMidCall.oa.mjs";
import { tNoAnswer } from "../IN-CS-1-Operations/tNoAnswer.oa.mjs";
// export { tNoAnswer } from "../IN-CS-1-Operations/tNoAnswer.oa.mjs";
import { playAnnouncement } from "../IN-CS-1-Operations/playAnnouncement.oa.mjs";
// export { playAnnouncement } from "../IN-CS-1-Operations/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../IN-CS-1-Operations/promptAndCollectUserInformation.oa.mjs";
// export { promptAndCollectUserInformation } from "../IN-CS-1-Operations/promptAndCollectUserInformation.oa.mjs";


/**
 * @summary TC_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TC-Invokable OPERATION ::= {activateServiceFiltering | activityTest | analysedInformation |
 *    analyseInformation | applyCharging | applyChargingReport |
 *    assistRequestInstructions | callGap | callInformationReport |
 *    callInformationRequest | cancel | cancelStatusReportRequest |
 *    collectedInformation | collectInformation | connect | connectToResource |
 *    continue | disconnectForwardConnection | establishTemporaryConnection |
 *    eventNotificationCharging | eventReportBCSM | furnishChargingInformation |
 *    holdCallInNetwork | initialDP | initiateCallAttempt | oAnswer |
 *    oCalledPartyBusy | oDisconnect | oMidCall | oNoAnswer |
 *    originationAttemptAuthorized | releaseCall | requestCurrentStatusReport |
 *    requestEveryStatusChangeReport | requestFirstStatusMatchReport |
 *    requestNotificationChargingEvent | requestReportBCSMEvent | resetTimer |
 *    routeSelectFailure | selectFacility | selectRoute | sendChargingInformation
 *    | serviceFilteringResponse | statusReport | tAnswer | tBusy | tDisconnect |
 *    termAttemptAuthorized | tMidCall | tNoAnswer | playAnnouncement |
 *    promptAndCollectUserInformation}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const TC_Invokable: (OPERATION)[] = [ activateServiceFiltering, activityTest, analysedInformation, analyseInformation, applyCharging, applyChargingReport, assistRequestInstructions, callGap, callInformationReport, callInformationRequest, cancel, cancelStatusReportRequest, collectedInformation, collectInformation, connect, connectToResource, continue_, disconnectForwardConnection, establishTemporaryConnection, eventNotificationCharging, eventReportBCSM, furnishChargingInformation, holdCallInNetwork, initialDP, initiateCallAttempt, oAnswer, oCalledPartyBusy, oDisconnect, oMidCall, oNoAnswer, originationAttemptAuthorized, releaseCall, requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, requestNotificationChargingEvent, requestReportBCSMEvent, resetTimer, routeSelectFailure, selectFacility, selectRoute, sendChargingInformation, serviceFilteringResponse, statusReport, tAnswer, tBusy, tDisconnect, termAttemptAuthorized, tMidCall, tNoAnswer, playAnnouncement, promptAndCollectUserInformation, ];

/* eslint-enable */
