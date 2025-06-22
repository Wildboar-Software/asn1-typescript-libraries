/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhHybrid2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybrid2     OBJECT IDENTIFIER ::= {scheme 5 }
 * ```
 *
 * @constant
 */
export const dhHybrid2: OBJECT_IDENTIFIER = _OID.fromParts([5], scheme);

/* eslint-enable */
