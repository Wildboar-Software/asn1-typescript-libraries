/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";
// export { l2AccessPDUObjId } from "../L2AccessPDU/l2AccessPDUObjId.va.mjs";


/**
 * @summary l2IRIOnlyObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * l2IRIOnlyObjId RELATIVE-OID ::= {l2AccessPDUObjId iRIOnly(3)}
 * ```
 * 
 * @constant
 */
export
const l2IRIOnlyObjId: RELATIVE_OID = [ ...l2AccessPDUObjId, /* iRIOnly */ 3 ];

/* eslint-enable */
