/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_maxAttempts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-maxAttempts OBJECT IDENTIFIER ::= {id-at maxAttempts(7)}
 * ```
 * 
 * @constant
 */
export
const id_at_maxAttempts: OBJECT_IDENTIFIER = _OID.fromParts([
    /* maxAttempts */ 7,
], id_at);

/* eslint-enable */
