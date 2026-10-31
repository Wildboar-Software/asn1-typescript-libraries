/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraMailSSLClientCertMode } from "../LdapZimbra/id-at-zimbraMailSSLClientCertMode.va.mjs";


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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraMailSSLClientCertMode: ATTRIBUTE = undefined;

/* eslint-enable */
