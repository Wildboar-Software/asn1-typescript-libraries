/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ccbsRequest } from "../SS-CC-Operations-asn1-97/ccbsRequest.oa.mjs";
import { ccnrRequest } from "../SS-CC-Operations-asn1-97/ccnrRequest.oa.mjs";
import { ccCancel } from "../SS-CC-Operations-asn1-97/ccCancel.oa.mjs";
import { ccExecPossible } from "../SS-CC-Operations-asn1-97/ccExecPossible.oa.mjs";
import { ccPathReserve } from "../SS-CC-Operations-asn1-97/ccPathReserve.oa.mjs";
import { ccRingout } from "../SS-CC-Operations-asn1-97/ccRingout.oa.mjs";
import { ccSuspend } from "../SS-CC-Operations-asn1-97/ccSuspend.oa.mjs";
import { ccResume } from "../SS-CC-Operations-asn1-97/ccResume.oa.mjs";

/**
 * @summary CC_Operations
 * @description
 *
 * Operations of SS-CC-Operations-asn1-97 (ECMA-186 §6.3.1):
 * `ccbsRequest`, `ccnrRequest`, `ccCancel`, `ccExecPossible`,
 * `ccPathReserve`, `ccRingout`, `ccSuspend`, and `ccResume`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
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
