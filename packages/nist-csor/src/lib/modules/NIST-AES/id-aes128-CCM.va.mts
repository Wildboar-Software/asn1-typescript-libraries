/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes128_CCM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes128-CCM OBJECT IDENTIFIER ::= { aes 7 }
 * ```
 * 
 * @constant
 */
export
const id_aes128_CCM: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], aes);

/* eslint-enable */
