/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { mCRequest } from "../SS-MCR-Operations-asn97/mCRequest.oa.mjs";
// export { mCRequest } from "../SS-MCR-Operations-asn97/mCRequest.oa.mjs";
import { mCAlerting } from "../SS-MCR-Operations-asn97/mCAlerting.oa.mjs";
// export { mCAlerting } from "../SS-MCR-Operations-asn97/mCAlerting.oa.mjs";
import { mCInform } from "../SS-MCR-Operations-asn97/mCInform.oa.mjs";
// export { mCInform } from "../SS-MCR-Operations-asn97/mCInform.oa.mjs";


/**
 * @summary Make_Call_Request_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Make-Call-Request-Operations OPERATION ::= {
 *     mCRequest
 *     | mCAlerting
 *     | mCInform
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Make_Call_Request_Operations: (OPERATION)[] = [ mCRequest, mCAlerting, mCInform, ];

/* eslint-enable */
