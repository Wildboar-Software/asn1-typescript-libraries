/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_sizeOfRestocking
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-sizeOfRestocking OBJECT IDENTIFIER ::= {id-at sizeOfRestocking(11)}
 * ```
 * 
 * @constant
 */
export
const id_at_sizeOfRestocking: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sizeOfRestocking */ 11,
], id_at);

/* eslint-enable */
