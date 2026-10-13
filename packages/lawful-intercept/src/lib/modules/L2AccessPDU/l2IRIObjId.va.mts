/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";
// export { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";


/**
 * @summary l2IRIObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * l2IRIObjId RELATIVE-OID ::= {l2AccessPDUObjId iRI(1)}
 * ```
 * 
 * @constant
 */
export
const l2IRIObjId: RELATIVE_OID = [ ...l2AccessPDUObjId, /* iRI */ 1 ];

/* eslint-enable */
