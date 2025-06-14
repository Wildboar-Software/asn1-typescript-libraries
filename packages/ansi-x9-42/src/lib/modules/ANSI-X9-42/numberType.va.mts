/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";
/* START_OF_SYMBOL_DEFINITION numberType */
/**
 * @summary numberType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numberType OBJECT IDENTIFIER ::= { ansi-X9-42 numberTypes(2) }
 * ```
 *
 * @constant
 */
export const numberType: OBJECT_IDENTIFIER = new _OID(
    [/* numberTypes */ 2],
    ansi_X9_42
);
/* END_OF_SYMBOL_DEFINITION numberType */

/* eslint-enable */
