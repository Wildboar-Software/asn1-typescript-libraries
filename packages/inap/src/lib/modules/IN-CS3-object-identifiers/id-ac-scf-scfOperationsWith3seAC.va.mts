/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_scf_scfOperationsWith3seAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-scf-scfOperationsWith3seAC OBJECT IDENTIFIER ::= {id-ac scf-scfOperationsWith3seAC(23) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_scf_scfOperationsWith3seAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-scfOperationsWith3seAC */ 23,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
