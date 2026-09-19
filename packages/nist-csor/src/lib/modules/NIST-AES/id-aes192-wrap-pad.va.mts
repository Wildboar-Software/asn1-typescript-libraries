/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes192_wrap_pad
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes192-wrap-pad OBJECT IDENTIFIER ::= { aes 28 }
 * ```
 * 
 * @constant
 */
export
const id_aes192_wrap_pad: OBJECT_IDENTIFIER = _OID.fromParts([
    28,
], aes);

/* eslint-enable */
