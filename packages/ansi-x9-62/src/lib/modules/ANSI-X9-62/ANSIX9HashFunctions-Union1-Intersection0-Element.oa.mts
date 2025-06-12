/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { sha_1 } from "../ANSI-X9-62/sha-1.va.mjs";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
export { sha_1 } from "../ANSI-X9-62/sha-1.va.mjs";

/* START_OF_SYMBOL_DEFINITION ANSIX9HashFunctions_Union1_Intersection0_Element */
/**
 * @summary ANSIX9HashFunctions_Union1_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ANSIX9HashFunctions-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const ANSIX9HashFunctions_Union1_Intersection0_Element: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha_1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ANSIX9HashFunctions_Union1_Intersection0_Element */

/* eslint-enable */
