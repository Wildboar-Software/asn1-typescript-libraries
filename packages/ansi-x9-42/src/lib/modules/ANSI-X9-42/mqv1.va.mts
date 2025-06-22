/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary mqv1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mqv1         OBJECT IDENTIFIER ::= {scheme 8 }
 * ```
 *
 * @constant
 */
export const mqv1: OBJECT_IDENTIFIER = _OID.fromParts([8], scheme);

/* eslint-enable */
