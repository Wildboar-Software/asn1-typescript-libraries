/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_scfs_scfcOperationsWith3seAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-scfs-scfcOperationsWith3seAC OBJECT IDENTIFIER ::= {id-ac scfs-scfcOperationsWith3seAC(32) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_scfs_scfcOperationsWith3seAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scfs-scfcOperationsWith3seAC */ 32,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
