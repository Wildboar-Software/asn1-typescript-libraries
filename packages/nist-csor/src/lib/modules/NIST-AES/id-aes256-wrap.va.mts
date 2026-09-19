/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes256_wrap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-wrap OBJECT IDENTIFIER ::= { aes 45 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_wrap: OBJECT_IDENTIFIER = _OID.fromParts([
    45,
], aes);

/* eslint-enable */
