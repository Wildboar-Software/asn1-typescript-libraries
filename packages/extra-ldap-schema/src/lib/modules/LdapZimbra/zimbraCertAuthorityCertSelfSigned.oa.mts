/* eslint-disable */
import { type IA5String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraCertAuthorityCertSelfSigned } from "../LdapZimbra/id-at-zimbraCertAuthorityCertSelfSigned.va.mjs";
import { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";

/**
 * @summary zimbraCertAuthorityCertSelfSigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCertAuthorityCertSelfSigned ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..2048))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraCertAuthorityCertSelfSigned"}
 *   LDAP-DESC                 "When creating self-signed SSL certs during an install, we also create a local Certificate Authority (CA) to sign these SSL certs. This local CA-s own cert is then added to different applications ""trusted CA-s"" list/store. This attribute should not be used in a system with real certs issued by well known CAs."
 *   ID                        id-at-zimbraCertAuthorityCertSelfSigned }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const zimbraCertAuthorityCertSelfSigned: ATTRIBUTE<IA5String> = {
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
    "&ldapName": ["zimbraCertAuthorityCertSelfSigned"],
    "&ldapDesc": "When creating self-signed SSL certs during an install, we also create a local Certificate Authority (CA) to sign these SSL certs. This local CA-s own cert is then added to different applications \"trusted CA-s\" list/store. This attribute should not be used in a system with real certs issued by well known CAs." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraCertAuthorityCertSelfSigned /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
