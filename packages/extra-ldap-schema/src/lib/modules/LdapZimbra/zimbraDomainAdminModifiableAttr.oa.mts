/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraDomainAdminModifiableAttr } from "../LdapZimbra/id-at-zimbraDomainAdminModifiableAttr.va.mjs";
// export { id_at_zimbraDomainAdminModifiableAttr } from "../LdapZimbra/id-at-zimbraDomainAdminModifiableAttr.va.mjs";


/**
 * @summary zimbraDomainAdminModifiableAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDomainAdminModifiableAttr ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{1024}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraDomainAdminModifiableAttr"}
 *   LDAP-DESC                 "Deprecated since: 5.0. deprecated in favor of the domainAdminAdminModifiable flag. Orig desc: account attributes that a domain administrator is allowed to modify"
 *   ID                        id-at-zimbraDomainAdminModifiableAttr }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export
const zimbraDomainAdminModifiableAttr: ATTRIBUTE<DirectoryString> = {
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
    "&ldapName": [ "zimbraDomainAdminModifiableAttr" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Deprecated since: 5.0. deprecated in favor of the domainAdminAdminModifiable flag. Orig desc: account attributes that a domain administrator is allowed to modify" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraDomainAdminModifiableAttr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
