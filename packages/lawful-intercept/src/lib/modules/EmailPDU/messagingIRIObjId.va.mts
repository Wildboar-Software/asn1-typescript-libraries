/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary messagingIRIObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messagingIRIObjId RELATIVE-OID ::= {emailPDUObjId messagingIRI(3)}
 * ```
 * 
 * @constant
 */
export
const messagingIRIObjId: RELATIVE_OID = [ ...emailPDUObjId, /* messagingIRI */ 3 ];

/* eslint-enable */
