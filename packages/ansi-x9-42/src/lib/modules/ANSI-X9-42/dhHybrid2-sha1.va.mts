/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhHybrid2_sha1
 * @description
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
