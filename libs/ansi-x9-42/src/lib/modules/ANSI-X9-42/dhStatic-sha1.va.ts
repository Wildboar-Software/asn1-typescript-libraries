/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va";
export { namedScheme } from "../ANSI-X9-42/namedScheme.va";

/* START_OF_SYMBOL_DEFINITION dhStatic_sha1 */
/**
 * @summary dhStatic_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhStatic-sha1     OBJECT IDENTIFIER ::= { namedScheme 1 }
 * ```
 *
 * @constant
 */
export const dhStatic_sha1: OBJECT_IDENTIFIER = new _OID([1], namedScheme);
/* END_OF_SYMBOL_DEFINITION dhStatic_sha1 */

/* eslint-enable */
