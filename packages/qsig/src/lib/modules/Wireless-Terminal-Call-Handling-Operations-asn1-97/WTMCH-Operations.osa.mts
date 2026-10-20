/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { wtmiEnquiry } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiEnquiry.oa.mjs";
// export { wtmiEnquiry } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiEnquiry.oa.mjs";
import { wtmiDivert } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiDivert.oa.mjs";
// export { wtmiDivert } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiDivert.oa.mjs";
import { wtmiInform } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiInform.oa.mjs";
// export { wtmiInform } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiInform.oa.mjs";
import { wtmoCall } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmoCall.oa.mjs";
// export { wtmoCall } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmoCall.oa.mjs";


/**
 * @summary WTMCH_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WTMCH-Operations OPERATION ::= {
 *     wtmiEnquiry
 *     | wtmiDivert
 *     | wtmiInform
 *     | wtmoCall
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const WTMCH_Operations: (OPERATION)[] = [ wtmiEnquiry, wtmiDivert, wtmiInform, wtmoCall, ];

/* eslint-enable */
