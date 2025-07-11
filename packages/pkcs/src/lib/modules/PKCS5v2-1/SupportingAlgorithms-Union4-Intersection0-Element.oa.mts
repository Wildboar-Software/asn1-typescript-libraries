/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { rc5_CBC_PAD } from "../PKCS5v2-1/rc5-CBC-PAD.va.mjs";
import {
    RC5_CBC_Parameters,
    _decode_RC5_CBC_Parameters,
    _encode_RC5_CBC_Parameters,
} from "../PKCS5v2-1/RC5-CBC-Parameters.ta.mjs";

/**
 * @summary SupportingAlgorithms_Union4_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportingAlgorithms-Union4-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<RC5_CBC_Parameters>}
 * @implements {ALGORITHM_IDENTIFIER<RC5_CBC_Parameters>}
 */
export const SupportingAlgorithms_Union4_Intersection0_Element: ALGORITHM_IDENTIFIER<RC5_CBC_Parameters> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RC5_CBC_Parameters,
    },
    encoderFor: {
        "&Type": _encode_RC5_CBC_Parameters,
    },
    "&id": rc5_CBC_PAD /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
