/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";
/* START_OF_SYMBOL_DEFINITION dhStatic */
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
export const dhStatic: OBJECT_IDENTIFIER = new _OID([1], scheme);
/* END_OF_SYMBOL_DEFINITION dhStatic */

/* eslint-enable */
