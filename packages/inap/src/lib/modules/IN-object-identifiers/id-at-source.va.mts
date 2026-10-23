/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_source
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-source OBJECT IDENTIFIER ::= {id-at source(10)}
 * ```
 * 
 * @constant
 */
export
const id_at_source: OBJECT_IDENTIFIER = _OID.fromParts([
    /* source */ 10,
], id_at);

/* eslint-enable */
