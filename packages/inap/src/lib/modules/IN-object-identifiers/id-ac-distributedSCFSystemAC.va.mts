/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_distributedSCFSystemAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-distributedSCFSystemAC OBJECT IDENTIFIER ::= {id-ac distributedSCFSystemAC(22) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_distributedSCFSystemAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* distributedSCFSystemAC */ 22,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
