/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraSMIMELdapFilter } from "../LdapZimbra/id-at-zimbraSMIMELdapFilter.va.mjs";
import {
    type DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";

/**
 * @summary zimbraSMIMELdapFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraSMIMELdapFilter ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{1024}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraSMIMELdapFilter"}
 *   LDAP-DESC                 "LDAP search filter for public key lookup for S/MIME via external LDAP. Can contain the following conversion variables for expansion: %n - search key with @ (or without, if no @ was specified) %u - with @ removed e.g. (mail=%n) All SMIME attributes are in the format of {config-name}:{value}. A 'SMIME config' is a set of SMIME attribute values with the same {config-name}. Multiple SMIME configs can be configured on a domain or on globalconfig. Note: SMIME attributes on domains do not inherited values from globalconfig, they are not domain-inherited attributes. During SMIME public key lookup, if there are any SMIME config on the domain of the account, they are used. SMIME configs on globalconfig will be used only when there is no SMIME config on the domain. SMIME attributes cannot be modified directly with zmprov md/mcf commands. Use zmprov gcsc/gdsc/mcsc/mdsc/rcsc/rdsc command instead."
 *   ID                        id-at-zimbraSMIMELdapFilter }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export
const zimbraSMIMELdapFilter: ATTRIBUTE<DirectoryString> = {
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
    "&ldapName": ["zimbraSMIMELdapFilter"],
    "&ldapDesc": "LDAP search filter for public key lookup for S/MIME via external LDAP. Can contain the following conversion variables for expansion: %n - search key with @ (or without, if no @ was specified) %u - with @ removed e.g. (mail=%n) All SMIME attributes are in the format of {config-name}:{value}. A 'SMIME config' is a set of SMIME attribute values with the same {config-name}. Multiple SMIME configs can be configured on a domain or on globalconfig. Note: SMIME attributes on domains do not inherited values from globalconfig, they are not domain-inherited attributes. During SMIME public key lookup, if there are any SMIME config on the domain of the account, they are used. SMIME configs on globalconfig will be used only when there is no SMIME config on the domain. SMIME attributes cannot be modified directly with zmprov md/mcf commands. Use zmprov gcsc/gdsc/mcsc/mdsc/rcsc/rdsc command instead." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraSMIMELdapFilter /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
