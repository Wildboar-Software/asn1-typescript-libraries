/* eslint-disable */
import { CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca.mjs";
import {
    Pentanomial,
    _decode_Pentanomial,
    _encode_Pentanomial,
} from "../ANSI-X9-62/Pentanomial.ta.mjs";
import { ppBasis } from "../ANSI-X9-62/ppBasis.va.mjs";
export { CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca.mjs";
export {
    Pentanomial,
    _decode_Pentanomial,
    _encode_Pentanomial,
} from "../ANSI-X9-62/Pentanomial.ta.mjs";
export { ppBasis } from "../ANSI-X9-62/ppBasis.va.mjs";

/* START_OF_SYMBOL_DEFINITION BasisTypes_Union2_Intersection0_Element */
/**
 * @summary BasisTypes_Union2_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasisTypes-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {CHARACTERISTIC_TWO<Pentanomial>}
 * @implements {CHARACTERISTIC_TWO<Pentanomial>}
 */
export const BasisTypes_Union2_Intersection0_Element: CHARACTERISTIC_TWO<Pentanomial> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Pentanomial,
    },
    encoderFor: {
        "&Type": _encode_Pentanomial,
    },
    "&id": ppBasis /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION BasisTypes_Union2_Intersection0_Element */

/* eslint-enable */
