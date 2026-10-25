/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_cs3cusfscfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-cs3cusfscfGeneric OBJECT IDENTIFIER ::= {id-as cusf-scf-Generic(29)}
 * ```
 * 
 * @constant
 */
export
const id_as_cs3cusfscfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusf-scf-Generic */ 29,
], id_as);

/* eslint-enable */
