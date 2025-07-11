/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_nullMatch } from "../SelectedAttributeTypes/id-mr-nullMatch.va.mjs";
/**
 * @summary nullMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullMatch MATCHING-RULE ::= {
 *   ID      id-mr-nullMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const nullMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&id": id_mr_nullMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
