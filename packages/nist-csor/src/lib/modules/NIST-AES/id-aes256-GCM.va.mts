/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes256_GCM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-GCM OBJECT IDENTIFIER ::= { aes 46 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_GCM: OBJECT_IDENTIFIER = _OID.fromParts([
    46,
], aes);

/* eslint-enable */
