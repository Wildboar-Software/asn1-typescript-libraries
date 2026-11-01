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
import { id_at_zimbraAutoProvListenerClass } from "../LdapZimbra/id-at-zimbraAutoProvListenerClass.va.mjs";


/**
 * @summary zimbraAutoProvListenerClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAutoProvListenerClass ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{1024}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraAutoProvListenerClass"}
 *   LDAP-DESC                 "EAGER mode: optional LAZY mode: optional MANUAL mode: optional Class name of auto provision listener. The class must implement the com.zimbra.cs.account.Account.AutoProvisionListener interface. The singleton listener instance is invoked after each account is auto created in Zimbra. Listener can be plugged in as a server extension to handle tasks like updating the account auto provision status in the external LDAP directory. At each eager provision interval, ZCS does an LDAP search based on the value configured in zimbraAutoProvLdapSearchFilter. Returned entries from this search are candidates to be auto provisioned in this batch. The zimbraAutoProvLdapSearchFilter should include an assertion that will only hit entries in the external directory that have not yet been provisioned in ZCS, otherwise it's likely the same entries will be repeated pulled in to ZCS. After an account is auto provisioned in ZCS, com.zimbra.cs.account.Account.AutoProvisionListener.postCreate(Domain domain, Account acct, String externalDN) will be called by the auto provisioning framework. Customer can implement the AutoProvisionListener interface in a ZCS server extension and get their AutoProvisionListener.postCreate() get called. The implementation of customer's postCreate method can be, for example, setting an attribute in the external directory on the account just provisioned in ZCS. The attribute can be included as a condition in the zimbraAutoProvLdapSearchFilter, so the entry won't be returned again by the LDAP search in the next interval."
 *   ID                        id-at-zimbraAutoProvListenerClass }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraAutoProvListenerClass_Type = (el: _Element): DirectoryString => {
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
    if (length < 1 || length > 1024) {
        throw new ASN1SizeError("zimbraAutoProvListenerClass violates SIZE constraint");
    }
    return value;
};

export
const zimbraAutoProvListenerClass: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraAutoProvListenerClass_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAutoProvListenerClass" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "EAGER mode: optional LAZY mode: optional MANUAL mode: optional Class name of auto provision listener. The class must implement the com.zimbra.cs.account.Account.AutoProvisionListener interface. The singleton listener instance is invoked after each account is auto created in Zimbra. Listener can be plugged in as a server extension to handle tasks like updating the account auto provision status in the external LDAP directory. At each eager provision interval, ZCS does an LDAP search based on the value configured in zimbraAutoProvLdapSearchFilter. Returned entries from this search are candidates to be auto provisioned in this batch. The zimbraAutoProvLdapSearchFilter should include an assertion that will only hit entries in the external directory that have not yet been provisioned in ZCS, otherwise it's likely the same entries will be repeated pulled in to ZCS. After an account is auto provisioned in ZCS, com.zimbra.cs.account.Account.AutoProvisionListener.postCreate(Domain domain, Account acct, String externalDN) will be called by the auto provisioning framework. Customer can implement the AutoProvisionListener interface in a ZCS server extension and get their AutoProvisionListener.postCreate() get called. The implementation of customer's postCreate method can be, for example, setting an attribute in the external directory on the account just provisioned in ZCS. The attribute can be included as a condition in the zimbraAutoProvLdapSearchFilter, so the entry won't be returned again by the LDAP search in the next interval." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAutoProvListenerClass /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

