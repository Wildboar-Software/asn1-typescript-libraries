/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";
// export { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";


/**
 * @summary l2CCObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * l2CCObjId RELATIVE-OID ::= {l2AccessPDUObjId cC(2)}
 * ```
 * 
 * @constant
 */
export
const l2CCObjId: RELATIVE_OID = [ l2AccessPDUObjId, /* cC */ 2 ];

/* eslint-enable */
