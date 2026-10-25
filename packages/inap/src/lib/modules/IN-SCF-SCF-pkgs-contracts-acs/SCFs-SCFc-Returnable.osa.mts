/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
import { announcementCompletionReport } from "../IN-SCF-SCF-ops-args/announcementCompletionReport.oa.mjs";
// export { announcementCompletionReport } from "../IN-SCF-SCF-ops-args/announcementCompletionReport.oa.mjs";
import { confirmedNotificationProvided } from "../IN-SCF-SCF-ops-args/confirmedNotificationProvided.oa.mjs";
// export { confirmedNotificationProvided } from "../IN-SCF-SCF-ops-args/confirmedNotificationProvided.oa.mjs";
import { confirmedReportChargingInformation } from "../IN-SCF-SCF-ops-args/confirmedReportChargingInformation.oa.mjs";
// export { confirmedReportChargingInformation } from "../IN-SCF-SCF-ops-args/confirmedReportChargingInformation.oa.mjs";
import { establishChargingRecord } from "../IN-SCF-SCF-ops-args/establishChargingRecord.oa.mjs";
// export { establishChargingRecord } from "../IN-SCF-SCF-ops-args/establishChargingRecord.oa.mjs";
import { handlingInformationRequest } from "../IN-SCF-SCF-ops-args/handlingInformationRequest.oa.mjs";
// export { handlingInformationRequest } from "../IN-SCF-SCF-ops-args/handlingInformationRequest.oa.mjs";
import { handlingInformationResult } from "../IN-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
// export { handlingInformationResult } from "../IN-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
import { initiateCallRequest } from "../IN-SCF-SCF-ops-args/initiateCallRequest.oa.mjs";
// export { initiateCallRequest } from "../IN-SCF-SCF-ops-args/initiateCallRequest.oa.mjs";
import { networkCapability } from "../IN-SCF-SCF-ops-args/networkCapability.oa.mjs";
// export { networkCapability } from "../IN-SCF-SCF-ops-args/networkCapability.oa.mjs";
import { notificationProvided } from "../IN-SCF-SCF-ops-args/notificationProvided.oa.mjs";
// export { notificationProvided } from "../IN-SCF-SCF-ops-args/notificationProvided.oa.mjs";
import { provideAnnouncementRequest } from "../IN-SCF-SCF-ops-args/provideAnnouncementRequest.oa.mjs";
// export { provideAnnouncementRequest } from "../IN-SCF-SCF-ops-args/provideAnnouncementRequest.oa.mjs";
import { provideUserInformation } from "../IN-SCF-SCF-ops-args/provideUserInformation.oa.mjs";
// export { provideUserInformation } from "../IN-SCF-SCF-ops-args/provideUserInformation.oa.mjs";
import { reportChargingInformation } from "../IN-SCF-SCF-ops-args/reportChargingInformation.oa.mjs";
// export { reportChargingInformation } from "../IN-SCF-SCF-ops-args/reportChargingInformation.oa.mjs";
import { requestNotification } from "../IN-SCF-SCF-ops-args/requestNotification.oa.mjs";
// export { requestNotification } from "../IN-SCF-SCF-ops-args/requestNotification.oa.mjs";
import { runUserScript } from "../IN-SCF-SCF-ops-args/runUserScript.oa.mjs";
// export { runUserScript } from "../IN-SCF-SCF-ops-args/runUserScript.oa.mjs";
import { transferSTSI } from "../IN-SCF-SCF-ops-args/transferSTSI.oa.mjs";
// export { transferSTSI } from "../IN-SCF-SCF-ops-args/transferSTSI.oa.mjs";


/**
 * @summary SCFs_SCFc_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFs-SCFc-Returnable OPERATION ::= {activityTest | announcementCompletionReport |
 *    confirmedNotificationProvided |
 *    confirmedReportChargingInformation |
 *    establishChargingRecord |
 *    handlingInformationRequest |
 *    handlingInformationResult | initiateCallRequest |
 *    networkCapability | notificationProvided |
 *    provideAnnouncementRequest |
 *    provideUserInformation |
 *    reportChargingInformation |
 *    requestNotification | runUserScript |
 *    transferSTSI}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SCFs_SCFc_Returnable: (OPERATION)[] = [ activityTest, announcementCompletionReport, confirmedNotificationProvided, confirmedReportChargingInformation, establishChargingRecord, handlingInformationRequest, handlingInformationResult, initiateCallRequest, networkCapability, notificationProvided, provideAnnouncementRequest, provideUserInformation, reportChargingInformation, requestNotification, runUserScript, transferSTSI, ];

/* eslint-enable */
