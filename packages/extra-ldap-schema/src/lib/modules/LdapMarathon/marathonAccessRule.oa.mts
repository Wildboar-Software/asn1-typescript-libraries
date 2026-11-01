/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_marathonAccessRule } from "../LdapMarathon/id-at-marathonAccessRule.va.mjs";


/**
 * @summary marathonAccessRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * marathonAccessRule ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"marathonAccessRule"}
 *   LDAP-DESC                 "marathon-ldap permissions in json format."
 *   ID                        id-at-marathonAccessRule }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const marathonAccessRule: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "marathonAccessRule" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "marathon-ldap permissions in json format." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_marathonAccessRule /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

