/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";
// export { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";


/**
 * @summary id_ac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac OBJECT IDENTIFIER ::= {id-cs2 ac(3)}
 * ```
 * 
 * @constant
 */
export
const id_ac: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ac */ 3,
], id_cs2);

/* eslint-enable */
