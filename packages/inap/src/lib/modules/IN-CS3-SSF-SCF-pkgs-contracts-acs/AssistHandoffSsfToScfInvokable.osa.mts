/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTest } from "../IN-CS3-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS3-SSF-SCF-ops-args/activityTest.oa.mjs";
import { applyCharging } from "../IN-CS3-SSF-SCF-ops-args/applyCharging.oa.mjs";
// export { applyCharging } from "../IN-CS3-SSF-SCF-ops-args/applyCharging.oa.mjs";
import { applyChargingReport } from "../IN-CS3-SSF-SCF-ops-args/applyChargingReport.oa.mjs";
// export { applyChargingReport } from "../IN-CS3-SSF-SCF-ops-args/applyChargingReport.oa.mjs";
import { assistRequestInstructions } from "../IN-CS3-SSF-SCF-ops-args/assistRequestInstructions.oa.mjs";
// export { assistRequestInstructions } from "../IN-CS3-SSF-SCF-ops-args/assistRequestInstructions.oa.mjs";
import { cancel } from "../IN-CS3-SSF-SCF-ops-args/cancel.oa.mjs";
// export { cancel } from "../IN-CS3-SSF-SCF-ops-args/cancel.oa.mjs";
import { cancelStatusReportRequest } from "../IN-CS3-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
// export { cancelStatusReportRequest } from "../IN-CS3-SSF-SCF-ops-args/cancelStatusReportRequest.oa.mjs";
import { connectToResource } from "../IN-CS3-SSF-SCF-ops-args/connectToResource.oa.mjs";
// export { connectToResource } from "../IN-CS3-SSF-SCF-ops-args/connectToResource.oa.mjs";
import { disconnectForwardConnection } from "../IN-CS3-SSF-SCF-ops-args/disconnectForwardConnection.oa.mjs";
// export { disconnectForwardConnection } from "../IN-CS3-SSF-SCF-ops-args/disconnectForwardConnection.oa.mjs";
import { disconnectForwardConnectionWithArgument } from "../IN-CS3-SSF-SCF-ops-args/disconnectForwardConnectionWithArgument.oa.mjs";
// export { disconnectForwardConnectionWithArgument } from "../IN-CS3-SSF-SCF-ops-args/disconnectForwardConnectionWithArgument.oa.mjs";
import { furnishChargingInformation } from "../IN-CS3-SSF-SCF-ops-args/furnishChargingInformation.oa.mjs";
// export { furnishChargingInformation } from "../IN-CS3-SSF-SCF-ops-args/furnishChargingInformation.oa.mjs";
import { holdCallInNetwork } from "../IN-CS3-SSF-SCF-ops-args/holdCallInNetwork.oa.mjs";
// export { holdCallInNetwork } from "../IN-CS3-SSF-SCF-ops-args/holdCallInNetwork.oa.mjs";
import { playAnnouncement } from "../IN-CS3-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
// export { playAnnouncement } from "../IN-CS3-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../IN-CS3-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
// export { promptAndCollectUserInformation } from "../IN-CS3-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { requestCurrentStatusReport } from "../IN-CS3-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-CS3-SSF-SCF-ops-args/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-CS3-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-CS3-SSF-SCF-ops-args/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-CS3-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-CS3-SSF-SCF-ops-args/requestFirstStatusMatchReport.oa.mjs";
import { resetTimer } from "../IN-CS3-SSF-SCF-ops-args/resetTimer.oa.mjs";
// export { resetTimer } from "../IN-CS3-SSF-SCF-ops-args/resetTimer.oa.mjs";
import { statusReport } from "../IN-CS3-SSF-SCF-ops-args/statusReport.oa.mjs";
// export { statusReport } from "../IN-CS3-SSF-SCF-ops-args/statusReport.oa.mjs";
import { scriptClose } from "../IN-CS3-SCF-SRF-ops-args/scriptClose.oa.mjs";
// export { scriptClose } from "../IN-CS3-SCF-SRF-ops-args/scriptClose.oa.mjs";
import { scriptEvent } from "../IN-CS3-SCF-SRF-ops-args/scriptEvent.oa.mjs";
// export { scriptEvent } from "../IN-CS3-SCF-SRF-ops-args/scriptEvent.oa.mjs";
import { scriptInformation } from "../IN-CS3-SCF-SRF-ops-args/scriptInformation.oa.mjs";
// export { scriptInformation } from "../IN-CS3-SCF-SRF-ops-args/scriptInformation.oa.mjs";
import { scriptRun } from "../IN-CS3-SCF-SRF-ops-args/scriptRun.oa.mjs";
// export { scriptRun } from "../IN-CS3-SCF-SRF-ops-args/scriptRun.oa.mjs";
import { sendChargingInformation } from "../IN-CS3-SSF-SCF-ops-args/sendChargingInformation.oa.mjs";
// export { sendChargingInformation } from "../IN-CS3-SSF-SCF-ops-args/sendChargingInformation.oa.mjs";
import { specializedResourceReport } from "../IN-CS3-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
// export { specializedResourceReport } from "../IN-CS3-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
import { promptAndReceiveMessage } from "../IN-CS3-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";
// export { promptAndReceiveMessage } from "../IN-CS3-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";


/**
 * @summary AssistHandoffSsfToScfInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistHandoffSsfToScfInvokable OPERATION ::= {activityTest | applyCharging |
 *    applyChargingReport |
 *    assistRequestInstructions |
 *    cancel |
 *    cancelStatusReportRequest |
 *    connectToResource |
 *    disconnectForwardConnection |
 *    disconnectForwardConnectionWithArgument |
 *    furnishChargingInformation | holdCallInNetwork |
 *    playAnnouncement |
 *    promptAndCollectUserInformation |
 *    requestCurrentStatusReport |
 *    requestEveryStatusChangeReport |
 *    requestFirstStatusMatchReport |
 *    resetTimer |
 *    statusReport |
 *    scriptClose |
 *    scriptEvent |
 *    scriptInformation |
 *    scriptRun |
 *    sendChargingInformation |
 *    specializedResourceReport |
 *    promptAndReceiveMessage}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const AssistHandoffSsfToScfInvokable: (OPERATION)[] = [ activityTest, applyCharging, applyChargingReport, assistRequestInstructions, cancel, cancelStatusReportRequest, connectToResource, disconnectForwardConnection, disconnectForwardConnectionWithArgument, furnishChargingInformation, holdCallInNetwork, playAnnouncement, promptAndCollectUserInformation, requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, resetTimer, statusReport, scriptClose, scriptEvent, scriptInformation, scriptRun, sendChargingInformation, specializedResourceReport, promptAndReceiveMessage, ];

/* eslint-enable */
