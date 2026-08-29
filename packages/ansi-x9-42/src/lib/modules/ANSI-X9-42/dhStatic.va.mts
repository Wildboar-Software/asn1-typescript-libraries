/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhStatic
 * @description
 *
 * Diffie-Hellman, static keys only, one group. Both parties compute
 * `Zs = y_peer ^ x_own mod p_s`; `ZZ = oct(Zs)`. No ephemeral data.
 * Parameters: `SchemeParameters`. ANS X9.42-2003 §8.1.1, §A.4.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhStatic     OBJECT IDENTIFIER ::= {scheme 1 }
 * ```
 *
 * @constant
 */
export const dhStatic: OBJECT_IDENTIFIER = _OID.fromParts([1], scheme);

/* eslint-enable */
