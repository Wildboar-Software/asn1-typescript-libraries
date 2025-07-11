/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    DITContentRuleDescription,
    _decode_DITContentRuleDescription,
    _encode_DITContentRuleDescription,
} from "../SchemaAdministration/DITContentRuleDescription.ta.mjs";
import { id_soa_dITContentRules } from "../SchemaAdministration/id-soa-dITContentRules.va.mjs";
import { dITContentRuleDescription } from "../SelectedAttributeTypes/dITContentRuleDescription.oa.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/**
 * @summary dITContentRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContentRules ATTRIBUTE ::= {
 *   WITH SYNTAX              DITContentRuleDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              dITContentRuleDescription.&id
 *   LDAP-NAME                {"dITContentRules"}
 *   ID                       id-soa-dITContentRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DITContentRuleDescription>}
 * @implements {ATTRIBUTE<DITContentRuleDescription>}
 */
export const dITContentRules: ATTRIBUTE<DITContentRuleDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITContentRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContentRuleDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dITContentRuleDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dITContentRules"],
    "&id": id_soa_dITContentRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
