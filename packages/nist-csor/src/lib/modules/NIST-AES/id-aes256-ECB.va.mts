/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes256_ECB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-ECB OBJECT IDENTIFIER ::= { aes 41 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_ECB: OBJECT_IDENTIFIER = _OID.fromParts([
    41,
], aes);

/* eslint-enable */
