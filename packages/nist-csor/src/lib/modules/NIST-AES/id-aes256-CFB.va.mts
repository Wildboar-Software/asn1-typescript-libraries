/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes256_CFB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-CFB OBJECT IDENTIFIER ::= { aes 44 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_CFB: OBJECT_IDENTIFIER = _OID.fromParts([
    44,
], aes);

/* eslint-enable */
