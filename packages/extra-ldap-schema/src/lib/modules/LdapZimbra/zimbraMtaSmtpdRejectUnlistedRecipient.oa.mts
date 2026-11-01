/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraMtaSmtpdRejectUnlistedRecipient } from "../LdapZimbra/id-at-zimbraMtaSmtpdRejectUnlistedRecipient.va.mjs";


/**
 * @summary zimbraMtaSmtpdRejectUnlistedRecipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMtaSmtpdRejectUnlistedRecipient ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraMtaSmtpdRejectUnlistedRecipient"}
 *   LDAP-DESC                 "Value for postconf smtpd_reject_unlisted_recipient"
 *   ID                        id-at-zimbraMtaSmtpdRejectUnlistedRecipient }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraMtaSmtpdRejectUnlistedRecipient_Type = (el: _Element): DirectoryString => {
    const value = _decode_DirectoryString(el);
    let text: string;
    if ("teletexString" in value) {
        text = value.teletexString;
    } else if ("printableString" in value) {
        text = value.printableString;
    } else if ("bmpString" in value) {
        text = value.bmpString;
    } else if ("universalString" in value) {
        text = value.universalString;
    } else {
        text = value.uTF8String;
    }
    if (text.length < 1 || text.length > 32) {
        throw new ASN1SizeError("zimbraMtaSmtpdRejectUnlistedRecipient violates SIZE constraint");
    }
    return value;
};

export
const zimbraMtaSmtpdRejectUnlistedRecipient: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraMtaSmtpdRejectUnlistedRecipient_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraMtaSmtpdRejectUnlistedRecipient" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Value for postconf smtpd_reject_unlisted_recipient" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMtaSmtpdRejectUnlistedRecipient /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

