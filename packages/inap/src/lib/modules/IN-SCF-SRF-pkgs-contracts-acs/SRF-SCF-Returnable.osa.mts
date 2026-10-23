/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { assistRequestInstructions } from "../IN-SSF-SCF-ops-args/assistRequestInstructions.oa.mjs";
// export { assistRequestInstructions } from "../IN-SSF-SCF-ops-args/assistRequestInstructions.oa.mjs";
import { cancel } from "../IN-SSF-SCF-ops-args/cancel.oa.mjs";
// export { cancel } from "../IN-SSF-SCF-ops-args/cancel.oa.mjs";
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
import { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";


/**
 * @summary SRF_SCF_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SRF-SCF-Returnable OPERATION ::= {assistRequestInstructions |
 *    cancel |
 *    playAnnouncement |
 *    promptAndCollectUserInformation |
 *    scriptClose |
 *    scriptInformation |
 *    scriptRun |
 *    promptAndReceiveMessage | activityTest}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SRF_SCF_Returnable: (OPERATION)[] = [ assistRequestInstructions, cancel, playAnnouncement, promptAndCollectUserInformation, scriptClose, scriptInformation, scriptRun, promptAndReceiveMessage, activityTest, ];

/* eslint-enable */
