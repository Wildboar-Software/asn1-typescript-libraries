/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va";
export { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va";

/* START_OF_SYMBOL_DEFINITION scheme */
/**
 * @summary scheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scheme         OBJECT IDENTIFIER ::= { ansi-X9-42 schemes(3) }
 * ```
 *
 * @constant
 */
export const scheme: OBJECT_IDENTIFIER = new _OID(
    [/* schemes */ 3],
    ansi_X9_42
);
/* END_OF_SYMBOL_DEFINITION scheme */

/* eslint-enable */
