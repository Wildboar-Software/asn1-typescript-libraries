/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { pathRetain } from "../Call-Intrusion-Operations-asn1-97/pathRetain.oa.mjs";
import { serviceAvailable } from "../Call-Intrusion-Operations-asn1-97/serviceAvailable.oa.mjs";
import { callIntrusionRequest } from "../Call-Intrusion-Operations-asn1-97/callIntrusionRequest.oa.mjs";
import { callIntrusionGetCIPL } from "../Call-Intrusion-Operations-asn1-97/callIntrusionGetCIPL.oa.mjs";
import { callIntrusionIsolate } from "../Call-Intrusion-Operations-asn1-97/callIntrusionIsolate.oa.mjs";
import { callIntrusionForcedRelease } from "../Call-Intrusion-Operations-asn1-97/callIntrusionForcedRelease.oa.mjs";
import { callIntrusionWOBRequest } from "../Call-Intrusion-Operations-asn1-97/callIntrusionWOBRequest.oa.mjs";
import { callIntrusionCompleted } from "../Call-Intrusion-Operations-asn1-97/callIntrusionCompleted.oa.mjs";
import { cfbOverride } from "../Call-Intrusion-Operations-asn1-97/cfbOverride.oa.mjs";

/**
 * @summary Call_Intrusion_Operations
 * @description
 *
 * Operations of Call-Intrusion-Operations-asn1-97 (ECMA-203
 * §6.3.1): path retention, intrusion, CIPL enquiry, isolation,
 * forced release, wait on busy, completion, and CFB override.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
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
