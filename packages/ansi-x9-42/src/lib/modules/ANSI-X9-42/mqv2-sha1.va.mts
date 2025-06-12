/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";
export { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/* START_OF_SYMBOL_DEFINITION mqv2_sha1 */
/**
 * @summary mqv2_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mqv2-sha1        OBJECT IDENTIFIER ::= { namedScheme 7 }
 * ```
 *
 * @constant
 */
export const mqv2_sha1: OBJECT_IDENTIFIER = new _OID([7], namedScheme);
/* END_OF_SYMBOL_DEFINITION mqv2_sha1 */

/* eslint-enable */
