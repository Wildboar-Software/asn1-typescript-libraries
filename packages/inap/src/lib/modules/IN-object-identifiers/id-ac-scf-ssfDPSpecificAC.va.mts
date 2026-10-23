/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_scf_ssfDPSpecificAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-scf-ssfDPSpecificAC OBJECT IDENTIFIER ::= {id-ac scf-ssfDPSpecificAC(9) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_scf_ssfDPSpecificAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-ssfDPSpecificAC */ 9,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
