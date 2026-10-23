/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_ac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac OBJECT IDENTIFIER ::= {id ac(3)}
 * ```
 * 
 * @constant
 */
export
const id_ac: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ac */ 3,
], id);

/* eslint-enable */
