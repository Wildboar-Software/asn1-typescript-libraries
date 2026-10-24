/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_scf_ssfTrafficManagementAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-scf-ssfTrafficManagementAC OBJECT IDENTIFIER ::= {id-ac scf-ssfTrafficManagementAC(35) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_scf_ssfTrafficManagementAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-ssfTrafficManagementAC */ 35,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
