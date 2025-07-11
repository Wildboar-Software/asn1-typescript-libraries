/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhHybrid1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybrid1     OBJECT IDENTIFIER ::= {scheme 4 }
 * ```
 *
 * @constant
 */
export const dhHybrid1: OBJECT_IDENTIFIER = _OID.fromParts([4], scheme);

/* eslint-enable */
