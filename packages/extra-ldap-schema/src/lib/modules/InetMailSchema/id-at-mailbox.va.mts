/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_doublePrecision } from "../InetMailSchema/id-doublePrecision.va.mjs";
// export { id_doublePrecision } from "../InetMailSchema/id-doublePrecision.va.mjs";


/**
 * @summary id_at_mailbox
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-mailbox                   OBJECT IDENTIFIER ::= { id-doublePrecision 1 1 1 }
 * ```
 * 
 * @constant
 */
export
const id_at_mailbox: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
    1,
    1,
], id_doublePrecision);

/* eslint-enable */
