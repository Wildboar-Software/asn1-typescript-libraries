/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";
import { id_sha1 } from "../ANSI-X9-42/id-sha1.va.mjs";

/**
 * @summary KeyDerivationAlgorithm_Union0_Intersection0_Element
 * @description
 *
 * `{ OID id-sha1 PARMS NULL }` from ANS X9.30. ANS X9.42-2003
 * §A.2.2.
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

/* eslint-enable */
