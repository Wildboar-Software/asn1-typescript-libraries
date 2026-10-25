/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_mt } from "../IN-object-identifiers/id-mt.va.mjs";
// export { id_mt } from "../IN-object-identifiers/id-mt.va.mjs";


/**
 * @summary id_mt_provideTokens
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mt-provideTokens OBJECT IDENTIFIER ::= {id-mt provideTokens(3)}
 * ```
 * 
 * @constant
 */
export
const id_mt_provideTokens: OBJECT_IDENTIFIER = _OID.fromParts([
    /* provideTokens */ 3,
], id_mt);

/* eslint-enable */
