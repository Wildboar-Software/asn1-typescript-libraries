/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraAutoProvMode } from "../LdapZimbra/id-at-zimbraAutoProvMode.va.mjs";


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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraAutoProvMode: ATTRIBUTE = undefined;

/* eslint-enable */
