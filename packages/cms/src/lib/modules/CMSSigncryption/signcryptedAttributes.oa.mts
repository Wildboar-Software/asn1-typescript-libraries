/* eslint-disable */
import { signcrypted_attributes } from "../CMSObjectIdentifiers/signcrypted-attributes.va.mjs";
import { type MODE } from "../CMSSigncryption/MODE.oca.mjs";

/**
 * @summary signcryptedAttributes
 * @description
 *
 * MODE object for signcrypted-attributes processing
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryptedAttributes MODE ::= {ID signcrypted-attributes}
 * ```
 *
 * @constant
 * @type {MODE}
 * @implements {MODE}
 */
export const signcryptedAttributes: MODE = {
    class: "MODE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": signcrypted_attributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
