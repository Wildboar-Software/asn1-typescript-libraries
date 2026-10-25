/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_acscfcusfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-acscfcusfGeneric OBJECT IDENTIFIER ::= {id-ac scf-cusf-Generic(29) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_acscfcusfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-Generic */ 29,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
