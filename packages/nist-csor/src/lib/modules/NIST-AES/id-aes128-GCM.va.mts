/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes128_GCM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes128-GCM OBJECT IDENTIFIER ::= { aes 6 }
 * ```
 * 
 * @constant
 */
export
const id_aes128_GCM: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], aes);

/* eslint-enable */
