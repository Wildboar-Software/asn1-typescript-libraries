/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhEphem_sha1
 * @description
 *
 * Named `dhEphem` with SHA-1 KDF (`{id-sha1, NULL}`). Parameters are
 * well-known and not sent. ANS X9.42-2003 §8.1.2, §A.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhEphem-sha1     OBJECT IDENTIFIER ::= { namedScheme 2 }
 * ```
 *
 * @constant
 */
export const dhEphem_sha1: OBJECT_IDENTIFIER = _OID.fromParts([2], namedScheme);

/* eslint-enable */
