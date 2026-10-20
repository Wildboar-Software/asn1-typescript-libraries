/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at OBJECT IDENTIFIER ::= {id at(4)}
 * ```
 * 
 * @constant
 */
export
const id_at: OBJECT_IDENTIFIER = _OID.fromParts([
    /* at */ 4,
], id);

/* eslint-enable */
