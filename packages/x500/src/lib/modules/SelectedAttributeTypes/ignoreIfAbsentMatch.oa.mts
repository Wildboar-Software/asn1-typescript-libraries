/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_ignoreIfAbsentMatch } from "../SelectedAttributeTypes/id-mr-ignoreIfAbsentMatch.va.mjs";
/**
 * @summary ignoreIfAbsentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ignoreIfAbsentMatch MATCHING-RULE ::= {
 *   ID      id-mr-ignoreIfAbsentMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const ignoreIfAbsentMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&id": id_mr_ignoreIfAbsentMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
