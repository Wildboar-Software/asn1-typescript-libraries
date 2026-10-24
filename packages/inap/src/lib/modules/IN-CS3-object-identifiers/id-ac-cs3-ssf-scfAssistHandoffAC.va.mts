/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-CS3-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_cs3_ssf_scfAssistHandoffAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-cs3-ssf-scfAssistHandoffAC OBJECT IDENTIFIER ::= {id-ac ssf-scfAssistHandoffAC(6) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_cs3_ssf_scfAssistHandoffAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ssf-scfAssistHandoffAC */ 6,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
