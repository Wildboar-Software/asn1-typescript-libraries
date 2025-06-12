/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";
export { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/* START_OF_SYMBOL_DEFINITION dhOneFlow_sha1 */
/**
 * @summary dhOneFlow_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhOneFlow-sha1 OBJECT IDENTIFIER ::= { namedScheme 3 }
 * ```
 *
 * @constant
 */
export const dhOneFlow_sha1: OBJECT_IDENTIFIER = new _OID([3], namedScheme);
/* END_OF_SYMBOL_DEFINITION dhOneFlow_sha1 */

/* eslint-enable */
