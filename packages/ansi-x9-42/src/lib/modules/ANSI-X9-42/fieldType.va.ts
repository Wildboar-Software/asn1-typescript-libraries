/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va";
export { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va";

/* START_OF_SYMBOL_DEFINITION fieldType */
/**
 * @summary fieldType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fieldType     OBJECT IDENTIFIER ::= { ansi-X9-42 fieldType(0) }
 * ```
 *
 * @constant
 */
export const fieldType: OBJECT_IDENTIFIER = new _OID(
    [/* fieldType */ 0],
    ansi_X9_42
);
/* END_OF_SYMBOL_DEFINITION fieldType */

/* eslint-enable */
