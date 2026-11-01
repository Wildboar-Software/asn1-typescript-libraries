/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_igh } from "../InetMailSchema/id-igh.va.mjs";

/**
 * @summary id_oc_mailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-mailUser                  OBJECT IDENTIFIER ::= { id-igh 2 1 }
 * ```
 * 
 * @constant
 */
export
const id_oc_mailUser: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
    1,
], id_igh);

/* eslint-enable */
