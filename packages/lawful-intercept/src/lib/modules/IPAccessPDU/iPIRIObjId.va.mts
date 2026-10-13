/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";
// export { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";


/**
 * @summary iPIRIObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPIRIObjId RELATIVE-OID ::= {iPAccessPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const iPIRIObjId: RELATIVE_OID = [ ...iPAccessPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
