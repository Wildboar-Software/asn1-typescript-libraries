/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_cs3cusfscfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-cs3cusfscfGeneric OBJECT IDENTIFIER ::= {id-ac cusf-scf-Generic(30) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_cs3cusfscfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusf-scf-Generic */ 30,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
