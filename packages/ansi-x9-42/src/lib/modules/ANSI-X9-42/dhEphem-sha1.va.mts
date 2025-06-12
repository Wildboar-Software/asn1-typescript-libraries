/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";
export { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/* START_OF_SYMBOL_DEFINITION dhEphem_sha1 */
/**
 * @summary dhEphem_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhEphem-sha1     OBJECT IDENTIFIER ::= { namedScheme 2 }
 * ```
 *
 * @constant
 */
export const dhEphem_sha1: OBJECT_IDENTIFIER = new _OID([2], namedScheme);
/* END_OF_SYMBOL_DEFINITION dhEphem_sha1 */

/* eslint-enable */
