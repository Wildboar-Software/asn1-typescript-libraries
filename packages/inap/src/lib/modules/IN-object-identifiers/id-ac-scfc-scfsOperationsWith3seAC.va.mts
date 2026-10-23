/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_scfc_scfsOperationsWith3seAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-scfc-scfsOperationsWith3seAC OBJECT IDENTIFIER ::= {id-ac scfc-scfsOperationsWith3seAC(23) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_scfc_scfsOperationsWith3seAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scfc-scfsOperationsWith3seAC */ 23,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
