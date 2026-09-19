/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes256_wrap_pad
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-wrap-pad OBJECT IDENTIFIER ::= { aes 48 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_wrap_pad: OBJECT_IDENTIFIER = _OID.fromParts([
    48,
], aes);

/* eslint-enable */
