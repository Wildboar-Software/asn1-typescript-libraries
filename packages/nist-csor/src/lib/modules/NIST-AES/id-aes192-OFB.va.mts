/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes192_OFB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes192-OFB OBJECT IDENTIFIER ::= { aes 23 }
 * ```
 * 
 * @constant
 */
export
const id_aes192_OFB: OBJECT_IDENTIFIER = _OID.fromParts([
    23,
], aes);

/* eslint-enable */
