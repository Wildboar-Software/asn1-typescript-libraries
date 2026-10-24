/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-CS3-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_indsaShadowBindingAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-indsaShadowBindingAS OBJECT IDENTIFIER ::= {id-as indsaShadowBindingAS(19)}
 * ```
 * 
 * @constant
 */
export
const id_as_indsaShadowBindingAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* indsaShadowBindingAS */ 19,
], id_as);

/* eslint-enable */
