/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhHybridOneFlow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybridOneFlow OBJECT IDENTIFIER ::= {scheme 6 }
 * ```
 *
 * @constant
 */
export const dhHybridOneFlow: OBJECT_IDENTIFIER = new _OID([6], scheme);

/* eslint-enable */
