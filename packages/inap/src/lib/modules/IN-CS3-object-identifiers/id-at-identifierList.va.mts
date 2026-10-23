/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-CS3-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-CS3-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_identifierList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-identifierList OBJECT IDENTIFIER ::= {id-at identifierList(3)}
 * ```
 * 
 * @constant
 */
export
const id_at_identifierList: OBJECT_IDENTIFIER = _OID.fromParts([
    /* identifierList */ 3,
], id_at);

/* eslint-enable */
