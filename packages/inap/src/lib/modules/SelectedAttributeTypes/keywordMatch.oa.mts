/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { ub_match } from "../UpperBounds/ub-match.va.mjs";
import { id_mr_keywordMatch } from "../SelectedAttributeTypes/id-mr-keywordMatch.va.mjs";
// export { id_mr_keywordMatch } from "../SelectedAttributeTypes/id-mr-keywordMatch.va.mjs";


/**
 * @summary keywordMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * keywordMatch MATCHING-RULE ::= {
 *   SYNTAX  DirectoryString {ub-match}
 *   ID      id-mr-keywordMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<DirectoryString>}
 * @implements {MATCHING_RULE<DirectoryString>}
 */
export
const keywordMatch: MATCHING_RULE<DirectoryString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_DirectoryString,
    },
    "&id": id_mr_keywordMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
