/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va";
export { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va";

/* START_OF_SYMBOL_DEFINITION algorithm */
/**
 * @summary algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithm     OBJECT IDENTIFIER ::= { ansi-X9-42 algorithms(1) }
 * ```
 *
 * @constant
 */
export const algorithm: OBJECT_IDENTIFIER = new _OID(
    [/* algorithms */ 1],
    ansi_X9_42
);
/* END_OF_SYMBOL_DEFINITION algorithm */

/* eslint-enable */
