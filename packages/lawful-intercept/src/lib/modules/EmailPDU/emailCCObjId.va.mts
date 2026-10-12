/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary emailCCObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emailCCObjId RELATIVE-OID ::= {emailPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const emailCCObjId: RELATIVE_OID = [ emailPDUObjId, /* cC */ 2 ];

/* eslint-enable */
