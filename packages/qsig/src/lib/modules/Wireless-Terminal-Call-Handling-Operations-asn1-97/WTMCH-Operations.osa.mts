/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { wtmiEnquiry } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiEnquiry.oa.mjs";
import { wtmiDivert } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiDivert.oa.mjs";
import { wtmiInform } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmiInform.oa.mjs";
import { wtmoCall } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/wtmoCall.oa.mjs";

/**
 * @summary WTMCH_Operations
 * @description
 *
 * Call-handling operations of ECMA-304 2nd edition (December 2001), module
 * `Wireless-Terminal-Call-Handling-Operations-asn1-97`, §6.3.1 and §7.3.1.
 * `wtmiEnquiry`, `wtmiDivert`, and `wtmiInform` direct an incoming call to a
 * visiting WTMI user (ANF-WTMI, §6.1). `wtmoCall` asks the Home PINX to process
 * an outgoing call from a WTMO user (ANF-WTMO, §7.1). Invoke APDUs of §6.3.1
 * use NFE `destinationEntity` `endPINX` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
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
