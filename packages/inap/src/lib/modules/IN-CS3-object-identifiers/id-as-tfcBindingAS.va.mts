/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_tfcBindingAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-tfcBindingAS OBJECT IDENTIFIER ::= {id-as tfcBindingAS(27)}
 * ```
 * 
 * @constant
 */
export
const id_as_tfcBindingAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* tfcBindingAS */ 27,
], id_as);

/* eslint-enable */
