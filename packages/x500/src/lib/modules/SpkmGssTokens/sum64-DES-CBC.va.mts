/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary sum64_DES_CBC
 * @description
 *
 * Integrity algorithm: DES-CBC of confounded data concatenated with the
 * sum of input blocks modulo 2^64−1. Encryption is required for the
 * integrity to be secure; in wrap, `conf-alg` must be DES-CBC or SPKM
 * returns an error. Combined with DES-CBC wrap: sum is appended after
 * confounder+padding; last ciphertext block is also `int-cksum`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sum64-DES-CBC OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *    integrity(3) sum64-DES-CBC(2)}
 * ```
 *
 * @constant
 */
export const sum64_DES_CBC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* integrity */ 3,
    /* sum64-DES-CBC */ 2,
]);

/* eslint-enable */
