/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes192_ECB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes192-ECB OBJECT IDENTIFIER ::= { aes 21 }
 * ```
 * 
 * @constant
 */
export
const id_aes192_ECB: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], aes);

/* eslint-enable */
