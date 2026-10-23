/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_ssf_scfDPSpecificAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-ssf-scfDPSpecificAC OBJECT IDENTIFIER ::= {id-ac ssf-scfDPSpecificAC(5) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_ssf_scfDPSpecificAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ssf-scfDPSpecificAC */ 5,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
