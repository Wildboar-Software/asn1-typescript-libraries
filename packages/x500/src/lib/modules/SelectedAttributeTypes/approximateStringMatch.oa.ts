/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_approximateStringMatch } from "../SelectedAttributeTypes/id-mr-approximateStringMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_approximateStringMatch } from "../SelectedAttributeTypes/id-mr-approximateStringMatch.va.js";

/* START_OF_SYMBOL_DEFINITION approximateStringMatch */
/**
 * @summary approximateStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * approximateStringMatch MATCHING-RULE ::= {
 *   ID      id-mr-approximateStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const approximateStringMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&id": id_mr_approximateStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION approximateStringMatch */

/* eslint-enable */
