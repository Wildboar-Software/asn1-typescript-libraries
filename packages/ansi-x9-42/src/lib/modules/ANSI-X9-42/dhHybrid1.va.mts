/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhHybrid1
 * @description
 *
 * Diffie-Hellman hybrid, one group: both parties contribute static
 * and ephemeral keys on `(p_s, q_s, g_s)`. `ZZ = oct(Ze)||oct(Zs)`.
 * If the ephemeral keys happen to equal the static keys, this
 * degenerates to `dhStatic`. Parameters: `SchemeParameters`. ANS
 * X9.42-2003 §8.1.4, §A.4.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybrid1     OBJECT IDENTIFIER ::= {scheme 4 }
 * ```
 *
 * @constant
 */
export const dhHybrid1: OBJECT_IDENTIFIER = _OID.fromParts([4], scheme);

/* eslint-enable */
