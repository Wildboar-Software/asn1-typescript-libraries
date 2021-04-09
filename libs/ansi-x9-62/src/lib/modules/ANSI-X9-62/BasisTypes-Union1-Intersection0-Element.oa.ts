/* eslint-disable */
import { CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca";
import { tpBasis } from "../ANSI-X9-62/tpBasis.va";
import {
    Trinomial,
    _decode_Trinomial,
    _encode_Trinomial,
} from "../ANSI-X9-62/Trinomial.ta";
export { CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca";
export { tpBasis } from "../ANSI-X9-62/tpBasis.va";
export {
    Trinomial,
    _decode_Trinomial,
    _encode_Trinomial,
} from "../ANSI-X9-62/Trinomial.ta";

/* START_OF_SYMBOL_DEFINITION BasisTypes_Union1_Intersection0_Element */
/**
 * @summary BasisTypes_Union1_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasisTypes-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {CHARACTERISTIC_TWO<Trinomial>}
 * @implements {CHARACTERISTIC_TWO<Trinomial>}
 */
export const BasisTypes_Union1_Intersection0_Element: CHARACTERISTIC_TWO<Trinomial> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Trinomial,
    },
    encoderFor: {
        "&Type": _encode_Trinomial,
    },
    "&id": tpBasis /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION BasisTypes_Union1_Intersection0_Element */

/* eslint-enable */
