/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_scf_ssfStatusReportingAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-scf-ssfStatusReportingAC OBJECT IDENTIFIER ::= {id-ac scf-ssfStatusReportingAC(12) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_scf_ssfStatusReportingAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-ssfStatusReportingAC */ 12,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
