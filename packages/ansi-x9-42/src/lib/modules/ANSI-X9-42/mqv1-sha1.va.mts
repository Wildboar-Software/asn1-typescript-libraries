/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary mqv1_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mqv1-sha1        OBJECT IDENTIFIER ::= { namedScheme 8 }
 * ```
 *
 * @constant
 */
export const mqv1_sha1: OBJECT_IDENTIFIER = new _OID([8], namedScheme);

/* eslint-enable */
