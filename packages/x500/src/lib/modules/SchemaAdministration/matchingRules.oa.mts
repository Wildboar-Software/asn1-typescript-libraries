/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_soa_matchingRules } from "../SchemaAdministration/id-soa-matchingRules.va.mjs";
import {
    MatchingRuleDescription,
    _decode_MatchingRuleDescription,
    _encode_MatchingRuleDescription,
} from "../SchemaAdministration/MatchingRuleDescription.ta.mjs";
import { matchingRuleDescription } from "../SelectedAttributeTypes/matchingRuleDescription.oa.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/**
 * @summary matchingRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRules ATTRIBUTE ::= {
 *   WITH SYNTAX              MatchingRuleDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              matchingRuleDescription.&id
 *   LDAP-NAME                {"matchingRules"}
 *   ID                       id-soa-matchingRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MatchingRuleDescription>}
 * @implements {ATTRIBUTE<MatchingRuleDescription>}
 */
export const matchingRules: ATTRIBUTE<MatchingRuleDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MatchingRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": matchingRuleDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["matchingRules"],
    "&id": id_soa_matchingRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
