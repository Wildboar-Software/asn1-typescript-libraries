/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhStatic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhStatic     OBJECT IDENTIFIER ::= {scheme 1 }
 * ```
 *
 * @constant
 */
export const dhStatic: OBJECT_IDENTIFIER = _OID.fromParts([1], scheme);

/* eslint-enable */
