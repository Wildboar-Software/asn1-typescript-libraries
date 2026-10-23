/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activateServiceFiltering } from "../IN-CS2-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";
// export { activateServiceFiltering } from "../IN-CS2-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";
import { activityTest } from "../IN-CS2-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS2-SSF-SCF-ops-args/activityTest.oa.mjs";
import { analyseInformation } from "../IN-CS2-SSF-SCF-ops-args/analyseInformation.oa.mjs";
// export { analyseInformation } from "../IN-CS2-SSF-SCF-ops-args/analyseInformation.oa.mjs";
import { analysedInformation } from "../IN-CS2-SSF-SCF-ops-args/analysedInformation.oa.mjs";
// export { analysedInformation } from "../IN-CS2-SSF-SCF-ops-args/analysedInformation.oa.mjs";
import { applyCharging } from "../IN-CS2-SSF-SCF-ops-args/applyCharging.oa.mjs";
// export { applyCharging } from "../IN-CS2-SSF-SCF-ops-args/applyCharging.oa.mjs";
import { applyChargingReport } from "../IN-CS2-SSF-SCF-ops-args/applyChargingReport.oa.mjs";
// export { applyChargingReport } from "../IN-CS2-SSF-SCF-ops-args/applyChargingReport.oa.mjs";
import { callInformationRequest } from "../IN-CS2-SSF-SCF-ops-args/callInformationRequest.oa.mjs";
// export { callInformationRequest } from "../IN-CS2-SSF-SCF-ops-args/callInformationRequest.oa.mjs";
import { cancel } from "../IN-CS2-SSF-SCF-ops-args/cancel.oa.mjs";
// export { cancel } from "../IN-CS2-SSF-SCF-ops-args/cancel.oa.mjs";
import { cancelStatusReportRequest } from "../IN-CS2-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-CS2-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
import { collectedInformation } from "../IN-CS2-SSF-SCF-ops-args/collectedInformation.oa.mjs";
// export { collectedInformation } from "../IN-CS2-SSF-SCF-ops-args/collectedInformation.oa.mjs";
import { collectInformation } from "../IN-CS2-SSF-SCF-ops-args/collectInformation.oa.mjs";
// export { collectInformation } from "../IN-CS2-SSF-SCF-ops-args/collectInformation.oa.mjs";
import { connect } from "../IN-CS2-SSF-SCF-ops-args/connect.oa.mjs";
// export { connect } from "../IN-CS2-SSF-SCF-ops-args/connect.oa.mjs";
import { connectToResource } from "../IN-CS2-SSF-SCF-ops-args/connectToResource.oa.mjs";
// export { connectToResource } from "../IN-CS2-SSF-SCF-ops-args/connectToResource.oa.mjs";
import { continue_ } from "../IN-CS2-SSF-SCF-ops-args/continue.oa.mjs";
// export { continue_ } from "../IN-CS2-SSF-SCF-ops-args/continue.oa.mjs";
import { continueWithArgument } from "../IN-CS2-SSF-SCF-ops-args/continueWithArgument.oa.mjs";
// export { continueWithArgument } from "../IN-CS2-SSF-SCF-ops-args/continueWithArgument.oa.mjs";
import { disconnectForwardConnection } from "../IN-CS2-SSF-SCF-ops-args/disconnectForwardConnection.oa.mjs";
// export { disconnectForwardConnection } from "../IN-CS2-SSF-SCF-ops-args/disconnectForwardConnection.oa.mjs";
import { disconnectForwardConnectionWithArgument } from "../IN-CS2-SSF-SCF-ops-args/disconnectForwardConnectionWithArgument.oa.mjs";
// export { disconnectForwardConnectionWithArgument } from "../IN-CS2-SSF-SCF-ops-args/disconnectForwardConnectionWithArgument.oa.mjs";
import { disconnectLeg } from "../IN-CS2-SSF-SCF-ops-args/disconnectLeg.oa.mjs";
// export { disconnectLeg } from "../IN-CS2-SSF-SCF-ops-args/disconnectLeg.oa.mjs";
import { establishTemporaryConnection } from "../IN-CS2-SSF-SCF-ops-args/establishTemporaryConnection.oa.mjs";
// export { establishTemporaryConnection } from "../IN-CS2-SSF-SCF-ops-args/establishTemporaryConnection.oa.mjs";
import { furnishChargingInformation } from "../IN-CS2-SSF-SCF-ops-args/furnishChargingInformation.oa.mjs";
// export { furnishChargingInformation } from "../IN-CS2-SSF-SCF-ops-args/furnishChargingInformation.oa.mjs";
import { holdCallInNetwork } from "../IN-CS2-SSF-SCF-ops-args/holdCallInNetwork.oa.mjs";
// export { holdCallInNetwork } from "../IN-CS2-SSF-SCF-ops-args/holdCallInNetwork.oa.mjs";
import { initiateCallAttempt } from "../IN-CS2-SSF-SCF-ops-args/initiateCallAttempt.oa.mjs";
// export { initiateCallAttempt } from "../IN-CS2-SSF-SCF-ops-args/initiateCallAttempt.oa.mjs";
import { mergeCallSegments } from "../IN-CS2-SSF-SCF-ops-args/mergeCallSegments.oa.mjs";
// export { mergeCallSegments } from "../IN-CS2-SSF-SCF-ops-args/mergeCallSegments.oa.mjs";
import { moveCallSegments } from "../IN-CS2-SSF-SCF-ops-args/moveCallSegments.oa.mjs";
// export { moveCallSegments } from "../IN-CS2-SSF-SCF-ops-args/moveCallSegments.oa.mjs";
import { moveLeg } from "../IN-CS2-SSF-SCF-ops-args/moveLeg.oa.mjs";
// export { moveLeg } from "../IN-CS2-SSF-SCF-ops-args/moveLeg.oa.mjs";
import { oAbandon } from "../IN-CS2-SSF-SCF-ops-args/oAbandon.oa.mjs";
// export { oAbandon } from "../IN-CS2-SSF-SCF-ops-args/oAbandon.oa.mjs";
import { oAnswer } from "../IN-CS2-SSF-SCF-ops-args/oAnswer.oa.mjs";
// export { oAnswer } from "../IN-CS2-SSF-SCF-ops-args/oAnswer.oa.mjs";
import { oCalledPartyBusy } from "../IN-CS2-SSF-SCF-ops-args/oCalledPartyBusy.oa.mjs";
// export { oCalledPartyBusy } from "../IN-CS2-SSF-SCF-ops-args/oCalledPartyBusy.oa.mjs";
import { oDisconnect } from "../IN-CS2-SSF-SCF-ops-args/oDisconnect.oa.mjs";
// export { oDisconnect } from "../IN-CS2-SSF-SCF-ops-args/oDisconnect.oa.mjs";
import { oMidCall } from "../IN-CS2-SSF-SCF-ops-args/oMidCall.oa.mjs";
// export { oMidCall } from "../IN-CS2-SSF-SCF-ops-args/oMidCall.oa.mjs";
import { oNoAnswer } from "../IN-CS2-SSF-SCF-ops-args/oNoAnswer.oa.mjs";
// export { oNoAnswer } from "../IN-CS2-SSF-SCF-ops-args/oNoAnswer.oa.mjs";
import { createCallSegmentAssociation } from "../IN-CS2-SSF-SCF-ops-args/createCallSegmentAssociation.oa.mjs";
// export { createCallSegmentAssociation } from "../IN-CS2-SSF-SCF-ops-args/createCallSegmentAssociation.oa.mjs";
import { originationAttemptAuthorized } from "../IN-CS2-SSF-SCF-ops-args/originationAttemptAuthorized.oa.mjs";
// export { originationAttemptAuthorized } from "../IN-CS2-SSF-SCF-ops-args/originationAttemptAuthorized.oa.mjs";
import { reconnect } from "../IN-CS2-SSF-SCF-ops-args/reconnect.oa.mjs";
// export { reconnect } from "../IN-CS2-SSF-SCF-ops-args/reconnect.oa.mjs";
import { releaseCall } from "../IN-CS2-SSF-SCF-ops-args/releaseCall.oa.mjs";
// export { releaseCall } from "../IN-CS2-SSF-SCF-ops-args/releaseCall.oa.mjs";
import { requestCurrentStatusReport } from "../IN-CS2-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-CS2-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-CS2-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-CS2-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-CS2-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-CS2-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
import { requestNotificationChargingEvent } from "../IN-CS2-SSF-SCF-ops-args/requestNotificationChargingEvent.oa.mjs";
// export { requestNotificationChargingEvent } from "../IN-CS2-SSF-SCF-ops-args/requestNotificationChargingEvent.oa.mjs";
import { requestReportBCSMEvent } from "../IN-CS2-SSF-SCF-ops-args/requestReportBCSMEvent.oa.mjs";
// export { requestReportBCSMEvent } from "../IN-CS2-SSF-SCF-ops-args/requestReportBCSMEvent.oa.mjs";
import { requestReportFacilityEvent } from "../IN-CS2-SSF-SCF-ops-args/requestReportFacilityEvent.oa.mjs";
// export { requestReportFacilityEvent } from "../IN-CS2-SSF-SCF-ops-args/requestReportFacilityEvent.oa.mjs";
import { requestReportUTSI } from "../IN-CS2-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
// export { requestReportUTSI } from "../IN-CS2-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
import { resetTimer } from "../IN-CS2-SSF-SCF-ops-args/resetTimer.oa.mjs";
// export { resetTimer } from "../IN-CS2-SSF-SCF-ops-args/resetTimer.oa.mjs";
import { routeSelectFailure } from "../IN-CS2-SSF-SCF-ops-args/routeSelectFailure.oa.mjs";
// export { routeSelectFailure } from "../IN-CS2-SSF-SCF-ops-args/routeSelectFailure.oa.mjs";
import { selectFacility } from "../IN-CS2-SSF-SCF-ops-args/selectFacility.oa.mjs";
// export { selectFacility } from "../IN-CS2-SSF-SCF-ops-args/selectFacility.oa.mjs";
import { selectRoute } from "../IN-CS2-SSF-SCF-ops-args/selectRoute.oa.mjs";
// export { selectRoute } from "../IN-CS2-SSF-SCF-ops-args/selectRoute.oa.mjs";
import { sendChargingInformation } from "../IN-CS2-SSF-SCF-ops-args/sendChargingInformation.oa.mjs";
// export { sendChargingInformation } from "../IN-CS2-SSF-SCF-ops-args/sendChargingInformation.oa.mjs";
import { sendFacilityInformation } from "../IN-CS2-SSF-SCF-ops-args/sendFacilityInformation.oa.mjs";
// export { sendFacilityInformation } from "../IN-CS2-SSF-SCF-ops-args/sendFacilityInformation.oa.mjs";
import { sendSTUI } from "../IN-CS2-SSF-SCF-ops-args/sendSTUI.oa.mjs";
// export { sendSTUI } from "../IN-CS2-SSF-SCF-ops-args/sendSTUI.oa.mjs";
import { splitLeg } from "../IN-CS2-SSF-SCF-ops-args/splitLeg.oa.mjs";
// export { splitLeg } from "../IN-CS2-SSF-SCF-ops-args/splitLeg.oa.mjs";
import { tAnswer } from "../IN-CS2-SSF-SCF-ops-args/tAnswer.oa.mjs";
// export { tAnswer } from "../IN-CS2-SSF-SCF-ops-args/tAnswer.oa.mjs";
import { tBusy } from "../IN-CS2-SSF-SCF-ops-args/tBusy.oa.mjs";
// export { tBusy } from "../IN-CS2-SSF-SCF-ops-args/tBusy.oa.mjs";
import { tDisconnect } from "../IN-CS2-SSF-SCF-ops-args/tDisconnect.oa.mjs";
// export { tDisconnect } from "../IN-CS2-SSF-SCF-ops-args/tDisconnect.oa.mjs";
import { termAttemptAuthorized } from "../IN-CS2-SSF-SCF-ops-args/termAttemptAuthorized.oa.mjs";
// export { termAttemptAuthorized } from "../IN-CS2-SSF-SCF-ops-args/termAttemptAuthorized.oa.mjs";
import { tMidCall } from "../IN-CS2-SSF-SCF-ops-args/tMidCall.oa.mjs";
// export { tMidCall } from "../IN-CS2-SSF-SCF-ops-args/tMidCall.oa.mjs";
import { tNoAnswer } from "../IN-CS2-SSF-SCF-ops-args/tNoAnswer.oa.mjs";
// export { tNoAnswer } from "../IN-CS2-SSF-SCF-ops-args/tNoAnswer.oa.mjs";
import { playAnnouncement } from "../IN-CS2-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
// export { playAnnouncement } from "../IN-CS2-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../IN-CS2-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
// export { promptAndCollectUserInformation } from "../IN-CS2-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { scriptClose } from "../IN-CS2-SCF-SRF-ops-args/scriptClose.oa.mjs";
// export { scriptClose } from "../IN-CS2-SCF-SRF-ops-args/scriptClose.oa.mjs";
import { scriptInformation } from "../IN-CS2-SCF-SRF-ops-args/scriptInformation.oa.mjs";
// export { scriptInformation } from "../IN-CS2-SCF-SRF-ops-args/scriptInformation.oa.mjs";
import { scriptRun } from "../IN-CS2-SCF-SRF-ops-args/scriptRun.oa.mjs";
// export { scriptRun } from "../IN-CS2-SCF-SRF-ops-args/scriptRun.oa.mjs";
import { promptAndReceiveMessage } from "../IN-CS2-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";
// export { promptAndReceiveMessage } from "../IN-CS2-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";


