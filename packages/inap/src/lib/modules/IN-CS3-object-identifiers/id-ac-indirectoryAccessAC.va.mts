/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_indirectoryAccessAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-indirectoryAccessAC OBJECT IDENTIFIER ::= {id-ac indirectoryAccessAC(1) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_indirectoryAccessAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* indirectoryAccessAC */ 1,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
