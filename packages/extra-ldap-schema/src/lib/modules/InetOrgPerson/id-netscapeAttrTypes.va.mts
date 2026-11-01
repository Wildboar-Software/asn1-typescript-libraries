/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeDirectory } from "../InetOrgPerson/id-netscapeDirectory.va.mjs";


/**
 * @summary id_netscapeAttrTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-netscapeAttrTypes            OBJECT IDENTIFIER ::= { id-netscapeDirectory 1 }
 * ```
 * 
 * @constant
 */
export
const id_netscapeAttrTypes: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_netscapeDirectory);

/* eslint-enable */

