/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeDirectory } from "../InetOrgPerson/id-netscapeDirectory.va.mjs";


/**
 * @summary id_netscapeObjClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-netscapeObjClass             OBJECT IDENTIFIER ::= { id-netscapeDirectory 2 }
 * ```
 * 
 * @constant
 */
export
const id_netscapeObjClass: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_netscapeDirectory);

/* eslint-enable */

