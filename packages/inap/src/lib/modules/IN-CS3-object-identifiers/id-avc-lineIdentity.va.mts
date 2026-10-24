/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_avc } from "../IN-CS3-object-identifiers/id-avc.va.mjs";
// export { id_avc } from "../IN-CS3-object-identifiers/id-avc.va.mjs";


/**
 * @summary id_avc_lineIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-avc-lineIdentity OBJECT IDENTIFIER ::= {id-avc assignment(3)}
 * ```
 * 
 * @constant
 */
export
const id_avc_lineIdentity: OBJECT_IDENTIFIER = _OID.fromParts([
    /* assignment */ 3,
], id_avc);

/* eslint-enable */
