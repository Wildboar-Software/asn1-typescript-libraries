/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhEphem
 * @description
 *
 * Diffie-Hellman, ephemeral keys only, one group. Destroy ephemeral
 * private keys after use. `ZZ = oct(Ze)`. Provides forward secrecy
 * (with a technical caveat; see Annex E.2.3). Parameters:
 * `SchemeParameters`. ANS X9.42-2003 §8.1.2, §A.4.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhEphem     OBJECT IDENTIFIER ::= {scheme 2 }
 * ```
 *
 * @constant
 */
export const dhEphem: OBJECT_IDENTIFIER = _OID.fromParts([2], scheme);

/* eslint-enable */
