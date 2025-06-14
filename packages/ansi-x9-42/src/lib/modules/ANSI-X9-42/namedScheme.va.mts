/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";
/* START_OF_SYMBOL_DEFINITION namedScheme */
/**
 * @summary namedScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * namedScheme     OBJECT IDENTIFIER ::= { ansi-X9-42 names(4) }
 * ```
 *
 * @constant
 */
export const namedScheme: OBJECT_IDENTIFIER = new _OID(
    [/* names */ 4],
    ansi_X9_42
);
/* END_OF_SYMBOL_DEFINITION namedScheme */

/* eslint-enable */
