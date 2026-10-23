/* eslint-disable */
import { originationAttemptAuthorized } from "../IN-SSF-SCF-ops-args/originationAttemptAuthorized.oa.mjs";
// export { originationAttemptAuthorized } from "../IN-SSF-SCF-ops-args/originationAttemptAuthorized.oa.mjs";
import { collectedInformation } from "../IN-SSF-SCF-ops-args/collectedInformation.oa.mjs";
// export { collectedInformation } from "../IN-SSF-SCF-ops-args/collectedInformation.oa.mjs";
import { analysedInformation } from "../IN-SSF-SCF-ops-args/analysedInformation.oa.mjs";
// export { analysedInformation } from "../IN-SSF-SCF-ops-args/analysedInformation.oa.mjs";
import { routeSelectFailure } from "../IN-SSF-SCF-ops-args/routeSelectFailure.oa.mjs";
// export { routeSelectFailure } from "../IN-SSF-SCF-ops-args/routeSelectFailure.oa.mjs";
import { facilitySelectedAndAvailable } from "../IN-SSF-SCF-ops-args/facilitySelectedAndAvailable.oa.mjs";
// export { facilitySelectedAndAvailable } from "../IN-SSF-SCF-ops-args/facilitySelectedAndAvailable.oa.mjs";
import { oAbandon } from "../IN-SSF-SCF-ops-args/oAbandon.oa.mjs";
// export { oAbandon } from "../IN-SSF-SCF-ops-args/oAbandon.oa.mjs";
import { originationAttempt } from "../IN-SSF-SCF-ops-args/originationAttempt.oa.mjs";
// export { originationAttempt } from "../IN-SSF-SCF-ops-args/originationAttempt.oa.mjs";
import { terminationAttempt } from "../IN-SSF-SCF-ops-args/terminationAttempt.oa.mjs";
// export { terminationAttempt } from "../IN-SSF-SCF-ops-args/terminationAttempt.oa.mjs";
import { oCalledPartyBusy } from "../IN-SSF-SCF-ops-args/oCalledPartyBusy.oa.mjs";
// export { oCalledPartyBusy } from "../IN-SSF-SCF-ops-args/oCalledPartyBusy.oa.mjs";
import { oNoAnswer } from "../IN-SSF-SCF-ops-args/oNoAnswer.oa.mjs";
// export { oNoAnswer } from "../IN-SSF-SCF-ops-args/oNoAnswer.oa.mjs";
import { oAnswer } from "../IN-SSF-SCF-ops-args/oAnswer.oa.mjs";
// export { oAnswer } from "../IN-SSF-SCF-ops-args/oAnswer.oa.mjs";
import { oDisconnect } from "../IN-SSF-SCF-ops-args/oDisconnect.oa.mjs";
// export { oDisconnect } from "../IN-SSF-SCF-ops-args/oDisconnect.oa.mjs";
import { termAttemptAuthorized } from "../IN-SSF-SCF-ops-args/termAttemptAuthorized.oa.mjs";
// export { termAttemptAuthorized } from "../IN-SSF-SCF-ops-args/termAttemptAuthorized.oa.mjs";
import { tBusy } from "../IN-SSF-SCF-ops-args/tBusy.oa.mjs";
// export { tBusy } from "../IN-SSF-SCF-ops-args/tBusy.oa.mjs";
import { tNoAnswer } from "../IN-SSF-SCF-ops-args/tNoAnswer.oa.mjs";
// export { tNoAnswer } from "../IN-SSF-SCF-ops-args/tNoAnswer.oa.mjs";
import { tAnswer } from "../IN-SSF-SCF-ops-args/tAnswer.oa.mjs";
// export { tAnswer } from "../IN-SSF-SCF-ops-args/tAnswer.oa.mjs";
import { tDisconnect } from "../IN-SSF-SCF-ops-args/tDisconnect.oa.mjs";
// export { tDisconnect } from "../IN-SSF-SCF-ops-args/tDisconnect.oa.mjs";
import { id_package_basicBCPDP } from "../IN-object-identifiers/id-package-basicBCPDP.va.mjs";
// export { id_package_basicBCPDP } from "../IN-object-identifiers/id-package-basicBCPDP.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary basicBCPDPPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * basicBCPDPPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {originationAttemptAuthorized | collectedInformation |
 *       analysedInformation | routeSelectFailure |
 *       facilitySelectedAndAvailable | oAbandon |
 *       originationAttempt | terminationAttempt |
 *       oCalledPartyBusy | oNoAnswer | oAnswer |
 *       oDisconnect | termAttemptAuthorized | tBusy |
 *       tNoAnswer | tAnswer | tDisconnect}
 *   ID                id-package-basicBCPDP
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const basicBCPDPPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ originationAttemptAuthorized, collectedInformation, analysedInformation, routeSelectFailure, facilitySelectedAndAvailable, oAbandon, originationAttempt, terminationAttempt, oCalledPartyBusy, oNoAnswer, oAnswer, oDisconnect, termAttemptAuthorized, tBusy, tNoAnswer, tAnswer, tDisconnect, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_basicBCPDP /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
