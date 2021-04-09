/* eslint-disable */
import { characteristic_two_field } from "../ANSI-X9-62/characteristic-two-field.va";
import {
    Characteristic_two,
    _decode_Characteristic_two,
    _encode_Characteristic_two,
} from "../ANSI-X9-62/Characteristic-two.ta";
import { FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca";
export { characteristic_two_field } from "../ANSI-X9-62/characteristic-two-field.va";
export {
    Characteristic_two,
    _decode_Characteristic_two,
    _encode_Characteristic_two,
} from "../ANSI-X9-62/Characteristic-two.ta";
export { FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca";

/* START_OF_SYMBOL_DEFINITION FieldTypes_Union1_Intersection0_Element */
/**
 * @summary FieldTypes_Union1_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldTypes-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {FIELD_ID<Characteristic_two>}
 * @implements {FIELD_ID<Characteristic_two>}
 */
export const FieldTypes_Union1_Intersection0_Element: FIELD_ID<Characteristic_two> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Characteristic_two,
    },
    encoderFor: {
        "&Type": _encode_Characteristic_two,
    },
    "&id": characteristic_two_field /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION FieldTypes_Union1_Intersection0_Element */

/* eslint-enable */
