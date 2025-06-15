/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_systemProposedMatch } from "../SelectedAttributeTypes/id-mr-systemProposedMatch.va.mjs";
/**
 * @summary systemProposedMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * systemProposedMatch MATCHING-RULE ::= {
 *   ID  id-mr-systemProposedMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const systemProposedMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&id": id_mr_systemProposedMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
