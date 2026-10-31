/* eslint-disable */
import { type IA5String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraCertAuthorityKeySelfSigned } from "../LdapZimbra/id-at-zimbraCertAuthorityKeySelfSigned.va.mjs";
import { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";

/**
 * @summary zimbraCertAuthorityKeySelfSigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCertAuthorityKeySelfSigned ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..2048))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraCertAuthorityKeySelfSigned"}
 *   LDAP-DESC                 "Please see the documentation for the attribute zimbraCertAuthorityCertSelfSigned. In addition, please note that this attribute is provided at install for convenience during a test install without real certs issued by well known CAs. If you choose to create your own CA for your production uses, please note that it is a bad idea to store your CA-s private key in LDAP, as this data maybe read from zimbraGlobalConfig in the clear."
 *   ID                        id-at-zimbraCertAuthorityKeySelfSigned }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const zimbraCertAuthorityKeySelfSigned: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraCertAuthorityKeySelfSigned"],
    "&ldapDesc": "Please see the documentation for the attribute zimbraCertAuthorityCertSelfSigned. In addition, please note that this attribute is provided at install for convenience during a test install without real certs issued by well known CAs. If you choose to create your own CA for your production uses, please note that it is a bad idea to store your CA-s private key in LDAP, as this data maybe read from zimbraGlobalConfig in the clear." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraCertAuthorityKeySelfSigned /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
