/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes128_CFB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes128-CFB OBJECT IDENTIFIER ::= { aes 4 }
 * ```
 * 
 * @constant
 */
export
const id_aes128_CFB: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], aes);

/* eslint-enable */
