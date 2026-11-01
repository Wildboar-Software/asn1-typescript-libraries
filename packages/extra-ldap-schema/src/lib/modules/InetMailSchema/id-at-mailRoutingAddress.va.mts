/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscape } from "../InetMailSchema/id-netscape.va.mjs";

/**
 * @summary id_at_mailRoutingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-mailRoutingAddress        OBJECT IDENTIFIER ::= { id-netscape directory(3) 1 24 }
 * ```
 * 
 * @constant
 */
export
const id_at_mailRoutingAddress: OBJECT_IDENTIFIER = _OID.fromParts([
    /* directory */ 3,
    1,
    24,
], id_netscape);

/* eslint-enable */
