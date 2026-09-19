/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes128_wrap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes128-wrap OBJECT IDENTIFIER ::= { aes 5 }
 * ```
 * 
 * @constant
 */
export
const id_aes128_wrap: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], aes);

/* eslint-enable */
