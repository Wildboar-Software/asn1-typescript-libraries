/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activateServiceFiltering } from "../IN-CS-1-Operations/activateServiceFiltering.oa.mjs";
// export { activateServiceFiltering } from "../IN-CS-1-Operations/activateServiceFiltering.oa.mjs";
import { activityTest } from "../IN-CS-1-Operations/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS-1-Operations/activityTest.oa.mjs";
import { requestCurrentStatusReport } from "../IN-CS-1-Operations/requestCurrentStatusReport.oa.mjs";
// export { requestCurrentStatusReport } from "../IN-CS-1-Operations/requestCurrentStatusReport.oa.mjs";
import { requestEveryStatusChangeReport } from "../IN-CS-1-Operations/requestEveryStatusChangeReport.oa.mjs";
// export { requestEveryStatusChangeReport } from "../IN-CS-1-Operations/requestEveryStatusChangeReport.oa.mjs";
import { requestFirstStatusMatchReport } from "../IN-CS-1-Operations/requestFirstStatusMatchReport.oa.mjs";
// export { requestFirstStatusMatchReport } from "../IN-CS-1-Operations/requestFirstStatusMatchReport.oa.mjs";
import { promptAndCollectUserInformation } from "../IN-CS-1-Operations/promptAndCollectUserInformation.oa.mjs";
// export { promptAndCollectUserInformation } from "../IN-CS-1-Operations/promptAndCollectUserInformation.oa.mjs";


/**
 * @summary TC_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TC-Returnable OPERATION ::= {activateServiceFiltering | activityTest | requestCurrentStatusReport |
 *    requestEveryStatusChangeReport | requestFirstStatusMatchReport |
 *    promptAndCollectUserInformation}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const TC_Returnable: (OPERATION)[] = [ activateServiceFiltering, activityTest, requestCurrentStatusReport, requestEveryStatusChangeReport, requestFirstStatusMatchReport, promptAndCollectUserInformation, ];

/* eslint-enable */
