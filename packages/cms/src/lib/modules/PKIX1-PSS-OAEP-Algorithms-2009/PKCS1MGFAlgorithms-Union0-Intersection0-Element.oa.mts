/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/AuthenticationFramework";
import {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta.mjs";
import { id_mgf1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-mgf1.va.mjs";

/**
 * @summary PKCS1MGFAlgorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1MGFAlgorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM<HashAlgorithm>}
 * @implements {ALGORITHM<HashAlgorithm>}
 */
export const PKCS1MGFAlgorithms_Union0_Intersection0_Element: ALGORITHM<HashAlgorithm> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_HashAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_HashAlgorithm,
    },
    "&id": id_mgf1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
