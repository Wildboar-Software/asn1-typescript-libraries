/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_igh } from "../InetMailSchema/id-igh.va.mjs";
// export { id_igh } from "../InetMailSchema/id-igh.va.mjs";


/**
 * @summary id_oc_transportTable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-transportTable            OBJECT IDENTIFIER ::= { id-igh 2 3 }
 * ```
 * 
 * @constant
 */
export
const id_oc_transportTable: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
    3,
], id_igh);

/* eslint-enable */
