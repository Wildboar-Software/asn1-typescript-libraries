/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_publicKeyType } from "../ANSI-X9-62/id-publicKeyType.va.mjs";
/**
 * @summary id_ecPublicKey
 * @description
 *
 * Unrestricted EC public key. In X.509 `SubjectPublicKeyInfo`,
 * parameters are the `Parameters` / `ECDomainParameters` CHOICE;
 * `subjectPublicKey` is the `ECPoint` octet string mapped bit-
 * for-bit into a BIT STRING. ANSI X9.62-1998 §6.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey OBJECT IDENTIFIER ::= {
 * id-publicKeyType unrestricted(1)
 * }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* unrestricted */ 1],
    id_publicKeyType
);

/* eslint-enable */
