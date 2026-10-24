/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_scf_ssfTriggerManagementAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-scf-ssfTriggerManagementAC OBJECT IDENTIFIER ::= {id-ac scf-ssfTriggerManagementAC(13) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_scf_ssfTriggerManagementAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-ssfTriggerManagementAC */ 13,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
