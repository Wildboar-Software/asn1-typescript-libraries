/* eslint-disable */
import { type ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { ecdsa_with_Sha384 } from "../ANSI-X9-62/ecdsa-with-Sha384.va.mjs";
/**
 * @summary ECCAlgorithmSet_Union7_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECCAlgorithmSet-Union7-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ECCAlgorithmSet_Union7_Intersection0_Element: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_Sha384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
