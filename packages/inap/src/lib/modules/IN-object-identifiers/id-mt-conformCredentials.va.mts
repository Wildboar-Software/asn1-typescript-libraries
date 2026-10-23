/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_mt } from "../IN-object-identifiers/id-mt.va.mjs";
// export { id_mt } from "../IN-object-identifiers/id-mt.va.mjs";


/**
 * @summary id_mt_conformCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mt-conformCredentials OBJECT IDENTIFIER ::= {id-mt conformCredentials(2)}
 * ```
 * 
 * @constant
 */
export
const id_mt_conformCredentials: OBJECT_IDENTIFIER = _OID.fromParts([
    /* conformCredentials */ 2,
], id_mt);

/* eslint-enable */
