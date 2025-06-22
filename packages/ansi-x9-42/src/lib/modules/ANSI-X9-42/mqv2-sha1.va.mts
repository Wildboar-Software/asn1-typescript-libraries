/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary mqv2_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mqv2-sha1        OBJECT IDENTIFIER ::= { namedScheme 7 }
 * ```
 *
 * @constant
 */
export const mqv2_sha1: OBJECT_IDENTIFIER = _OID.fromParts([7], namedScheme);

/* eslint-enable */
