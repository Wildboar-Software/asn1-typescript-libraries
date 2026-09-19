/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { aes } from "../NIST-AES/aes.va.mjs";
// export { aes } from "../NIST-AES/aes.va.mjs";


/**
 * @summary id_aes128_CBC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes128-CBC OBJECT IDENTIFIER ::= { aes 2 }
 * ```
 * 
 * @constant
 */
export
const id_aes128_CBC: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], aes);

/* eslint-enable */
