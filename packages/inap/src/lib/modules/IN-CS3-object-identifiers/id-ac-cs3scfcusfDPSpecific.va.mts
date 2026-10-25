/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_cs3scfcusfDPSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-cs3scfcusfDPSpecific OBJECT IDENTIFIER ::= {id-ac scf-cusf-DPSpecific(25) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_cs3scfcusfDPSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-DPSpecific */ 25,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
