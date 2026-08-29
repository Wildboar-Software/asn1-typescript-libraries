/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DiffieHellmanPublicNumber
 * @description
 *
 * Public key `y = g^x mod p` as an INTEGER. A valid key satisfies
 * `2 ≤ y ≤ p-2` and `y^q ≡ 1 (mod p)`. Mapped into
 * `SubjectPublicKeyInfo.subjectPublicKey` by wrapping this INTEGER's
 * DER encoding in a BIT STRING. ANS X9.42-2003 §7.3, §7.4, §A.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiffieHellmanPublicNumber  ::=  INTEGER
 * ```
 */
export type DiffieHellmanPublicNumber = INTEGER;




export const _decode_DiffieHellmanPublicNumber = $._decodeInteger;




export const _encode_DiffieHellmanPublicNumber = $._encodeInteger;


/* eslint-enable */
