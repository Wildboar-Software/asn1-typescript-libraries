/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-CS2-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-CS2-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_indirectorySystemAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-indirectorySystemAC OBJECT IDENTIFIER ::= {id-ac 15}
 * ```
 * 
 * @constant
 */
export
const id_ac_indirectorySystemAC: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], id_ac);

/* eslint-enable */
