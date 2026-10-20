/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { initiateAssociation } from "../IN-CS3-SCF-CUSF-Operations/initiateAssociation.oa.mjs";
// export { initiateAssociation } from "../IN-CS3-SCF-CUSF-Operations/initiateAssociation.oa.mjs";
import { activationReceivedAndAuthorized } from "../IN-CS3-SCF-CUSF-Operations/activationReceivedAndAuthorized.oa.mjs";
// export { activationReceivedAndAuthorized } from "../IN-CS3-SCF-CUSF-Operations/activationReceivedAndAuthorized.oa.mjs";
import { activityTest } from "../IN-CS3-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS3-SSF-SCF-ops-args/activityTest.oa.mjs";
import { componentReceived } from "../IN-CS3-SCF-CUSF-Operations/componentReceived.oa.mjs";
// export { componentReceived } from "../IN-CS3-SCF-CUSF-Operations/componentReceived.oa.mjs";
import { requestReportBCUSMEvent } from "../IN-CS3-SCF-CUSF-Operations/requestReportBCUSMEvent.oa.mjs";
// export { requestReportBCUSMEvent } from "../IN-CS3-SCF-CUSF-Operations/requestReportBCUSMEvent.oa.mjs";
import { sendComponent } from "../IN-CS3-SCF-CUSF-Operations/sendComponent.oa.mjs";
// export { sendComponent } from "../IN-CS3-SCF-CUSF-Operations/sendComponent.oa.mjs";
import { associationReleaseRequested } from "../IN-CS3-SCF-CUSF-Operations/associationReleaseRequested.oa.mjs";
// export { associationReleaseRequested } from "../IN-CS3-SCF-CUSF-Operations/associationReleaseRequested.oa.mjs";
import { continueAssociation } from "../IN-CS3-SCF-CUSF-Operations/continueAssociation.oa.mjs";
// export { continueAssociation } from "../IN-CS3-SCF-CUSF-Operations/continueAssociation.oa.mjs";
import { connectAssociation } from "../IN-CS3-SCF-CUSF-Operations/connectAssociation.oa.mjs";
// export { connectAssociation } from "../IN-CS3-SCF-CUSF-Operations/connectAssociation.oa.mjs";
import { sendSTUI } from "../IN-CS3-SSF-SCF-ops-args/sendSTUI.oa.mjs";
// export { sendSTUI } from "../IN-CS3-SSF-SCF-ops-args/sendSTUI.oa.mjs";
import { requestReportUTSI } from "../IN-CS3-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
// export { requestReportUTSI } from "../IN-CS3-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";


/**
 * @summary SCFCUSFDPSpecific_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFCUSFDPSpecific-Returnable OPERATION ::= {initiateAssociation |
 *    activationReceivedAndAuthorized | activityTest |
 *    componentReceived |
 *    requestReportBCUSMEvent |
 *    sendComponent |
 *    associationReleaseRequested |
 *    continueAssociation |
 *    connectAssociation |
 *    sendSTUI |
 *    requestReportUTSI}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SCFCUSFDPSpecific_Returnable: (OPERATION)[] = [ initiateAssociation, activationReceivedAndAuthorized, activityTest, componentReceived, requestReportBCUSMEvent, sendComponent, associationReleaseRequested, continueAssociation, connectAssociation, sendSTUI, requestReportUTSI, ];

/* eslint-enable */
