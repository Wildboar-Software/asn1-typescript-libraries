/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
import { ecdsa_with_Sha224 } from "../ANSI-X9-62/ecdsa-with-Sha224.va";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
export { ecdsa_with_Sha224 } from "../ANSI-X9-62/ecdsa-with-Sha224.va";

/* START_OF_SYMBOL_DEFINITION ECCAlgorithmSet_Union5_Intersection0_Element */
/**
 * @summary ECCAlgorithmSet_Union5_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECCAlgorithmSet-Union5-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ECCAlgorithmSet_Union5_Intersection0_Element: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_Sha224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ECCAlgorithmSet_Union5_Intersection0_Element */

/* eslint-enable */
