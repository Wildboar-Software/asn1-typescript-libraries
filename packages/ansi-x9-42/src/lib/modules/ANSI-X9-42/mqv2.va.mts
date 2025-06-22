/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary mqv2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mqv2         OBJECT IDENTIFIER ::= {scheme 7 }
 * ```
 *
 * @constant
 */
export const mqv2: OBJECT_IDENTIFIER = _OID.fromParts([7], scheme);

/* eslint-enable */
