/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraSMIMELdapURL } from "../LdapZimbra/id-at-zimbraSMIMELdapURL.va.mjs";


/**
 * @summary zimbraSMIMELdapURL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraSMIMELdapURL ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{256}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraSMIMELdapURL"}
 *   LDAP-DESC                 "LDAP URL(s) for public key lookup for S/MIME via external LDAP. Multiple URLs for error fallback purpose can be separated by space. All SMIME attributes are in the format of {config-name}:{value}. A 'SMIME config' is a set of SMIME attribute values with the same {config-name}. Multiple SMIME configs can be configured on a domain or on globalconfig. Note: SMIME attributes on domains do not inherited values from globalconfig, they are not domain-inherited attributes. During SMIME public key lookup, if there are any SMIME config on the domain of the account, they are used. SMIME configs on globalconfig will be used only when there is no SMIME config on the domain. SMIME attributes cannot be modified directly with zmprov md/mcf commands. Use zmprov gcsc/gdsc/mcsc/mdsc/rcsc/rdsc command instead."
 *   ID                        id-at-zimbraSMIMELdapURL }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraSMIMELdapURL_Type = (el: _Element): DirectoryString => {
    const value = _decode_DirectoryString(el);
    let length: number;
    if ("teletexString" in value) {
        length = value.teletexString.length;
    } else if ("printableString" in value) {
        length = value.printableString.length;
    } else if ("bmpString" in value) {
        length = value.bmpString.length;
    } else if ("universalString" in value) {
        length = value.universalString.length;
    } else {
        length = value.uTF8String.length;
    }
    if (length < 1 || length > 256) {
        throw new ASN1SizeError("zimbraSMIMELdapURL violates SIZE constraint");
    }
    return value;
};

export
const zimbraSMIMELdapURL: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraSMIMELdapURL_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraSMIMELdapURL" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "LDAP URL(s) for public key lookup for S/MIME via external LDAP. Multiple URLs for error fallback purpose can be separated by space. All SMIME attributes are in the format of {config-name}:{value}. A 'SMIME config' is a set of SMIME attribute values with the same {config-name}. Multiple SMIME configs can be configured on a domain or on globalconfig. Note: SMIME attributes on domains do not inherited values from globalconfig, they are not domain-inherited attributes. During SMIME public key lookup, if there are any SMIME config on the domain of the account, they are used. SMIME configs on globalconfig will be used only when there is no SMIME config on the domain. SMIME attributes cannot be modified directly with zmprov md/mcf commands. Use zmprov gcsc/gdsc/mcsc/mdsc/rcsc/rdsc command instead." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraSMIMELdapURL /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

