/* eslint-disable */
import { FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca.js";
import { FieldTypes_Union0_Intersection0_Element } from "./FieldTypes-Union0-Intersection0-Element.oa.js";
import { FieldTypes_Union1_Intersection0_Element } from "./FieldTypes-Union1-Intersection0-Element.oa.js";
export { characteristic_two_field } from "../ANSI-X9-62/characteristic-two-field.va.js";
export {
    Characteristic_two,
    _decode_Characteristic_two,
    _encode_Characteristic_two,
} from "../ANSI-X9-62/Characteristic-two.ta.js";
export { FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca.js";
export { prime_field } from "../ANSI-X9-62/prime-field.va.js";
export {
    Prime_p,
    _decode_Prime_p,
    _encode_Prime_p,
} from "../ANSI-X9-62/Prime-p.ta.js";

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
