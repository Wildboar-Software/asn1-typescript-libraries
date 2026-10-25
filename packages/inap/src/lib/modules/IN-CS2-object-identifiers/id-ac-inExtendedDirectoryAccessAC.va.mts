/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-CS2-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-CS2-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_inExtendedDirectoryAccessAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-inExtendedDirectoryAccessAC OBJECT IDENTIFIER ::= {id-ac 3}
 * ```
 * 
 * @constant
 */
export
const id_ac_inExtendedDirectoryAccessAC: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_ac);

/* eslint-enable */
