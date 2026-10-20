/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { ub_directory_string_first_component_match } from "../UpperBounds/ub-directory-string-first-component-match.va.mjs";
import { id_mr_directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-directoryStringFirstComponentMatch.va.mjs";
// export { id_mr_directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-directoryStringFirstComponentMatch.va.mjs";


/**
 * @summary directoryStringFirstComponentMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryStringFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX  DirectoryString {ub-directory-string-first-component-match}
 *   ID      id-mr-directoryStringFirstComponentMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<DirectoryString>}
 * @implements {MATCHING_RULE<DirectoryString>}
 */
export
const directoryStringFirstComponentMatch: MATCHING_RULE<DirectoryString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_DirectoryString,
    },
    "&id": id_mr_directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
