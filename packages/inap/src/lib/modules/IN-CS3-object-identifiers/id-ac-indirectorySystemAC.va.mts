/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_indirectorySystemAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-indirectorySystemAC OBJECT IDENTIFIER ::= {id-ac indirectorySystemAC(15) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_indirectorySystemAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* indirectorySystemAC */ 15,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
