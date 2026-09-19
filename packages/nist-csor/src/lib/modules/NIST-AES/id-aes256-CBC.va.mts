/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes256_CBC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-CBC OBJECT IDENTIFIER ::= { aes 42 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_CBC: OBJECT_IDENTIFIER = _OID.fromParts([
    42,
], aes);

/* eslint-enable */
