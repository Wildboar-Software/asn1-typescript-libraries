/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_mt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mt OBJECT IDENTIFIER ::= {id mt(7)}
 * ```
 * 
 * @constant
 */
export
const id_mt: OBJECT_IDENTIFIER = _OID.fromParts([
    /* mt */ 7,
], id);

/* eslint-enable */
