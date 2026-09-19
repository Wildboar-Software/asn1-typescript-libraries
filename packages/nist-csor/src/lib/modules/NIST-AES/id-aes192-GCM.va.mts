/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes192_GCM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes192-GCM OBJECT IDENTIFIER ::= { aes 26 }
 * ```
 * 
 * @constant
 */
export
const id_aes192_GCM: OBJECT_IDENTIFIER = _OID.fromParts([
    26,
], aes);

/* eslint-enable */
