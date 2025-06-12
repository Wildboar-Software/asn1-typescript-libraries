/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca.js";
import { gnBasis } from "../ANSI-X9-62/gnBasis.va.js";
export { CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca.js";
export { gnBasis } from "../ANSI-X9-62/gnBasis.va.js";

/* START_OF_SYMBOL_DEFINITION BasisTypes_Union0_Intersection0_Element */
/**
 * @summary BasisTypes_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasisTypes-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {CHARACTERISTIC_TWO<NULL>}
 * @implements {CHARACTERISTIC_TWO<NULL>}
 */
export const BasisTypes_Union0_Intersection0_Element: CHARACTERISTIC_TWO<NULL> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": gnBasis /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION BasisTypes_Union0_Intersection0_Element */

/* eslint-enable */
