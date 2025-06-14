/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_soa_matchingRuleUse } from "../SchemaAdministration/id-soa-matchingRuleUse.va.mjs";
import {
    MatchingRuleUseDescription,
    _decode_MatchingRuleUseDescription,
    _encode_MatchingRuleUseDescription,
} from "../SchemaAdministration/MatchingRuleUseDescription.ta.mjs";
import { matchingRuleUseDescription } from "../SelectedAttributeTypes/matchingRuleUseDescription.oa.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/* START_OF_SYMBOL_DEFINITION matchingRuleUse */
/**
 * @summary matchingRuleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleUse ATTRIBUTE ::= {
 *   WITH SYNTAX              MatchingRuleUseDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              matchingRuleUseDescription.&id
 *   LDAP-NAME                {"matchingRuleUse"}
 *   ID                       id-soa-matchingRuleUse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MatchingRuleUseDescription>}
 * @implements {ATTRIBUTE<MatchingRuleUseDescription>}
 */
export const matchingRuleUse: ATTRIBUTE<MatchingRuleUseDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MatchingRuleUseDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleUseDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": matchingRuleUseDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["matchingRuleUse"],
    "&id": id_soa_matchingRuleUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION matchingRuleUse */

/* eslint-enable */
