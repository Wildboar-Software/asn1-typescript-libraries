/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscape } from "../InetMailSchema/id-netscape.va.mjs";
// export { id_netscape } from "../InetMailSchema/id-netscape.va.mjs";


/**
 * @summary id_oc_mailGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-mailGroup                 OBJECT IDENTIFIER ::= { id-netscape directory(3) 2 4 }
 * ```
 * 
 * @constant
 */
export
const id_oc_mailGroup: OBJECT_IDENTIFIER = _OID.fromParts([
    /* directory */ 3,
    2,
    4,
], id_netscape);

/* eslint-enable */
