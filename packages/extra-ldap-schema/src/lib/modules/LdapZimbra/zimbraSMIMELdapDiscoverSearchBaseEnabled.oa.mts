/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraSMIMELdapDiscoverSearchBaseEnabled } from "../LdapZimbra/id-at-zimbraSMIMELdapDiscoverSearchBaseEnabled.va.mjs";


/**
 * @summary zimbraSMIMELdapDiscoverSearchBaseEnabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraSMIMELdapDiscoverSearchBaseEnabled ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraSMIMELdapDiscoverSearchBaseEnabled"}
 *   LDAP-DESC                 "Whether or not to discover search base DNs if zimbraSMIMELdapSearchBase is not set. Allowed values are TRUE or FALSE. If zimbraSMIMELdapSearchBase is set for a config, this attribute is ignored for the config. If not set, default for the config is FALSE. In that case, if zimbraSMIMELdapSearchBase is not set, the search will default to the rootDSE. If multiple DNs are discovered, the ldap search will use them one by one until a hit is returned. All SMIME attributes are in the format of {config-name}:{value}. A 'SMIME config' is a set of SMIME attribute values with the same {config-name}. Multiple SMIME configs can be configured on a domain or on globalconfig. Note: SMIME attributes on domains do not inherited values from globalconfig, they are not domain-inherited attributes. During SMIME public key lookup, if there are any SMIME config on the domain of the account, they are used. SMIME configs on globalconfig will be used only when there is no SMIME config on the domain. SMIME attributes cannot be modified directly with zmprov md/mcf commands. Use zmprov gcsc/gdsc/mcsc/mdsc/rcsc/rdsc command instead."
 *   ID                        id-at-zimbraSMIMELdapDiscoverSearchBaseEnabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraSMIMELdapDiscoverSearchBaseEnabled: ATTRIBUTE = undefined;

/* eslint-enable */
