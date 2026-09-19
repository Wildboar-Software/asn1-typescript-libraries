/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes192_wrap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes192-wrap OBJECT IDENTIFIER ::= { aes 25 }
 * ```
 * 
 * @constant
 */
export
const id_aes192_wrap: OBJECT_IDENTIFIER = _OID.fromParts([
    25,
], aes);

/* eslint-enable */
