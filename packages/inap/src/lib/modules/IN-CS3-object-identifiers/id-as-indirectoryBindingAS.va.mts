/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_indirectoryBindingAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-indirectoryBindingAS OBJECT IDENTIFIER ::= {id-as indirectoryBindingAS(2)}
 * ```
 * 
 * @constant
 */
export
const id_as_indirectoryBindingAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* indirectoryBindingAS */ 2,
], id_as);

/* eslint-enable */
