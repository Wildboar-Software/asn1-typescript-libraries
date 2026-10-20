/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { pathRetain } from "../Call-Intrusion-Operations-asn1-97/pathRetain.oa.mjs";
// export { pathRetain } from "../Call-Intrusion-Operations-asn1-97/pathRetain.oa.mjs";
import { serviceAvailable } from "../Call-Intrusion-Operations-asn1-97/serviceAvailable.oa.mjs";
// export { serviceAvailable } from "../Call-Intrusion-Operations-asn1-97/serviceAvailable.oa.mjs";
import { callIntrusionRequest } from "../Call-Intrusion-Operations-asn1-97/callIntrusionRequest.oa.mjs";
// export { callIntrusionRequest } from "../Call-Intrusion-Operations-asn1-97/callIntrusionRequest.oa.mjs";
import { callIntrusionGetCIPL } from "../Call-Intrusion-Operations-asn1-97/callIntrusionGetCIPL.oa.mjs";
// export { callIntrusionGetCIPL } from "../Call-Intrusion-Operations-asn1-97/callIntrusionGetCIPL.oa.mjs";
import { callIntrusionIsolate } from "../Call-Intrusion-Operations-asn1-97/callIntrusionIsolate.oa.mjs";
// export { callIntrusionIsolate } from "../Call-Intrusion-Operations-asn1-97/callIntrusionIsolate.oa.mjs";
import { callIntrusionForcedRelease } from "../Call-Intrusion-Operations-asn1-97/callIntrusionForcedRelease.oa.mjs";
// export { callIntrusionForcedRelease } from "../Call-Intrusion-Operations-asn1-97/callIntrusionForcedRelease.oa.mjs";
import { callIntrusionWOBRequest } from "../Call-Intrusion-Operations-asn1-97/callIntrusionWOBRequest.oa.mjs";
// export { callIntrusionWOBRequest } from "../Call-Intrusion-Operations-asn1-97/callIntrusionWOBRequest.oa.mjs";
import { callIntrusionCompleted } from "../Call-Intrusion-Operations-asn1-97/callIntrusionCompleted.oa.mjs";
// export { callIntrusionCompleted } from "../Call-Intrusion-Operations-asn1-97/callIntrusionCompleted.oa.mjs";
import { cfbOverride } from "../Call-Intrusion-Operations-asn1-97/cfbOverride.oa.mjs";
// export { cfbOverride } from "../Call-Intrusion-Operations-asn1-97/cfbOverride.oa.mjs";


/**
 * @summary Call_Intrusion_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Intrusion-Operations OPERATION ::= {
 *     pathRetain
 *     | serviceAvailable
 *     | callIntrusionRequest
 *     | callIntrusionGetCIPL
 *     | callIntrusionIsolate
 *     | callIntrusionForcedRelease
 *     | callIntrusionWOBRequest
 *     | callIntrusionCompleted
 *     | cfbOverride
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Call_Intrusion_Operations: (OPERATION)[] = [ pathRetain, serviceAvailable, callIntrusionRequest, callIntrusionGetCIPL, callIntrusionIsolate, callIntrusionForcedRelease, callIntrusionWOBRequest, callIntrusionCompleted, cfbOverride, ];

/* eslint-enable */
