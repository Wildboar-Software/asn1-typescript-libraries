/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activationReceivedAndAuthorized } from "../IN-CS2-SCF-CUSF-ops-args/activationReceivedAndAuthorized.oa.mjs";
// export { activationReceivedAndAuthorized } from "../IN-CS2-SCF-CUSF-ops-args/activationReceivedAndAuthorized.oa.mjs";
import { activityTest } from "../IN-CS2-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS2-SSF-SCF-ops-args/activityTest.oa.mjs";
import { componentReceived } from "../IN-CS2-SCF-CUSF-ops-args/componentReceived.oa.mjs";
// export { componentReceived } from "../IN-CS2-SCF-CUSF-ops-args/componentReceived.oa.mjs";
import { releaseAssociation } from "../IN-CS2-SCF-CUSF-ops-args/releaseAssociation.oa.mjs";
// export { releaseAssociation } from "../IN-CS2-SCF-CUSF-ops-args/releaseAssociation.oa.mjs";
import { requestReportBCUSMEvent } from "../IN-CS2-SCF-CUSF-ops-args/requestReportBCUSMEvent.oa.mjs";
// export { requestReportBCUSMEvent } from "../IN-CS2-SCF-CUSF-ops-args/requestReportBCUSMEvent.oa.mjs";
import { sendComponent } from "../IN-CS2-SCF-CUSF-ops-args/sendComponent.oa.mjs";
// export { sendComponent } from "../IN-CS2-SCF-CUSF-ops-args/sendComponent.oa.mjs";
import { initiateAssociation } from "../IN-CS2-SCF-CUSF-ops-args/initiateAssociation.oa.mjs";
// export { initiateAssociation } from "../IN-CS2-SCF-CUSF-ops-args/initiateAssociation.oa.mjs";
import { associationReleaseRequested } from "../IN-CS2-SCF-CUSF-ops-args/associationReleaseRequested.oa.mjs";
// export { associationReleaseRequested } from "../IN-CS2-SCF-CUSF-ops-args/associationReleaseRequested.oa.mjs";


/**
 * @summary SCF_CUSF_Invokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCF-CUSF-Invokable OPERATION ::= {activationReceivedAndAuthorized | activityTest |
 *    componentReceived |
 *    releaseAssociation |
 *    requestReportBCUSMEvent |
 *    sendComponent |
 *    initiateAssociation |
 *    associationReleaseRequested}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SCF_CUSF_Invokable: (OPERATION)[] = [ activationReceivedAndAuthorized, activityTest, componentReceived, releaseAssociation, requestReportBCUSMEvent, sendComponent, initiateAssociation, associationReleaseRequested, ];

/* eslint-enable */
