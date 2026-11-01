/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraDeviceCalendarSoftDeleteExcludePattern } from "../LdapZimbra/id-at-zimbraDeviceCalendarSoftDeleteExcludePattern.va.mjs";

/**
 * @summary zimbraDeviceCalendarSoftDeleteExcludePattern
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDeviceCalendarSoftDeleteExcludePattern ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseExactMatch
 *   SUBSTRINGS MATCHING RULE  caseExactSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraDeviceCalendarSoftDeleteExcludePattern"}
 *   LDAP-DESC                 "Regex to be matched for preventing devices from soft deletion of out of range calendar items. Suppose device is set to sync calendar item of 2 months range then server will ONLY send softdelete for out of range (expired) calendar items, if device id DOES NOT match to the regex provided."
 *   ID                        id-at-zimbraDeviceCalendarSoftDeleteExcludePattern }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const zimbraDeviceCalendarSoftDeleteExcludePattern: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseExactSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraDeviceCalendarSoftDeleteExcludePattern" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Regex to be matched for preventing devices from soft deletion of out of range calendar items. Suppose device is set to sync calendar item of 2 months range then server will ONLY send softdelete for out of range (expired) calendar items, if device id DOES NOT match to the regex provided." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraDeviceCalendarSoftDeleteExcludePattern /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
