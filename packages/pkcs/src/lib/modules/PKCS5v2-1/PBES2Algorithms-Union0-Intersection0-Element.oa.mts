/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { id_PBES2 } from "../PKCS5v2-1/id-PBES2.va.mjs";
import {
    PBES2_params,
    _decode_PBES2_params,
    _encode_PBES2_params,
} from "../PKCS5v2-1/PBES2-params.ta.mjs";

/**
 * @summary PBES2Algorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES2Algorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<PBES2_params>}
 * @implements {ALGORITHM_IDENTIFIER<PBES2_params>}
 */
export const PBES2Algorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<PBES2_params> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_PBES2_params,
    },
    encoderFor: {
        "&Type": _encode_PBES2_params,
    },
    "&id": id_PBES2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
