/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_oc } from "../IN-object-identifiers/id-oc.va.mjs";
// export { id_oc } from "../IN-object-identifiers/id-oc.va.mjs";


/**
 * @summary id_oc_tokensStock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-tokensStock OBJECT IDENTIFIER ::= {id-oc tokenStock(2)}
 * ```
 * 
 * @constant
 */
export
const id_oc_tokensStock: OBJECT_IDENTIFIER = _OID.fromParts([
    /* tokenStock */ 2,
], id_oc);

/* eslint-enable */
