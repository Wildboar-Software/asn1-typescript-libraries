/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { id_RSAES_OAEP } from "../PKCS-1/id-RSAES-OAEP.va.mjs";
import {
    RSAES_OAEP_params,
    _decode_RSAES_OAEP_params,
    _encode_RSAES_OAEP_params,
} from "../PKCS-1/RSAES-OAEP-params.ta.mjs";

/**
 * @summary PKCS1Algorithms_Union10_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1Algorithms-Union10-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<RSAES_OAEP_params>}
 * @implements {ALGORITHM_IDENTIFIER<RSAES_OAEP_params>}
 */
export const PKCS1Algorithms_Union10_Intersection0_Element: ALGORITHM_IDENTIFIER<RSAES_OAEP_params> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RSAES_OAEP_params,
    },
    encoderFor: {
        "&Type": _encode_RSAES_OAEP_params,
    },
    "&id": id_RSAES_OAEP /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
