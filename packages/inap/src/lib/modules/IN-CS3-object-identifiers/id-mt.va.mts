/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";
// export { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";


/**
 * @summary id_mt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mt OBJECT IDENTIFIER ::= {id-cs3 mt(7)}
 * ```
 * 
 * @constant
 */
export
const id_mt: OBJECT_IDENTIFIER = _OID.fromParts([
    /* mt */ 7,
], id_cs3);

/* eslint-enable */
