/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhHybridOneFlow_sha1
 * @description
 *
 * Named `dhHybridOneFlow` with SHA-1 KDF (`{id-sha1, NULL}`).
 * Parameters are well-known and not sent. ANS X9.42-2003 §8.1.6,
 * §A.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybridOneFlow-sha1 OBJECT IDENTIFIER ::= { namedScheme 6 }
 * ```
 *
 * @constant
 */
export const dhHybridOneFlow_sha1: OBJECT_IDENTIFIER = _OID.fromParts(
    [6],
    namedScheme
);

/* eslint-enable */
