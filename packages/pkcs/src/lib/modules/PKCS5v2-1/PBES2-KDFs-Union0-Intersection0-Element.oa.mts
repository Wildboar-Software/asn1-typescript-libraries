/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { id_PBKDF2 } from "../PKCS5v2-1/id-PBKDF2.va.mjs";
import {
    PBKDF2_params,
    _decode_PBKDF2_params,
    _encode_PBKDF2_params,
} from "../PKCS5v2-1/PBKDF2-params.ta.mjs";

/**
 * @summary PBES2_KDFs_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES2-KDFs-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<PBKDF2_params>}
 * @implements {ALGORITHM_IDENTIFIER<PBKDF2_params>}
 */
export const PBES2_KDFs_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<PBKDF2_params> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_PBKDF2_params,
    },
    encoderFor: {
        "&Type": _encode_PBKDF2_params,
    },
    "&id": id_PBKDF2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
