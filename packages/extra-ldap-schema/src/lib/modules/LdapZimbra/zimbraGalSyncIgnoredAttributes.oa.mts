/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraGalSyncIgnoredAttributes } from "../LdapZimbra/id-at-zimbraGalSyncIgnoredAttributes.va.mjs";
import {
    type DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";

/**
 * @summary zimbraGalSyncIgnoredAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGalSyncIgnoredAttributes ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{256}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraGalSyncIgnoredAttributes"}
 *   LDAP-DESC                 "List of attributes that will be ignored when determining whether a GAL contact has been modified. Any change in other attribute values will make the contact ""dirty"" and the contact will show as modified in the next GAL sync response. By default modifyTimeStamp is always included in ignored attributes. Then if the only change in GAL contact is modifyTimeStamp, the contact will not be shown as modified in the next GAL sync response from the client, thus minimizing the need to download the GAL contact again when none of the meaningful attributes have changed."
 *   ID                        id-at-zimbraGalSyncIgnoredAttributes }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export
const zimbraGalSyncIgnoredAttributes: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraGalSyncIgnoredAttributes"],
    "&ldapDesc": "List of attributes that will be ignored when determining whether a GAL contact has been modified. Any change in other attribute values will make the contact \"dirty\" and the contact will show as modified in the next GAL sync response. By default modifyTimeStamp is always included in ignored attributes. Then if the only change in GAL contact is modifyTimeStamp, the contact will not be shown as modified in the next GAL sync response from the client, thus minimizing the need to download the GAL contact again when none of the meaningful attributes have changed." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraGalSyncIgnoredAttributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
