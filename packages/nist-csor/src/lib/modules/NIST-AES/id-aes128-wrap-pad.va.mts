/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes128_wrap_pad
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes128-wrap-pad OBJECT IDENTIFIER ::= { aes 8 }
 * ```
 * 
 * @constant
 */
export
const id_aes128_wrap_pad: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], aes);

/* eslint-enable */
