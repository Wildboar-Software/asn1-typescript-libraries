/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../IN-object-identifiers/id-as.va.mjs";
// export { id_as } from "../IN-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_indirectoryShadowAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-indirectoryShadowAS OBJECT IDENTIFIER ::= {id-as indirectoryShadowAS(18)}
 * ```
 * 
 * @constant
 */
export
const id_as_indirectoryShadowAS: OBJECT_IDENTIFIER = _OID.fromParts([
    /* indirectoryShadowAS */ 18,
], id_as);

/* eslint-enable */
