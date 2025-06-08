/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
import { ecdsa_with_Sha1 } from "../ANSI-X9-62/ecdsa-with-Sha1.va";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
export { ecdsa_with_Sha1 } from "../ANSI-X9-62/ecdsa-with-Sha1.va";

/* START_OF_SYMBOL_DEFINITION ECCAlgorithmSet_Union0_Intersection0_Element */
/**
 * @summary ECCAlgorithmSet_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECCAlgorithmSet-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ECCAlgorithmSet_Union0_Intersection0_Element: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_Sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ECCAlgorithmSet_Union0_Intersection0_Element */

/* eslint-enable */
