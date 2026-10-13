/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { pstnIsdnPDUObjId } from "../PstnIsdnPDU/pstnIsdnPDUObjId.va.mjs";
// export { pstnIsdnPDUObjId } from "../PstnIsdnPDU/pstnIsdnPDUObjId.va.mjs";


/**
 * @summary pstnIsdnIRIObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pstnIsdnIRIObjId RELATIVE-OID ::= {pstnIsdnPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const pstnIsdnIRIObjId: RELATIVE_OID = [ ...pstnIsdnPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
