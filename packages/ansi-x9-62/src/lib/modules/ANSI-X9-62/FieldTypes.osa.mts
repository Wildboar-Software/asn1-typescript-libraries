/* eslint-disable */
import { FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca.mjs";
import { FieldTypes_Union0_Intersection0_Element } from "./FieldTypes-Union0-Intersection0-Element.oa.mjs";
import { FieldTypes_Union1_Intersection0_Element } from "./FieldTypes-Union1-Intersection0-Element.oa.mjs";
/* START_OF_SYMBOL_DEFINITION FieldTypes */
/**
 * @summary FieldTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldTypes FIELD-ID ::= {
 * { Prime-p  IDENTIFIED BY  prime-field } |
 * { Characteristic-two  IDENTIFIED BY  characteristic-two-field },
 * ... -- Additional field types may be added
 * }
 * ```
 *
 * @constant
 * @type {FIELD_ID[]}
 *
 */
export const FieldTypes: FIELD_ID<any>[] = [
    FieldTypes_Union0_Intersection0_Element,
    FieldTypes_Union1_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION FieldTypes */

/* eslint-enable */
