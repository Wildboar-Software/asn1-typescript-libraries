/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes256_OFB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-OFB OBJECT IDENTIFIER ::= { aes 43 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_OFB: OBJECT_IDENTIFIER = _OID.fromParts([
    43,
], aes);

/* eslint-enable */
