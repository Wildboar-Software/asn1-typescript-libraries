/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_indirectorySystemAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-indirectorySystemAS OBJECT IDENTIFIER ::= {id-as indirectorySystemAS(16)}
 * ```
 * 
 * @constant
 */
export
const id_as_indirectorySystemAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* indirectorySystemAS */ 16,
], id_as);

/* eslint-enable */
