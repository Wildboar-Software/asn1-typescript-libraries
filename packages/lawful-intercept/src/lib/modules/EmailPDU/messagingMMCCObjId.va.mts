/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary messagingMMCCObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messagingMMCCObjId RELATIVE-OID ::= {emailPDUObjId messagingMMCC(5)}
 * ```
 * 
 * @constant
 */
export
const messagingMMCCObjId: RELATIVE_OID = [ ...emailPDUObjId, /* messagingMMCC */ 5 ];

/* eslint-enable */
