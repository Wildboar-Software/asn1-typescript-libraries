/* eslint-disable */
import { type ALGORITHM } from "@wildboar/x500/AuthenticationFramework";
import {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/EncodingParameters.ta.mjs";
import { id_pSpecified } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-pSpecified.va.mjs";

/**
 * @summary PSS_SourceAlgorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSS-SourceAlgorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM<EncodingParameters>}
 * @implements {ALGORITHM<EncodingParameters>}
 */
export const PSS_SourceAlgorithms_Union0_Intersection0_Element: ALGORITHM<EncodingParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_EncodingParameters,
    },
    encoderFor: {
        "&Type": _encode_EncodingParameters,
    },
    "&id": id_pSpecified /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
