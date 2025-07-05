/* eslint-disable */
import { type KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
import { mqv2_sha1 } from "./mqv2-sha1.va.mjs";


/**
 * @summary NamedSchemes_Union6_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedSchemes-Union6-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {KEY_AGREEMENT}
 * @implements {KEY_AGREEMENT}
 */
export const NamedSchemes_Union6_Intersection0_Element: KEY_AGREEMENT<undefined> = {
    class: "ALGORITHM-ID",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": mqv2_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
