/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTest } from "../IN-CS3-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS3-SSF-SCF-ops-args/activityTest.oa.mjs";
import { establishChargingRecord } from "../IN-CS3-SCF-SCF-ops-args/establishChargingRecord.oa.mjs";
// export { establishChargingRecord } from "../IN-CS3-SCF-SCF-ops-args/establishChargingRecord.oa.mjs";
import { confirmedNotificationProvided } from "../IN-CS3-SCF-SCF-ops-args/confirmedNotificationProvided.oa.mjs";
// export { confirmedNotificationProvided } from "../IN-CS3-SCF-SCF-ops-args/confirmedNotificationProvided.oa.mjs";
import { confirmedReportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/confirmedReportChargingInformation.oa.mjs";
// export { confirmedReportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/confirmedReportChargingInformation.oa.mjs";
import { handlingInformationRequest } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationRequest.oa.mjs";
// export { handlingInformationRequest } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationRequest.oa.mjs";
import { handlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
// export { handlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";
import { networkCapability } from "../IN-CS3-SCF-SCF-ops-args/networkCapability.oa.mjs";
// export { networkCapability } from "../IN-CS3-SCF-SCF-ops-args/networkCapability.oa.mjs";
import { provideUserInformation } from "../IN-CS3-SCF-SCF-ops-args/provideUserInformation.oa.mjs";
// export { provideUserInformation } from "../IN-CS3-SCF-SCF-ops-args/provideUserInformation.oa.mjs";
import { requestNotification } from "../IN-CS3-SCF-SCF-ops-args/requestNotification.oa.mjs";
// export { requestNotification } from "../IN-CS3-SCF-SCF-ops-args/requestNotification.oa.mjs";
import { runUserScript } from "../IN-CS3-SCF-SCF-ops-args/runUserScript.oa.mjs";
// export { runUserScript } from "../IN-CS3-SCF-SCF-ops-args/runUserScript.oa.mjs";
import { transferSTSI } from "../IN-CS3-SCF-SCF-ops-args/transferSTSI.oa.mjs";
// export { transferSTSI } from "../IN-CS3-SCF-SCF-ops-args/transferSTSI.oa.mjs";


/**
 * @summary SCF_SCF_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCF-SCF-Returnable OPERATION ::= {activityTest | establishChargingRecord |
 *    confirmedNotificationProvided |
 *    confirmedReportChargingInformation |
 *    handlingInformationRequest |
 *    handlingInformationResult | networkCapability |
 *    provideUserInformation | requestNotification |
 *    runUserScript | transferSTSI}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SCF_SCF_Returnable: (OPERATION)[] = [ activityTest, establishChargingRecord, confirmedNotificationProvided, confirmedReportChargingInformation, handlingInformationRequest, handlingInformationResult, networkCapability, provideUserInformation, requestNotification, runUserScript, transferSTSI, ];

/* eslint-enable */
