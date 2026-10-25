/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_mt } from "../IN-CS3-object-identifiers/id-mt.va.mjs";
// export { id_mt } from "../IN-CS3-object-identifiers/id-mt.va.mjs";


/**
 * @summary id_mt_fillSecurityTokens
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mt-fillSecurityTokens OBJECT IDENTIFIER ::= {id-mt fillSecurityTokens(4)}
 * ```
 * 
 * @constant
 */
export
const id_mt_fillSecurityTokens: OBJECT_IDENTIFIER = _OID.fromParts([
    /* fillSecurityTokens */ 4,
], id_mt);

/* eslint-enable */
