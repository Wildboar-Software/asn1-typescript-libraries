/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { initialAssociationDP } from "../IN-SCF-CUSF-Operations/initialAssociationDP.oa.mjs";
// export { initialAssociationDP } from "../IN-SCF-CUSF-Operations/initialAssociationDP.oa.mjs";
import { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
import { eventReportBCUSM } from "../IN-SCF-CUSF-Operations/eventReportBCUSM.oa.mjs";
// export { eventReportBCUSM } from "../IN-SCF-CUSF-Operations/eventReportBCUSM.oa.mjs";
import { releaseAssociation } from "../IN-SCF-CUSF-Operations/releaseAssociation.oa.mjs";
// export { releaseAssociation } from "../IN-SCF-CUSF-Operations/releaseAssociation.oa.mjs";
import { requestReportBCUSMEvent } from "../IN-SCF-CUSF-Operations/requestReportBCUSMEvent.oa.mjs";
// export { requestReportBCUSMEvent } from "../IN-SCF-CUSF-Operations/requestReportBCUSMEvent.oa.mjs";
import { continueAssociation } from "../IN-SCF-CUSF-Operations/continueAssociation.oa.mjs";
// export { continueAssociation } from "../IN-SCF-CUSF-Operations/continueAssociation.oa.mjs";
import { connectAssociation } from "../IN-SCF-CUSF-Operations/connectAssociation.oa.mjs";
// export { connectAssociation } from "../IN-SCF-CUSF-Operations/connectAssociation.oa.mjs";
import { sendComponent } from "../IN-SCF-CUSF-Operations/sendComponent.oa.mjs";
// export { sendComponent } from "../IN-SCF-CUSF-Operations/sendComponent.oa.mjs";
import { sendSTUI } from "../IN-SSF-SCF-ops-args/sendSTUI.oa.mjs";
// export { sendSTUI } from "../IN-SSF-SCF-ops-args/sendSTUI.oa.mjs";
import { requestReportUTSI } from "../IN-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
// export { requestReportUTSI } from "../IN-SSF-SCF-ops-args/requestReportUTSI.oa.mjs";
import { reportUTSI } from "../IN-SSF-SCF-ops-args/reportUTSI.oa.mjs";
// export { reportUTSI } from "../IN-SSF-SCF-ops-args/reportUTSI.oa.mjs";


/**
 * @summary CUSFSCFGeneric_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUSFSCFGeneric-Invokable OPERATION ::= {initialAssociationDP |
 *    activityTest |
 *    eventReportBCUSM | releaseAssociation
 *    | requestReportBCUSMEvent |
 *    continueAssociation |
 *    connectAssociation |
 *    sendComponent |
 *    sendSTUI |
 *    requestReportUTSI |
 *    reportUTSI}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const CUSFSCFGeneric_Invokable: (OPERATION)[] = [ initialAssociationDP, activityTest, eventReportBCUSM, releaseAssociation, requestReportBCUSMEvent, continueAssociation, connectAssociation, sendComponent, sendSTUI, requestReportUTSI, reportUTSI, ];

/* eslint-enable */
