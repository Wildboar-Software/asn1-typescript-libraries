/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { pstnIsdnPDUObjId } from "../PstnIsdnPDU/pstnIsdnPDUObjId.va.mjs";
// export { pstnIsdnPDUObjId } from "../PstnIsdnPDU/pstnIsdnPDUObjId.va.mjs";


/**
 * @summary pstnIsdnCCObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pstnIsdnCCObjId RELATIVE-OID ::= {pstnIsdnPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const pstnIsdnCCObjId: RELATIVE_OID = [ ...pstnIsdnPDUObjId, /* cC */ 2 ];

/* eslint-enable */
