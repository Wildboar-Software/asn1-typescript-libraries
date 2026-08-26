/* eslint-disable */
import { signcrypted_content } from "../CMSObjectIdentifiers/signcrypted-content.va.mjs";
import { type MODE } from "../CMSSigncryption/MODE.oca.mjs";

/**
 * @summary signcryptedContent
 * @description
 *
 * MODE object for signcrypted-content processing
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryptedContent MODE ::= {ID signcrypted-content}
 * ```
 *
 * @constant
 * @type {MODE}
 * @implements {MODE}
 */
export const signcryptedContent: MODE = {
    class: "MODE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": signcrypted_content /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
