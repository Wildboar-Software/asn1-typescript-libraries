/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes192_CCM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes192-CCM OBJECT IDENTIFIER ::= { aes 27 }
 * ```
 * 
 * @constant
 */
export
const id_aes192_CCM: OBJECT_IDENTIFIER = _OID.fromParts([
    27,
], aes);

/* eslint-enable */
