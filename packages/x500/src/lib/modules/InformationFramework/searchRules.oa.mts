/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_searchRules } from "../InformationFramework/id-oa-searchRules.va.mjs";
import {
    SearchRuleDescription,
    _decode_SearchRuleDescription,
    _encode_SearchRuleDescription,
} from "../InformationFramework/SearchRuleDescription.ta.mjs";
import { integerFirstComponentMatch } from "../SelectedAttributeTypes/integerFirstComponentMatch.oa.mjs";
/**
 * @summary searchRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchRules ATTRIBUTE ::= {
 *   WITH SYNTAX             SearchRuleDescription
 *   EQUALITY MATCHING RULE  integerFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-oa-searchRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SearchRuleDescription>}
 * @implements {ATTRIBUTE<SearchRuleDescription>}
 */
export const searchRules: ATTRIBUTE<SearchRuleDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SearchRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_SearchRuleDescription,
    },
    "&equality-match": integerFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_searchRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
