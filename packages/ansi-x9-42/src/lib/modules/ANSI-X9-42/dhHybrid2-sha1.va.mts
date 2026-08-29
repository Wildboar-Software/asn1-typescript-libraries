/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhHybrid2_sha1
 * @description
 *
 * Named `dhHybrid2` with SHA-1 KDF (`{id-sha1, NULL}`). Parameters are
 * well-known and not sent. ANS X9.42-2003 §8.1.5, §A.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybrid2-sha1 OBJECT IDENTIFIER ::= { namedScheme 5 }
 * ```
 *
 * @constant
 */
export const dhHybrid2_sha1: OBJECT_IDENTIFIER = _OID.fromParts([5], namedScheme);

/* eslint-enable */
