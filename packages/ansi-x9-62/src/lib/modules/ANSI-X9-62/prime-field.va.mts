/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_fieldType } from "../ANSI-X9-62/id-fieldType.va.mjs";
export { id_fieldType } from "../ANSI-X9-62/id-fieldType.va.mjs";

/* START_OF_SYMBOL_DEFINITION prime_field */
/**
 * @summary prime_field
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime-field OBJECT IDENTIFIER ::= { id-fieldType prime(1) }
 * ```
 *
 * @constant
 */
export const prime_field: OBJECT_IDENTIFIER = new _OID(
    [/* prime */ 1],
    id_fieldType
);
/* END_OF_SYMBOL_DEFINITION prime_field */

/* eslint-enable */
