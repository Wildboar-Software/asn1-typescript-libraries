/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";
export { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/* START_OF_SYMBOL_DEFINITION dhHybridOneFlow_sha1 */
/**
 * @summary dhHybridOneFlow_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybridOneFlow-sha1 OBJECT IDENTIFIER ::= { namedScheme 6 }
 * ```
 *
 * @constant
 */
export const dhHybridOneFlow_sha1: OBJECT_IDENTIFIER = new _OID(
    [6],
    namedScheme
);
/* END_OF_SYMBOL_DEFINITION dhHybridOneFlow_sha1 */

/* eslint-enable */
