/* eslint-disable */
import { signcrypted_envelope } from "../CMSObjectIdentifiers/signcrypted-envelope.va.mjs";
import { type MODE } from "../CMSSigncryption/MODE.oca.mjs";

/**
 * @summary signcryptedEnveloped
 * @description
 *
 * MODE object for signcrypted-envelope processing
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.4).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryptedEnveloped    MODE ::= {ID signcrypted-envelope}
 * ```
 *
 * @constant
 * @type {MODE}
 * @implements {MODE}
 */
export const signcryptedEnveloped: MODE = {
    class: "MODE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": signcrypted_envelope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
