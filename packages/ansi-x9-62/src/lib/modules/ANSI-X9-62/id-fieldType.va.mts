/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va.mjs";
export { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_fieldType */
/**
 * @summary id_fieldType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-fieldType OBJECT IDENTIFIER ::= { ansi-X9-62 fieldType(1) }
 * ```
 *
 * @constant
 */
export const id_fieldType: OBJECT_IDENTIFIER = new _OID(
    [/* fieldType */ 1],
    ansi_X9_62
);
/* END_OF_SYMBOL_DEFINITION id_fieldType */

/* eslint-enable */
