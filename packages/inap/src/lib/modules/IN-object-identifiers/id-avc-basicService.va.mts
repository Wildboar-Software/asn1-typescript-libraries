/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_avc } from "../IN-object-identifiers/id-avc.va.mjs";
// export { id_avc } from "../IN-object-identifiers/id-avc.va.mjs";


/**
 * @summary id_avc_basicService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-avc-basicService OBJECT IDENTIFIER ::= {id-avc assignment(2)}
 * ```
 * 
 * @constant
 */
export
const id_avc_basicService: OBJECT_IDENTIFIER = _OID.fromParts([
    /* assignment */ 2,
], id_avc);

/* eslint-enable */
