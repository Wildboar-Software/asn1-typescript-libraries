/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { initialAssociationDP } from "../IN-SCF-CUSF-Operations/initialAssociationDP.oa.mjs";
// export { initialAssociationDP } from "../IN-SCF-CUSF-Operations/initialAssociationDP.oa.mjs";
import { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-SSF-SCF-ops-args/activityTest.oa.mjs";
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


/**
 * @summary CUSFSCFGeneric_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUSFSCFGeneric-Returnable OPERATION ::= {initialAssociationDP |
 *    activityTest |
 *    requestReportBCUSMEvent |
 *    continueAssociation |
 *    connectAssociation |
 *    sendComponent |
 *    sendSTUI |
 *    requestReportUTSI}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const CUSFSCFGeneric_Returnable: (OPERATION)[] = [ initialAssociationDP, activityTest, requestReportBCUSMEvent, continueAssociation, connectAssociation, sendComponent, sendSTUI, requestReportUTSI, ];

/* eslint-enable */
