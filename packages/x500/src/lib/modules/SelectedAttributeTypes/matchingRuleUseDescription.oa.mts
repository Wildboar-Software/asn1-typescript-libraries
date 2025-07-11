/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    MatchingRuleUseDescription,
    _decode_MatchingRuleUseDescription,
    _encode_MatchingRuleUseDescription,
} from "../SchemaAdministration/MatchingRuleUseDescription.ta.mjs";
import { id_lsx_matchingRuleUseDescription } from "../SelectedAttributeTypes/id-lsx-matchingRuleUseDescription.va.mjs";
/**
 * @summary matchingRuleUseDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleUseDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Matching Rule Use Description"
 *   DIRECTORY SYNTAX  MatchingRuleUseDescription
 *   ID                id-lsx-matchingRuleUseDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<MatchingRuleUseDescription>}
 * @implements {SYNTAX_NAME<MatchingRuleUseDescription>}
 */
export const matchingRuleUseDescription: SYNTAX_NAME<MatchingRuleUseDescription> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_MatchingRuleUseDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleUseDescription,
    },
    "&ldapDesc": "Matching Rule Use Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_matchingRuleUseDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
