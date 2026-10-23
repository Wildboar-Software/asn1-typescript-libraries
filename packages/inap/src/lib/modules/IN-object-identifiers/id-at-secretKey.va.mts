/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_secretKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-secretKey OBJECT IDENTIFIER ::= {id-at secretKey(2)}
 * ```
 * 
 * @constant
 */
export
const id_at_secretKey: OBJECT_IDENTIFIER = _OID.fromParts([
    /* secretKey */ 2,
], id_at);

/* eslint-enable */
