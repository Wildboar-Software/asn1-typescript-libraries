/* eslint-disable */
import { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
export { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
import { dhStatic_sha1 } from "./dhStatic-sha1.va.mjs";

/* START_OF_SYMBOL_DEFINITION NamedSchemes_Union0_Intersection0_Element */
/**
 * @summary NamedSchemes_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedSchemes-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {KEY_AGREEMENT}
 * @implements {KEY_AGREEMENT}
 */
export const NamedSchemes_Union0_Intersection0_Element: KEY_AGREEMENT<undefined> = {
    class: "ALGORITHM-ID",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": dhStatic_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION NamedSchemes_Union0_Intersection0_Element */

/* eslint-enable */
