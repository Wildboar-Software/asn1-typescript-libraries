/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhOneFlow_sha1
 * @description
 *
 * Named `dhOneFlow` with SHA-1 KDF (`{id-sha1, NULL}`). Parameters are
 * well-known and not sent. ANS X9.42-2003 §8.1.3, §A.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhOneFlow-sha1 OBJECT IDENTIFIER ::= { namedScheme 3 }
 * ```
 *
 * @constant
 */
export const dhOneFlow_sha1: OBJECT_IDENTIFIER = _OID.fromParts([3], namedScheme);

/* eslint-enable */
