/* eslint-disable */
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
import { id_cap_preferBinaryInside } from "../SecureMimeMessageV3dot1-2009/id-cap-preferBinaryInside.va.mjs";

/**
 * @summary cap_preferBinaryInside
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cap-preferBinaryInside SMIME-CAPS ::= {
 * -- No value 
 * IDENTIFIED BY id-cap-preferBinaryInside }
 * ```
 *
 * @constant
 * @type {SMIME_CAPS}
 * @implements {SMIME_CAPS}
 */
export const cap_preferBinaryInside: SMIME_CAPS = {
    class: "SMIME-CAPS",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_cap_preferBinaryInside /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
