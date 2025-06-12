/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { ecdsa_with_Recommended } from "../ANSI-X9-62/ecdsa-with-Recommended.va.mjs";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
export { ecdsa_with_Recommended } from "../ANSI-X9-62/ecdsa-with-Recommended.va.mjs";

/* START_OF_SYMBOL_DEFINITION ECCAlgorithmSet_Union2_Intersection0_Element */
/**
 * @summary ECCAlgorithmSet_Union2_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECCAlgorithmSet-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ECCAlgorithmSet_Union2_Intersection0_Element: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_Recommended /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ECCAlgorithmSet_Union2_Intersection0_Element */

/* eslint-enable */
