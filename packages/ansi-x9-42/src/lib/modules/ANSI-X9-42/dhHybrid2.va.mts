/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhHybrid2
 * @description
 *
 * Diffie-Hellman hybrid, two groups: static keys on `(p_s, q_s, g_s)`,
 * ephemeral keys on a separately identified `(p_e, q_e, g_e)`.
 * `ZZ = oct(Ze)||oct(Zs)`. Parameters: `SchemeParameters`. ANS
 * X9.42-2003 §8.1.5, §A.4.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybrid2     OBJECT IDENTIFIER ::= {scheme 5 }
 * ```
 *
 * @constant
 */
export const dhHybrid2: OBJECT_IDENTIFIER = _OID.fromParts([5], scheme);

/* eslint-enable */
