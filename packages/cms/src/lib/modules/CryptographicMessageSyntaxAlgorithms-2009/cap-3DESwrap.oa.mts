/* eslint-disable */
import { type SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
import { id_alg_CMS3DESwrap } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-CMS3DESwrap.va.mjs";

/**
 * @summary cap_3DESwrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cap-3DESwrap SMIME-CAPS ::= { IDENTIFIED BY id-alg-CMS3DESwrap }
 * ```
 *
 * @constant
 * @type {SMIME_CAPS}
 * @implements {SMIME_CAPS}
 */
export const cap_3DESwrap: SMIME_CAPS = {
    class: "SMIME-CAPS",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_alg_CMS3DESwrap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
