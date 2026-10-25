/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_avc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-avc OBJECT IDENTIFIER ::= {id avc(29)}
 * ```
 * 
 * @constant
 */
export
const id_avc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* avc */ 29,
], id);

/* eslint-enable */
