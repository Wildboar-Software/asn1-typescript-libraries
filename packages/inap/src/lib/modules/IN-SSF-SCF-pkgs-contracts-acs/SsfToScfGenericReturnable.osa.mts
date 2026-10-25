/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activateServiceFiltering } from "../IN-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";
// export { activateServiceFiltering } from "../IN-SSF-SCF-ops-args/activateServiceFiltering.oa.mjs";
import { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
import { applyCharging } from "../IN-SSF-SCF-ops-args/applyCharging.oa.mjs";
// export { applyCharging } from "../IN-SSF-SCF-ops-args/applyCharging.oa.mjs";
import { applyChargingReport } from "../IN-SSF-SCF-ops-args/applyChargingReport.oa.mjs";
// export { applyChargingReport } from "../IN-SSF-SCF-ops-args/applyChargingReport.oa.mjs";
import { callGap } from "../IN-SSF-SCF-ops-args/callGap.oa.mjs";
// export { callGap } from "../IN-SSF-SCF-ops-args/callGap.oa.mjs";
import { callInformationRequest } from "../IN-SSF-SCF-ops-args/callInformationRequest.oa.mjs";
// export { callInformationRequest } from "../IN-SSF-SCF-ops-args/callInformationRequest.oa.mjs";
import { cancel } from "../IN-SSF-SCF-ops-args/cancel.oa.mjs";
// export { cancel } from "../IN-SSF-SCF-ops-args/cancel.oa.mjs";
import { cancelStatusReportRequest } from "../IN-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
import { collectInformation } from "../IN-SSF-SCF-ops-args/collectInformation.oa.mjs";
// export { collectInformation } from "../IN-SSF-SCF-ops-args/collectInformation.oa.mjs";
import { connect } from "../IN-SSF-SCF-ops-args/connect.oa.mjs";
// export { connect } from "../IN-SSF-SCF-ops-args/connect.oa.mjs";
import { connectToResource } from "../IN-SSF-SCF-ops-args/connectToResource.oa.mjs";
// export { connectToResource } from "../IN-SSF-SCF-ops-args/connectToResource.oa.mjs";
import { continue_ } from "../IN-SSF-SCF-ops-args/continue.oa.mjs";
// export { continue_ } from "../IN-SSF-SCF-ops-args/continue.oa.mjs";
import { continueWithArgument } from "../IN-SSF-SCF-ops-args/continueWithArgument.oa.mjs";
// export { continueWithArgument } from "../IN-SSF-SCF-ops-args/continueWithArgument.oa.mjs";
import { createCallSegmentAssociation } from "../IN-SSF-SCF-ops-args/createCallSegmentAssociation.oa.mjs";
// export { createCallSegmentAssociation } from "../IN-SSF-SCF-ops-args/createCallSegmentAssociation.oa.mjs";
import { disconnectForwardConnection } from "../IN-SSF-SCF-ops-args/disconnectForwardConnection.oa.mjs";
// export { disconnectForwardConnection } from "../IN-SSF-SCF-ops-args/disconnectForwardConnection.oa.mjs";
import { disconnectForwardConnectionWithArgument } from "../IN-SSF-SCF-ops-args/disconnectForwardConnectionWithArgument.oa.mjs";
// export { disconnectForwardConnectionWithArgument } from "../IN-SSF-SCF-ops-args/disconnectForwardConnectionWithArgument.oa.mjs";
import { disconnectLeg } from "../IN-SSF-SCF-ops-args/disconnectLeg.oa.mjs";
// export { disconnectLeg } from "../IN-SSF-SCF-ops-args/disconnectLeg.oa.mjs";
import { establishTemporaryConnection } from "../IN-SSF-SCF-ops-args/establishTemporaryConnection.oa.mjs";
// export { establishTemporaryConnection } from "../IN-SSF-SCF-ops-args/establishTemporaryConnection.oa.mjs";
import { furnishChargingInformation } from "../IN-SSF-SCF-ops-args/furnishChargingInformation.oa.mjs";
// export { furnishChargingInformation } from "../IN-SSF-SCF-ops-args/furnishChargingInformation.oa.mjs";
import { holdCallInNetwork } from "../IN-SSF-SCF-ops-args/holdCallInNetwork.oa.mjs";
// export { holdCallInNetwork } from "../IN-SSF-SCF-ops-args/holdCallInNetwork.oa.mjs";
import { initialDP } from "../IN-SSF-SCF-ops-args/initialDP.oa.mjs";
// export { initialDP } from "../IN-SSF-SCF-ops-args/initialDP.oa.mjs";
import { mergeCallSegments } from "../IN-SSF-SCF-ops-args/mergeCallSegments.oa.mjs";
// export { mergeCallSegments } from "../IN-SSF-SCF-ops-args/mergeCallSegments.oa.mjs";
import { moveCallSegments } from "../IN-SSF-SCF-ops-args/moveCallSegments.oa.mjs";
// export { moveCallSegments } from "../IN-SSF-SCF-ops-args/moveCallSegments.oa.mjs";
import { moveLeg } from "../IN-SSF-SCF-ops-args/moveLeg.oa.mjs";
// export { moveLeg } from "../IN-SSF-SCF-ops-args/moveLeg.oa.mjs";
import { reconnect } from "../IN-SSF-SCF-ops-args/reconnect.oa.mjs";
// export { reconnect } from "../IN-SSF-SCF-ops-args/reconnect.oa.mjs";
import { releaseCall } from "../IN-SSF-SCF-ops-args/releaseCall.oa.mjs";
// export { releaseCall } from "../IN-SSF-SCF-ops-args/releaseCall.oa.mjs";
import { requestCurrentStatusReport } from "../IN-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
import { requestNotificationChargingEvent } from "../IN-SSF-SCF-ops-args/requestNotificationChargingEvent.oa.mjs";
// export { requestNotificationChargingEvent } from "../IN-SSF-SCF-ops-args/requestNotificationChargingEvent.oa.mjs";
import { requestReportBCSMEvent } from "../IN-SSF-SCF-ops-args/requestReportBCSMEvent.oa.mjs";
// export { requestReportBCSMEvent } from "../IN-SSF-SCF-ops-args/requestReportBCSMEvent.oa.mjs";
import { requestReportFacilityEvent } from "../IN-SSF-SCF-ops-args/requestReportFacilityEvent.oa.mjs";
// export { requestReportFacilityEvent } from "../IN-SSF-SCF-ops-args/requestReportFacilityEvent.oa.mjs";
import { requestReportUTSI } from "../IN-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
// export { requestReportUTSI } from "../IN-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
import { resetTimer } from "../IN-SSF-SCF-ops-args/resetTimer.oa.mjs";
// export { resetTimer } from "../IN-SSF-SCF-ops-args/resetTimer.oa.mjs";
import { sendChargingInformation } from "../IN-SSF-SCF-ops-args/sendChargingInformation.oa.mjs";
// export { sendChargingInformation } from "../IN-SSF-SCF-ops-args/sendChargingInformation.oa.mjs";
import { sendFacilityInformation } from "../IN-SSF-SCF-ops-args/sendFacilityInformation.oa.mjs";
// export { sendFacilityInformation } from "../IN-SSF-SCF-ops-args/sendFacilityInformation.oa.mjs";
import { sendSTUI } from "../IN-SSF-SCF-ops-args/sendSTUI.oa.mjs";
// export { sendSTUI } from "../IN-SSF-SCF-ops-args/sendSTUI.oa.mjs";
import { setServiceProfile } from "../IN-SSF-SCF-ops-args/setServiceProfile.oa.mjs";
// export { setServiceProfile } from "../IN-SSF-SCF-ops-args/setServiceProfile.oa.mjs";
import { splitLeg } from "../IN-SSF-SCF-ops-args/splitLeg.oa.mjs";
// export { splitLeg } from "../IN-SSF-SCF-ops-args/splitLeg.oa.mjs";
import { playAnnouncement } from "../IN-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
// export { playAnnouncement } from "../IN-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../IN-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
// export { promptAndCollectUserInformation } from "../IN-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { scriptClose } from "../IN-SCF-SRF-ops-args/scriptClose.oa.mjs";
// export { scriptClose } from "../IN-SCF-SRF-ops-args/scriptClose.oa.mjs";
import { scriptInformation } from "../IN-SCF-SRF-ops-args/scriptInformation.oa.mjs";
// export { scriptInformation } from "../IN-SCF-SRF-ops-args/scriptInformation.oa.mjs";
import { scriptRun } from "../IN-SCF-SRF-ops-args/scriptRun.oa.mjs";
// export { scriptRun } from "../IN-SCF-SRF-ops-args/scriptRun.oa.mjs";
import { promptAndReceiveMessage } from "../IN-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";
// export { promptAndReceiveMessage } from "../IN-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";


/**
 * @summary SsfToScfGenericReturnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SsfToScfGenericReturnable OPERATION ::= {activateServiceFiltering | activityTest |
 *    applyCharging |
 *    applyChargingReport |
 *    callGap |
 *    callInformationRequest |
 *    cancel |
 *    cancelStatusReportRequest |
 *    collectInformation |
 *    connect |
 *    connectToResource | continue |
 *    continueWithArgument |
 *    createCallSegmentAssociation |
 *    disconnectForwardConnection |
 *    disconnectForwardConnectionWithArgument |
 *    disconnectLeg |
 *    establishTemporaryConnection |
 *    furnishChargingInformation | holdCallInNetwork |
 *    initialDP |
 *    mergeCallSegments |
 *    moveCallSegments |
 *    moveLeg |
 *    reconnect |
 *    releaseCall |
 *    requestCurrentStatusReport |
 *    requestEveryStatusChangeReport |
 *    requestFirstStatusMatchReport |
 *    requestNotificationChargingEvent |
 *    requestReportBCSMEvent |
 *    requestReportFacilityEvent |
 *    requestReportUTSI |
 *    resetTimer |
 *    sendChargingInformation |
 *    sendFacilityInformation |
 *    sendSTUI |
 *    setServiceProfile |
 *    splitLeg |
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
const SsfToScfGenericReturnable: (OPERATION)[] = [ activateServiceFiltering, activityTest, applyCharging, applyChargingReport, callGap, callInformationRequest, cancel, cancelStatusReportRequest, collectInformation, connect, connectToResource, continue_, continueWithArgument, createCallSegmentAssociation, disconnectForwardConnection, disconnectForwardConnectionWithArgument, disconnectLeg, establishTemporaryConnection, furnishChargingInformation, holdCallInNetwork, initialDP, mergeCallSegments, moveCallSegments, moveLeg, reconnect, releaseCall, requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, requestNotificationChargingEvent, requestReportBCSMEvent, requestReportFacilityEvent, requestReportUTSI, resetTimer, sendChargingInformation, sendFacilityInformation, sendSTUI, setServiceProfile, splitLeg, playAnnouncement, promptAndCollectUserInformation, scriptClose, scriptInformation, scriptRun, promptAndReceiveMessage, ];

/* eslint-enable */
