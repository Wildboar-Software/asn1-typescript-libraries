/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_igh } from "../InetMailSchema/id-igh.va.mjs";

/**
 * @summary id_at_mailaccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-mailaccess                OBJECT IDENTIFIER ::= { id-igh 2 111 }
 * ```
 * 
 * @constant
 */
export
const id_at_mailaccess: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
    111,
], id_igh);

/* eslint-enable */
