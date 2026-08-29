/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { numberType } from "../ANSI-X9-42/numberType.va.mjs";

/**
 * @summary dhPublicNumber
 * @description
 *
 * Algorithm OID for a Diffie-Hellman public number. Parameters shall
 * be `DomainParameters`. The public key itself is an INTEGER mapped
 * into `SubjectPublicKeyInfo.subjectPublicKey` as described in §A.3.
 * ANS X9.42-2003 §A.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhPublicNumber OBJECT IDENTIFIER ::= {numberType 1 }
 * ```
 *
 * @constant
 */
export const dhPublicNumber: OBJECT_IDENTIFIER = _OID.fromParts([1], numberType);

/* eslint-enable */
