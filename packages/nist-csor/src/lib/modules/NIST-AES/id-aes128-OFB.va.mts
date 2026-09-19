/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes128_OFB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes128-OFB OBJECT IDENTIFIER ::= { aes 3 }
 * ```
 * 
 * @constant
 */
export
const id_aes128_OFB: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], aes);

/* eslint-enable */
