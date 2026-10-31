/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraMailTrustedIP } from "../LdapZimbra/id-at-zimbraMailTrustedIP.va.mjs";
import {
    type UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";

/**
 * @summary zimbraMailTrustedIP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailTrustedIP ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraMailTrustedIP"}
 *   LDAP-DESC                 "In our web app, AJAX and standard html client, we have support for adding the HTTP client IP address as X-Originating-IP in an outbound message. We also use the HTTP client IP address in our logging. In the case of standard client making connections to the SOAP layer, the JSP layer tells the SOAP layer in a http header what the remote HTTP client address is. In the case where nginx or some other proxy layer is fronting our webapps, the proxy tells the SOAP/JSP layers in a http header what the real HTTP client s address is. Our SOAP/JSP layers will trust the client/proxy only if the IP address of the client/proxy is one of the IPs listed in this attribute."
 *   ID                        id-at-zimbraMailTrustedIP }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const zimbraMailTrustedIP: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraMailTrustedIP"],
    "&ldapDesc": "In our web app, AJAX and standard html client, we have support for adding the HTTP client IP address as X-Originating-IP in an outbound message. We also use the HTTP client IP address in our logging. In the case of standard client making connections to the SOAP layer, the JSP layer tells the SOAP layer in a http header what the remote HTTP client address is. In the case where nginx or some other proxy layer is fronting our webapps, the proxy tells the SOAP/JSP layers in a http header what the real HTTP client s address is. Our SOAP/JSP layers will trust the client/proxy only if the IP address of the client/proxy is one of the IPs listed in this attribute." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMailTrustedIP /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
