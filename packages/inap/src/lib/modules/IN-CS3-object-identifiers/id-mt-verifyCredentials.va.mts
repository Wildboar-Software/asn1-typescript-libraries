/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_mt } from "../IN-CS3-object-identifiers/id-mt.va.mjs";
// export { id_mt } from "../IN-CS3-object-identifiers/id-mt.va.mjs";


/**
 * @summary id_mt_verifyCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mt-verifyCredentials OBJECT IDENTIFIER ::= {id-mt verifyCredentials(1)}
 * ```
 * 
 * @constant
 */
export
const id_mt_verifyCredentials: OBJECT_IDENTIFIER = _OID.fromParts([
    /* verifyCredentials */ 1,
], id_mt);

/* eslint-enable */
