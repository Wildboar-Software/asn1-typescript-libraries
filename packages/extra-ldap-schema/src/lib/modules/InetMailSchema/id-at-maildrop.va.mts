/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_igh } from "../InetMailSchema/id-igh.va.mjs";
// export { id_igh } from "../InetMailSchema/id-igh.va.mjs";


/**
 * @summary id_at_maildrop
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-maildrop                  OBJECT IDENTIFIER ::= { id-igh 2 100 }
 * ```
 * 
 * @constant
 */
export
const id_at_maildrop: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
    100,
], id_igh);

/* eslint-enable */
