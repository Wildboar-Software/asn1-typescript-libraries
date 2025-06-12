/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.js";
import { id_sha1 } from "../ANSI-X9-42/id-sha1.va.js";
export { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.js";
export { id_sha1 } from "../ANSI-X9-42/id-sha1.va.js";

/* START_OF_SYMBOL_DEFINITION KeyDerivationAlgorithm_Union0_Intersection0_Element */
/**
 * @summary KeyDerivationAlgorithm_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationAlgorithm-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_ID<NULL>}
 * @implements {ALGORITHM_ID<NULL>}
 */
export const KeyDerivationAlgorithm_Union0_Intersection0_Element: ALGORITHM_ID<NULL> = {
    class: "ALGORITHM-ID",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION KeyDerivationAlgorithm_Union0_Intersection0_Element */

/* eslint-enable */
