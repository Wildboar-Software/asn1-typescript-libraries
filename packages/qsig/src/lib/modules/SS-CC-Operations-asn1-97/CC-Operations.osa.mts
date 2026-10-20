/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ccbsRequest } from "../SS-CC-Operations-asn1-97/ccbsRequest.oa.mjs";
// export { ccbsRequest } from "../SS-CC-Operations-asn1-97/ccbsRequest.oa.mjs";
import { ccnrRequest } from "../SS-CC-Operations-asn1-97/ccnrRequest.oa.mjs";
// export { ccnrRequest } from "../SS-CC-Operations-asn1-97/ccnrRequest.oa.mjs";
import { ccCancel } from "../SS-CC-Operations-asn1-97/ccCancel.oa.mjs";
// export { ccCancel } from "../SS-CC-Operations-asn1-97/ccCancel.oa.mjs";
import { ccExecPossible } from "../SS-CC-Operations-asn1-97/ccExecPossible.oa.mjs";
// export { ccExecPossible } from "../SS-CC-Operations-asn1-97/ccExecPossible.oa.mjs";
import { ccPathReserve } from "../SS-CC-Operations-asn1-97/ccPathReserve.oa.mjs";
// export { ccPathReserve } from "../SS-CC-Operations-asn1-97/ccPathReserve.oa.mjs";
import { ccRingout } from "../SS-CC-Operations-asn1-97/ccRingout.oa.mjs";
// export { ccRingout } from "../SS-CC-Operations-asn1-97/ccRingout.oa.mjs";
import { ccSuspend } from "../SS-CC-Operations-asn1-97/ccSuspend.oa.mjs";
// export { ccSuspend } from "../SS-CC-Operations-asn1-97/ccSuspend.oa.mjs";
import { ccResume } from "../SS-CC-Operations-asn1-97/ccResume.oa.mjs";
// export { ccResume } from "../SS-CC-Operations-asn1-97/ccResume.oa.mjs";


/**
 * @summary CC_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CC-Operations OPERATION ::= {
 *     ccbsRequest
 *     | ccnrRequest
 *     | ccCancel
 *     | ccExecPossible
 *     | ccPathReserve
 *     | ccRingout
 *     | ccSuspend
 *     | ccResume
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const CC_Operations: (OPERATION)[] = [ ccbsRequest, ccnrRequest, ccCancel, ccExecPossible, ccPathReserve, ccRingout, ccSuspend, ccResume, ];

/* eslint-enable */
