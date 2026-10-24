/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_stockId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-stockId OBJECT IDENTIFIER ::= {id-at stockId(9)}
 * ```
 * 
 * @constant
 */
export
const id_at_stockId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* stockId */ 9,
], id_at);

/* eslint-enable */
