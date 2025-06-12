/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.js";
import { id_SHA224 } from "../ANSI-X9-62/id-SHA224.va.js";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.js";
export { id_SHA224 } from "../ANSI-X9-62/id-SHA224.va.js";

/* START_OF_SYMBOL_DEFINITION ANSIX9HashFunctions_Union3_Intersection0_Element */
/**
 * @summary ANSIX9HashFunctions_Union3_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ANSIX9HashFunctions-Union3-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const ANSIX9HashFunctions_Union3_Intersection0_Element: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_SHA224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ANSIX9HashFunctions_Union3_Intersection0_Element */

/* eslint-enable */
