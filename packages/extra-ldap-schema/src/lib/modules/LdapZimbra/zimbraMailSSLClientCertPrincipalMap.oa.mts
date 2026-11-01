/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraMailSSLClientCertPrincipalMap } from "../LdapZimbra/id-at-zimbraMailSSLClientCertPrincipalMap.va.mjs";


/**
 * @summary zimbraMailSSLClientCertPrincipalMap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailSSLClientCertPrincipalMap ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraMailSSLClientCertPrincipalMap"}
 *   LDAP-DESC                 "Map from a certificate field to a Zimbra account key that can uniquely identify a Zimbra account for client certificate authentication. Value is a comma-separated list of mapping rules, each mapping maps a certificate field to a Zimbra account key. Each is attempted in sequence until a unique account can be resolved. e.g. a value can be: SUBJECTALTNAME_OTHERNAME_UPN=zimbraForeignPrincipal,(uid=%{SUBJECT_CN}) value: comma-separated mapping-rule mapping-rule: {cert-field-to-zimbra-key-map} | {LDAP-filter} cert-field-to-zimbra-key-map: {certificate-field}={Zimbra-account-key} certificate-field: SUBJECT_{an RDN attr, e.g. CN}: a RND in DN of Subject SUBJECT_DN: entire DN of Subject SUBJECTALTNAME_OTHERNAME_UPN: UPN(aka Principal Name) in otherName in subjectAltName extension SUBJECTALTNAME_RFC822NAME: rfc822Name in subjectAltName extension Zimbra-account-key: name: primary name or any of the aliases of an account zimbraId: zimbraId of an account zimbraForeignPrincipal: zimbraForeignPrincipal of an account. The matching value on the zimbraForeignPrincipal must be prefixed with ""cert {supported-certificate-filed}:"" e.g. cert SUBJECTALTNAME_OTHERNAME_UPN:123456@mydomain LDAP-filter: An LDAP filter template with placeholders to be substituted by certificate field values. (objectClass=zimbraAccount) is internally ANDed with the supplied filter. e.g. (|(uid=%{SUBJECT_CN})(mail=%{SUBJECTALTNAME_RFC822NAME})) Note: it is recommended not to use LDAP-filter rule, as it will trigger an LDAP search for each cert auth request. LDAP-filter is disabled by default. To enable it globally, set zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled on global config to TRUE. If LDAP-filter is not enabled, all client certificate authentication will fail on domains configured with LDAP-filter."
 *   ID                        id-at-zimbraMailSSLClientCertPrincipalMap }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const zimbraMailSSLClientCertPrincipalMap: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraMailSSLClientCertPrincipalMap" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Map from a certificate field to a Zimbra account key that can uniquely identify a Zimbra account for client certificate authentication. Value is a comma-separated list of mapping rules, each mapping maps a certificate field to a Zimbra account key. Each is attempted in sequence until a unique account can be resolved. e.g. a value can be: SUBJECTALTNAME_OTHERNAME_UPN=zimbraForeignPrincipal,(uid=%{SUBJECT_CN}) value: comma-separated mapping-rule mapping-rule: {cert-field-to-zimbra-key-map} | {LDAP-filter} cert-field-to-zimbra-key-map: {certificate-field}={Zimbra-account-key} certificate-field: SUBJECT_{an RDN attr, e.g. CN}: a RND in DN of Subject SUBJECT_DN: entire DN of Subject SUBJECTALTNAME_OTHERNAME_UPN: UPN(aka Principal Name) in otherName in subjectAltName extension SUBJECTALTNAME_RFC822NAME: rfc822Name in subjectAltName extension Zimbra-account-key: name: primary name or any of the aliases of an account zimbraId: zimbraId of an account zimbraForeignPrincipal: zimbraForeignPrincipal of an account. The matching value on the zimbraForeignPrincipal must be prefixed with \"cert {supported-certificate-filed}:\" e.g. cert SUBJECTALTNAME_OTHERNAME_UPN:123456@mydomain LDAP-filter: An LDAP filter template with placeholders to be substituted by certificate field values. (objectClass=zimbraAccount) is internally ANDed with the supplied filter. e.g. (|(uid=%{SUBJECT_CN})(mail=%{SUBJECTALTNAME_RFC822NAME})) Note: it is recommended not to use LDAP-filter rule, as it will trigger an LDAP search for each cert auth request. LDAP-filter is disabled by default. To enable it globally, set zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled on global config to TRUE. If LDAP-filter is not enabled, all client certificate authentication will fail on domains configured with LDAP-filter." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMailSSLClientCertPrincipalMap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

