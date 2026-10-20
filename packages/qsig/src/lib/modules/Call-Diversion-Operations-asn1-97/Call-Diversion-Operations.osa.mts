/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activateDiversionQ } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ.oa.mjs";
// export { activateDiversionQ } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ.oa.mjs";
import { deactivateDiversionQ } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ.oa.mjs";
// export { deactivateDiversionQ } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ.oa.mjs";
import { interrogateDiversionQ } from "../Call-Diversion-Operations-asn1-97/interrogateDiversionQ.oa.mjs";
// export { interrogateDiversionQ } from "../Call-Diversion-Operations-asn1-97/interrogateDiversionQ.oa.mjs";
import { checkRestriction } from "../Call-Diversion-Operations-asn1-97/checkRestriction.oa.mjs";
// export { checkRestriction } from "../Call-Diversion-Operations-asn1-97/checkRestriction.oa.mjs";
import { callRerouteing } from "../Call-Diversion-Operations-asn1-97/callRerouteing.oa.mjs";
// export { callRerouteing } from "../Call-Diversion-Operations-asn1-97/callRerouteing.oa.mjs";
import { divertingLegInformation1 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation1.oa.mjs";
// export { divertingLegInformation1 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation1.oa.mjs";
import { divertingLegInformation2 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation2.oa.mjs";
// export { divertingLegInformation2 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation2.oa.mjs";
import { divertingLegInformation3 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation3.oa.mjs";
// export { divertingLegInformation3 } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation3.oa.mjs";
import { cfnrDivertedLegFailed } from "../Call-Diversion-Operations-asn1-97/cfnrDivertedLegFailed.oa.mjs";
// export { cfnrDivertedLegFailed } from "../Call-Diversion-Operations-asn1-97/cfnrDivertedLegFailed.oa.mjs";


/**
 * @summary Call_Diversion_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Diversion-Operations OPERATION ::= {
 *     activateDiversionQ
 *     | deactivateDiversionQ
 *     | interrogateDiversionQ
 *     | checkRestriction
 *     | callRerouteing
 *     | divertingLegInformation1
 *     | divertingLegInformation2
 *     | divertingLegInformation3
 *     | cfnrDivertedLegFailed
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Call_Diversion_Operations: (OPERATION)[] = [ activateDiversionQ, deactivateDiversionQ, interrogateDiversionQ, checkRestriction, callRerouteing, divertingLegInformation1, divertingLegInformation2, divertingLegInformation3, cfnrDivertedLegFailed, ];

/* eslint-enable */
