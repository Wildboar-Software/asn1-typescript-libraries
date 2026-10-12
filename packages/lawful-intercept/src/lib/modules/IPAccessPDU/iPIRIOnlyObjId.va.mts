/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";
// export { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";


/**
 * @summary iPIRIOnlyObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPIRIOnlyObjId RELATIVE-OID ::= {iPAccessPDUObjId iRIOnly(3)}
 * ```
 * 
 * @constant
 */
export
const iPIRIOnlyObjId: RELATIVE_OID = [ ...iPAccessPDUObjId, /* iRIOnly */ 3 ];

/* eslint-enable */
