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
import { id_at_zimbraMailThreadingAlgorithm } from "../LdapZimbra/id-at-zimbraMailThreadingAlgorithm.va.mjs";


/**
 * @summary zimbraMailThreadingAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailThreadingAlgorithm ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraMailThreadingAlgorithm"}
 *   LDAP-DESC                 "The algorithm to use when aggregating new messages into conversations. Possible values are: - ""none"": no conversation threading is performed. - ""subject"": the message will be threaded based solely on its normalized subject. - ""strict"": only the threading message headers (References, In-Reply-To, Message-ID, and Resent-Message-ID) are used to correlate messages. No checking of normalized subjects is performed. - ""references"": the same logic as ""strict"" with the constraints slightly altered so that the non-standard Thread-Index header is considered when threading messages and that a reply message lacking References and In-Reply-To headers will fall back to using subject-based threading. - ""subjrefs"": the same logic as ""references"" with the further caveat that changes in the normalized subject will break a thread in two."
 *   ID                        id-at-zimbraMailThreadingAlgorithm }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraMailThreadingAlgorithm_Type = (el: _Element): DirectoryString => {
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
        throw new ASN1SizeError("zimbraMailThreadingAlgorithm violates SIZE constraint");
    }
    return value;
};

export
const zimbraMailThreadingAlgorithm: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraMailThreadingAlgorithm_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraMailThreadingAlgorithm" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The algorithm to use when aggregating new messages into conversations. Possible values are: - \"none\": no conversation threading is performed. - \"subject\": the message will be threaded based solely on its normalized subject. - \"strict\": only the threading message headers (References, In-Reply-To, Message-ID, and Resent-Message-ID) are used to correlate messages. No checking of normalized subjects is performed. - \"references\": the same logic as \"strict\" with the constraints slightly altered so that the non-standard Thread-Index header is considered when threading messages and that a reply message lacking References and In-Reply-To headers will fall back to using subject-based threading. - \"subjrefs\": the same logic as \"references\" with the further caveat that changes in the normalized subject will break a thread in two." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMailThreadingAlgorithm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

