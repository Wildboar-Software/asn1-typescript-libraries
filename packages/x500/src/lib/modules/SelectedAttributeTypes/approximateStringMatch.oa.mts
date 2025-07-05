/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_approximateStringMatch } from "../SelectedAttributeTypes/id-mr-approximateStringMatch.va.mjs";
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

/* eslint-enable */
