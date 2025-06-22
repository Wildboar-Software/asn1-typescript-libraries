/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhOneFlow_sha1
 * @description
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
