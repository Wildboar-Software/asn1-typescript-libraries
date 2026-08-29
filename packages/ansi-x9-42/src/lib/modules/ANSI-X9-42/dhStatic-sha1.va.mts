/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhStatic_sha1
 * @description
 *
 * Named `dhStatic` with SHA-1 KDF (`{id-sha1, NULL}`). Parameters are
 * well-known and not sent. ANS X9.42-2003 §8.1.1, §A.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhStatic-sha1     OBJECT IDENTIFIER ::= { namedScheme 1 }
 * ```
 *
 * @constant
 */
export const dhStatic_sha1: OBJECT_IDENTIFIER = _OID.fromParts([1], namedScheme);

/* eslint-enable */
