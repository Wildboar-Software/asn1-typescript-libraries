/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_avc } from "../IN-object-identifiers/id-avc.va.mjs";
// export { id_avc } from "../IN-object-identifiers/id-avc.va.mjs";


/**
 * @summary id_avc_assignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-avc-assignment OBJECT IDENTIFIER ::= {id-avc assignment(1)}
 * ```
 * 
 * @constant
 */
export
const id_avc_assignment: OBJECT_IDENTIFIER = _OID.fromParts([
    /* assignment */ 1,
], id_avc);

/* eslint-enable */
