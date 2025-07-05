/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import {
    PBEParameter,
    _decode_PBEParameter,
    _encode_PBEParameter,
} from "../PKCS5v2-1/PBEParameter.ta.mjs";
import { pbeWithMD5AndDES_CBC } from "../PKCS5v2-1/pbeWithMD5AndDES-CBC.va.mjs";

/**
 * @summary PBES1Algorithms_Union2_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES1Algorithms-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<PBEParameter>}
 * @implements {ALGORITHM_IDENTIFIER<PBEParameter>}
 */
export const PBES1Algorithms_Union2_Intersection0_Element: ALGORITHM_IDENTIFIER<PBEParameter> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_PBEParameter,
    },
    encoderFor: {
        "&Type": _encode_PBEParameter,
    },
    "&id": pbeWithMD5AndDES_CBC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
