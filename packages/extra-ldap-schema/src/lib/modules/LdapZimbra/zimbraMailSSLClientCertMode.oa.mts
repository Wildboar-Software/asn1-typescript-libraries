/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraMailSSLClientCertMode } from "../LdapZimbra/id-at-zimbraMailSSLClientCertMode.va.mjs";
import {
    type DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";

/**
 * @summary zimbraMailSSLClientCertMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailSSLClientCertMode ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraMailSSLClientCertMode"}
 *   LDAP-DESC                 "enable authentication via X.509 Client Certificate. Disabled: client authentication is disabled. NeedClientAuth: client authentication is required during SSL handshake on the SSL mutual authentication port(see zimbraMailSSLClientCertPort). The SSL handshake will fail if the client does not present a certificate to authenticate. WantClientAuth: client authentication is requested during SSL handshake on the SSL mutual authentication port(see zimbraMailSSLClientCertPort). The SSL handshake will still proceed if the client does not present a certificate to authenticate. In the case when client does not send a certificate, user will be redirected to the usual entry page of the requested webapp, where username/password is prompted."
 *   ID                        id-at-zimbraMailSSLClientCertMode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export
const zimbraMailSSLClientCertMode: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraMailSSLClientCertMode"],
    "&ldapDesc": "enable authentication via X.509 Client Certificate. Disabled: client authentication is disabled. NeedClientAuth: client authentication is required during SSL handshake on the SSL mutual authentication port(see zimbraMailSSLClientCertPort). The SSL handshake will fail if the client does not present a certificate to authenticate. WantClientAuth: client authentication is requested during SSL handshake on the SSL mutual authentication port(see zimbraMailSSLClientCertPort). The SSL handshake will still proceed if the client does not present a certificate to authenticate. In the case when client does not send a certificate, user will be redirected to the usual entry page of the requested webapp, where username/password is prompted." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMailSSLClientCertMode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
