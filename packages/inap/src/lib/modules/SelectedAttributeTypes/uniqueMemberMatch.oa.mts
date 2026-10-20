/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { NameAndOptionalUID, _decode_NameAndOptionalUID, _encode_NameAndOptionalUID } from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
// export { NameAndOptionalUID, _decode_NameAndOptionalUID, _encode_NameAndOptionalUID } from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { id_mr_uniqueMemberMatch } from "../SelectedAttributeTypes/id-mr-uniqueMemberMatch.va.mjs";
// export { id_mr_uniqueMemberMatch } from "../SelectedAttributeTypes/id-mr-uniqueMemberMatch.va.mjs";


/**
 * @summary uniqueMemberMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uniqueMemberMatch MATCHING-RULE ::= {
 *   SYNTAX  NameAndOptionalUID
 *   ID      id-mr-uniqueMemberMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<NameAndOptionalUID>}
 * @implements {MATCHING_RULE<NameAndOptionalUID>}
 */
export
const uniqueMemberMatch: MATCHING_RULE<NameAndOptionalUID> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&AssertionType": _encode_NameAndOptionalUID,
    },
    "&id": id_mr_uniqueMemberMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
