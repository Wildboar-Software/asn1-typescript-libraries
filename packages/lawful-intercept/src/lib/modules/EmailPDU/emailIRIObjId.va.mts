/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";
// export { emailPDUObjId } from "../EmailPDU/emailPDUObjId.va.mjs";


/**
 * @summary emailIRIObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emailIRIObjId RELATIVE-OID ::= {emailPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const emailIRIObjId: RELATIVE_OID = [ ...emailPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
