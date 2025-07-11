/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_zonalMatch } from "../SelectedAttributeTypes/id-mr-zonalMatch.va.mjs";
import { multipleMatchingLocalities } from "../SelectedAttributeTypes/multipleMatchingLocalities.oa.mjs";
/**
 * @summary zonalMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * zonalMatch MATCHING-RULE ::= {
 *   UNIQUE-MATCH-INDICATOR  multipleMatchingLocalities
 *   ID                      id-mr-zonalMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const zonalMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&uniqueMatchIndicator": multipleMatchingLocalities /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_zonalMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
