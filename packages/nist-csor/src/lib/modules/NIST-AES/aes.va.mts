/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { nistAlgorithms } from "../NIST-AES/nistAlgorithms.va.mjs";
// export { nistAlgorithms } from "../NIST-AES/nistAlgorithms.va.mjs";


/**
 * @summary aes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aes OBJECT IDENTIFIER ::= { nistAlgorithms  1 }
 * ```
 * 
 * @constant
 */
export
const aes: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], nistAlgorithms);

/* eslint-enable */
