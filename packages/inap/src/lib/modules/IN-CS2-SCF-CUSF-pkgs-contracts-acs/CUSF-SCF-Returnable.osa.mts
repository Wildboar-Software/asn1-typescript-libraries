/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activationReceivedAndAuthorized } from "../IN-CS2-SCF-CUSF-ops-args/activationReceivedAndAuthorized.oa.mjs";
// export { activationReceivedAndAuthorized } from "../IN-CS2-SCF-CUSF-ops-args/activationReceivedAndAuthorized.oa.mjs";
import { activityTest } from "../IN-CS2-SSF-SCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../IN-CS2-SSF-SCF-ops-args/activityTest.oa.mjs";
import { componentReceived } from "../IN-CS2-SCF-CUSF-ops-args/componentReceived.oa.mjs";
// export { componentReceived } from "../IN-CS2-SCF-CUSF-ops-args/componentReceived.oa.mjs";
import { requestReportBCUSMEvent } from "../IN-CS2-SCF-CUSF-ops-args/requestReportBCUSMEvent.oa.mjs";
// export { requestReportBCUSMEvent } from "../IN-CS2-SCF-CUSF-ops-args/requestReportBCUSMEvent.oa.mjs";
import { sendComponent } from "../IN-CS2-SCF-CUSF-ops-args/sendComponent.oa.mjs";
// export { sendComponent } from "../IN-CS2-SCF-CUSF-ops-args/sendComponent.oa.mjs";
import { associationReleaseRequested } from "../IN-CS2-SCF-CUSF-ops-args/associationReleaseRequested.oa.mjs";
// export { associationReleaseRequested } from "../IN-CS2-SCF-CUSF-ops-args/associationReleaseRequested.oa.mjs";


/**
 * @summary CUSF_SCF_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUSF-SCF-Returnable OPERATION ::= {activationReceivedAndAuthorized | activityTest |
 *    componentReceived |
 *    requestReportBCUSMEvent |
 *    sendComponent |
 *    associationReleaseRequested}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const CUSF_SCF_Returnable: (OPERATION)[] = [ activationReceivedAndAuthorized, activityTest, componentReceived, requestReportBCUSMEvent, sendComponent, associationReleaseRequested, ];

/* eslint-enable */
