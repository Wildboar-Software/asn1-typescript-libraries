/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary md5_DES_CBC
 * @description
 *
 * Integrity algorithm: DES-CBC of a *confounded* MD5 hash. Without the
 * confounder, strength is at most DES under known-plaintext. When wrap
 * `conf-alg` is also DES-CBC, encryption and integrity are combined:
 * MD5(header||data) is appended after confounder+padding and CBC-encrypted;
 * the last two ciphertext blocks are also stored in `int-cksum`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * md5-DES-CBC OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *    integrity(3) md5-DES-CBC(1)}
 * ```
 *
 * @constant
 */
export const md5_DES_CBC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* integrity */ 3,
    /* md5-DES-CBC */ 1,
]);

/* eslint-enable */
