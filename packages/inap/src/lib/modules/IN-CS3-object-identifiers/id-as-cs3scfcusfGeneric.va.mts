/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_cs3scfcusfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-cs3scfcusfGeneric OBJECT IDENTIFIER ::= {id-as scf-cusf-Generic(28)}
 * ```
 * 
 * @constant
 */
export
const id_as_cs3scfcusfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-Generic */ 28,
], id_as);

/* eslint-enable */
