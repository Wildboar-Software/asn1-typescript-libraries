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
import { id_at_zimbraAutoProvMode } from "../LdapZimbra/id-at-zimbraAutoProvMode.va.mjs";


/**
 * @summary zimbraAutoProvMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAutoProvMode ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraAutoProvMode"}
 *   LDAP-DESC                 "Auto provision modes enabled. Multiple modes can be enabled on a domain. EAGER: A server maintenance thread automatically polls the configured external auto provision LDAP source at a configured interval for entries due to be auto provisioned in Zimbra, and then auto creates the accounts in Zimbra directory. LAZY: auto creates the Zimbra account when user first login via one of the external auth mechanisms enabled for auto provisioning. Auth mechanisms enabled for auto provisioning are configured in zimbraAutoProvAuthMech. MANUAL: admin to search from the configured external auto provision LDAP source and select an entry from the search result to create the corresponding Zimbra account for the external entry. In all cases, localpart of the Zimbra account is mapped from an attribute on the external entry based on zimbraAutoProvAccountNameMap. The Zimbra account is populated with attributes mapped from the external entry based on zimbraAutoProvAttrMap."
 *   ID                        id-at-zimbraAutoProvMode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraAutoProvMode_Type = (el: _Element): DirectoryString => {
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
    if (length < 1 || length > 32) {
        throw new ASN1SizeError("zimbraAutoProvMode violates SIZE constraint");
    }
    return value;
};

export
const zimbraAutoProvMode: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraAutoProvMode_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAutoProvMode" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Auto provision modes enabled. Multiple modes can be enabled on a domain. EAGER: A server maintenance thread automatically polls the configured external auto provision LDAP source at a configured interval for entries due to be auto provisioned in Zimbra, and then auto creates the accounts in Zimbra directory. LAZY: auto creates the Zimbra account when user first login via one of the external auth mechanisms enabled for auto provisioning. Auth mechanisms enabled for auto provisioning are configured in zimbraAutoProvAuthMech. MANUAL: admin to search from the configured external auto provision LDAP source and select an entry from the search result to create the corresponding Zimbra account for the external entry. In all cases, localpart of the Zimbra account is mapped from an attribute on the external entry based on zimbraAutoProvAccountNameMap. The Zimbra account is populated with attributes mapped from the external entry based on zimbraAutoProvAttrMap." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAutoProvMode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

