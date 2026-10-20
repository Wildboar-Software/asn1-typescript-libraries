/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { CaseIgnoreListMatch, _decode_CaseIgnoreListMatch, _encode_CaseIgnoreListMatch } from "../SelectedAttributeTypes/CaseIgnoreListMatch.ta.mjs";
// export { CaseIgnoreListMatch, _decode_CaseIgnoreListMatch, _encode_CaseIgnoreListMatch } from "../SelectedAttributeTypes/CaseIgnoreListMatch.ta.mjs";
import { id_mr_caseIgnoreListMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreListMatch.va.mjs";
// export { id_mr_caseIgnoreListMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreListMatch.va.mjs";


/**
 * @summary caseIgnoreListMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseIgnoreListMatch MATCHING-RULE ::= {
 *   SYNTAX  CaseIgnoreListMatch
 *   ID      id-mr-caseIgnoreListMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<CaseIgnoreListMatch>}
 * @implements {MATCHING_RULE<CaseIgnoreListMatch>}
 */
export
const caseIgnoreListMatch: MATCHING_RULE<CaseIgnoreListMatch> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CaseIgnoreListMatch,
    },
    encoderFor: {
        "&AssertionType": _encode_CaseIgnoreListMatch,
    },
    "&id": id_mr_caseIgnoreListMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
