/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscape } from "../InetOrgPerson/id-netscape.va.mjs";


/**
 * @summary id_netscapeDirectory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-netscapeDirectory            OBJECT IDENTIFIER ::= { id-netscape directory(3) }
 * ```
 * 
 * @constant
 */
export
const id_netscapeDirectory: OBJECT_IDENTIFIER = _OID.fromParts([
    /* directory */ 3,
], id_netscape);

/* eslint-enable */

