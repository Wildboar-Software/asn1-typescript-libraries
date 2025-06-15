/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhOneFlow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhOneFlow     OBJECT IDENTIFIER ::= {scheme 3 }
 * ```
 *
 * @constant
 */
export const dhOneFlow: OBJECT_IDENTIFIER = new _OID([3], scheme);

/* eslint-enable */