/**
 * @summary ScfToSsfDpSpecificInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfDpSpecificInvokable OPERATION ::= {activateServiceFiltering | activityTest |
 *    analyseInformation |
 *    analysedInformation |
 *    applyCharging |
 *    applyChargingReport |
 *    callInformationRequest |
 *    cancel |
 *    cancelStatusReportRequest |
 *    collectedInformation |
 *    collectInformation |
 *    connect |
 *    connectToResource | continue |
 *    continueWithArgument | disconnectForwardConnection
 *    | disconnectForwardConnectionWithArgument |
 *    disconnectLeg |
 *    establishTemporaryConnection |
 *    furnishChargingInformation | holdCallInNetwork |
 *    initiateCallAttempt |
 *    mergeCallSegments |
 *    moveCallSegments | moveLeg
 *    | oAbandon | oAnswer |
 *    oCalledPartyBusy |
 *    oDisconnect | oMidCall |
 *    oNoAnswer |
 *    createCallSegmentAssociation |
 *    originationAttemptAuthorized |
 *    reconnect | releaseCall |
 *    requestCurrentStatusReport |
 *    requestEveryStatusChangeReport |
 *    requestFirstStatusMatchReport |
 *    requestNotificationChargingEvent |
 *    requestReportBCSMEvent |
 *    requestReportFacilityEvent |
 *    requestReportUTSI |
 *    resetTimer |
 *    routeSelectFailure |
 *    selectFacility |
 *    selectRoute |
 *    sendChargingInformation |
 *    sendFacilityInformation |
 *    sendSTUI | splitLeg |
 *    tAnswer | tBusy |
 *    tDisconnect |
 *    termAttemptAuthorized |
 *    tMidCall | tNoAnswer |
 *    playAnnouncement |
 *    promptAndCollectUserInformation |
 *    scriptClose |
 *    scriptInformation |
 *    scriptRun |
 *    promptAndReceiveMessage}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfDpSpecificInvokable: (OPERATION)[] = [ activateServiceFiltering, activityTest, analyseInformation, analysedInformation, applyCharging, applyChargingReport, callInformationRequest, cancel, cancelStatusReportRequest, collectedInformation, collectInformation, connect, connectToResource, continue_, continueWithArgument, disconnectForwardConnection, disconnectForwardConnectionWithArgument, disconnectLeg, establishTemporaryConnection, furnishChargingInformation, holdCallInNetwork, initiateCallAttempt, mergeCallSegments, moveCallSegments, moveLeg, oAbandon, oAnswer, oCalledPartyBusy, oDisconnect, oMidCall, oNoAnswer, createCallSegmentAssociation, originationAttemptAuthorized, reconnect, releaseCall, requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, requestNotificationChargingEvent, requestReportBCSMEvent, requestReportFacilityEvent, requestReportUTSI, resetTimer, routeSelectFailure, selectFacility, selectRoute, sendChargingInformation, sendFacilityInformation, sendSTUI, splitLeg, tAnswer, tBusy, tDisconnect, termAttemptAuthorized, tMidCall, tNoAnswer, playAnnouncement, promptAndCollectUserInformation, scriptClose, scriptInformation, scriptRun, promptAndReceiveMessage, ];

/* eslint-enable */
