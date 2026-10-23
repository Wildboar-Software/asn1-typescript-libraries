/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_failureCounter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-failureCounter OBJECT IDENTIFIER ::= {id-at failureCounter(6)}
 * ```
 * 
 * @constant
 */
export
const id_at_failureCounter: OBJECT_IDENTIFIER = _OID.fromParts([
    /* failureCounter */ 6,
], id_at);

/* eslint-enable */
