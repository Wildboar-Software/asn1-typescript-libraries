/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes256_CCM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-CCM OBJECT IDENTIFIER ::= { aes 47 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_CCM: OBJECT_IDENTIFIER = _OID.fromParts([
    47,
], aes);

/* eslint-enable */
