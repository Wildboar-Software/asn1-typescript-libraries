/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-CS3-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-CS3-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_lockSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-lockSession OBJECT IDENTIFIER ::= {id-at lockSession(5)}
 * ```
 * 
 * @constant
 */
export
const id_at_lockSession: OBJECT_IDENTIFIER = _OID.fromParts([
    /* lockSession */ 5,
], id_at);

/* eslint-enable */
