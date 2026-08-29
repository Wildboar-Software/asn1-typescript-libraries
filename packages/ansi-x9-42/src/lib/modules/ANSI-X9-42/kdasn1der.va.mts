/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { keyDerivationMethod } from "../ANSI-X9-42/keyDerivationMethod.va.mjs";

/**
 * @summary kdasn1der
 * @description
 *
 * ASN.1 KDF: `h_i = H(ZZ || DER(OtherInfo))`, counter inside
 * `OtherInfo.keyInfo`, then leftmost `keylen` bits of the
 * concatenated hashes. `keylen < hashlen × (2^32 − 1)`. ANS
 * X9.42-2003 §7.7.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kdasn1der        OBJECT    IDENTIFIER ::= { keyDerivationMethod asn1der(0) }
 * ```
 *
 * @constant
 */
export const kdasn1der: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* asn1der */ 0],
    keyDerivationMethod
);

/* eslint-enable */
