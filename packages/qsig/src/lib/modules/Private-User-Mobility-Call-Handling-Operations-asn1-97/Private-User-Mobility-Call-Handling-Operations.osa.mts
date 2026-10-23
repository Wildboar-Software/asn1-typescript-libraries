/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { pumiEnquiry } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/pumiEnquiry.oa.mjs";
import { pumiDivert } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/pumiDivert.oa.mjs";
import { pumiInform } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/pumiInform.oa.mjs";
import { pumoCall } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/pumoCall.oa.mjs";

/**
 * @summary Private_User_Mobility_Call_Handling_Operations
 * @description
 *
 * ANF-PUMI and ANF-PUMO operations (ECMA-284 §6.3.1): `pumiEnquiry`,
 * `pumiDivert`, `pumiInform`, and `pumoCall`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Private-User-Mobility-Call-Handling-Operations OPERATION ::= {
 *     pumiEnquiry
 *     | pumiDivert
 *     | pumiInform
 *     | pumoCall
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Private_User_Mobility_Call_Handling_Operations: (OPERATION)[] = [ pumiEnquiry, pumiDivert, pumiInform, pumoCall, ];

/* eslint-enable */
