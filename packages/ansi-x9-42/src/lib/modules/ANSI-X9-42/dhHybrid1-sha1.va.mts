/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhHybrid1_sha1
 * @description
 *
 * Named `dhHybrid1` with SHA-1 KDF (`{id-sha1, NULL}`). Parameters are
 * well-known and not sent. ANS X9.42-2003 §8.1.4, §A.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybrid1-sha1 OBJECT IDENTIFIER ::= { namedScheme 4 }
 * ```
 *
 * @constant
 */
export const dhHybrid1_sha1: OBJECT_IDENTIFIER = _OID.fromParts([4], namedScheme);

/* eslint-enable */
