/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-CS3-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-CS3-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_currentList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-currentList OBJECT IDENTIFIER ::= {id-at currentList(8)}
 * ```
 * 
 * @constant
 */
export
const id_at_currentList: OBJECT_IDENTIFIER = _OID.fromParts([
    /* currentList */ 8,
], id_at);

/* eslint-enable */
