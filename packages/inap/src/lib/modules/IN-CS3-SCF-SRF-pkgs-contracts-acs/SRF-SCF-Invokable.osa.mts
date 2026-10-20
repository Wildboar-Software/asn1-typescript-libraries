/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { assistRequestInstructions } from "../IN-CS3-SSF-SCF-ops-args/assistRequestInstructions.oa.mjs";
// export { assistRequestInstructions } from "../IN-CS3-SSF-SCF-ops-args/assistRequestInstructions.oa.mjs";
import { cancel } from "../IN-CS3-SSF-SCF-ops-args/cancel.oa.mjs";
// export { cancel } from "../IN-CS3-SSF-SCF-ops-args/cancel.oa.mjs";
import { playAnnouncement } from "../IN-CS3-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
// export { playAnnouncement } from "../IN-CS3-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../IN-CS3-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
// export { promptAndCollectUserInformation } from "../IN-CS3-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { scriptClose } from "../IN-CS3-SCF-SRF-ops-args/scriptClose.oa.mjs";
// export { scriptClose } from "../IN-CS3-SCF-SRF-ops-args/scriptClose.oa.mjs";
import { scriptEvent } from "../IN-CS3-SCF-SRF-ops-args/scriptEvent.oa.mjs";
// export { scriptEvent } from "../IN-CS3-SCF-SRF-ops-args/scriptEvent.oa.mjs";
import { scriptInformation } from "../IN-CS3-SCF-SRF-ops-args/scriptInformation.oa.mjs";
// export { scriptInformation } from "../IN-CS3-SCF-SRF-ops-args/scriptInformation.oa.mjs";
import { scriptRun } from "../IN-CS3-SCF-SRF-ops-args/scriptRun.oa.mjs";
// export { scriptRun } from "../IN-CS3-SCF-SRF-ops-args/scriptRun.oa.mjs";
import { specializedResourceReport } from "../IN-CS3-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
// export { specializedResourceReport } from "../IN-CS3-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
import { promptAndReceiveMessage } from "../IN-CS3-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";
// export { promptAndReceiveMessage } from "../IN-CS3-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";
import { sRFCallGap } from "../IN-CS3-SCF-SRF-ops-args/sRFCallGap.oa.mjs";
// export { sRFCallGap } from "../IN-CS3-SCF-SRF-ops-args/sRFCallGap.oa.mjs";
import { activityTest } from "../IN-CS3-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS3-SSF-SCF-ops-args/activityTest.oa.mjs";


/**
 * @summary SRF_SCF_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SRF-SCF-Invokable OPERATION ::= {assistRequestInstructions |
 *    cancel |
 *    playAnnouncement |
 *    promptAndCollectUserInformation |
 *    scriptClose |
 *    scriptEvent |
 *    scriptInformation |
 *    scriptRun |
 *    specializedResourceReport |
 *    promptAndReceiveMessage |
 *    sRFCallGap |
 *    activityTest}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SRF_SCF_Invokable: (OPERATION)[] = [ assistRequestInstructions, cancel, playAnnouncement, promptAndCollectUserInformation, scriptClose, scriptEvent, scriptInformation, scriptRun, specializedResourceReport, promptAndReceiveMessage, sRFCallGap, activityTest, ];

/* eslint-enable */
