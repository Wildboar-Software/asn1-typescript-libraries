/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.js";
import { sha_1 } from "../ANSI-X9-62/sha-1.va.js";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.js";
export { sha_1 } from "../ANSI-X9-62/sha-1.va.js";

/* START_OF_SYMBOL_DEFINITION ANSIX9HashFunctions_Union0_Intersection0_Element */
/**
 * @summary ANSIX9HashFunctions_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ANSIX9HashFunctions-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ANSIX9HashFunctions_Union0_Intersection0_Element: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": sha_1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ANSIX9HashFunctions_Union0_Intersection0_Element */

/* eslint-enable */
