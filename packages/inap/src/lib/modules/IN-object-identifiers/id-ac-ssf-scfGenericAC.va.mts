/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_ssf_scfGenericAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-ssf-scfGenericAC OBJECT IDENTIFIER ::= {id-ac ssf-scfGenericAC(4) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_ssf_scfGenericAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ssf-scfGenericAC */ 4,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
