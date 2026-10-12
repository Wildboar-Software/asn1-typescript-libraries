/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary messagingCCObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messagingCCObjId RELATIVE-OID ::= {emailPDUObjId messagingCC(4)}
 * ```
 * 
 * @constant
 */
export
const messagingCCObjId: RELATIVE_OID = [ emailPDUObjId, /* messagingCC */ 4 ];

/* eslint-enable */
