/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";
// export { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";


/**
 * @summary iPCCObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPCCObjId RELATIVE-OID ::= {iPAccessPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const iPCCObjId: RELATIVE_OID = [ ...iPAccessPDUObjId, /* cC */ 2 ];

/* eslint-enable */
