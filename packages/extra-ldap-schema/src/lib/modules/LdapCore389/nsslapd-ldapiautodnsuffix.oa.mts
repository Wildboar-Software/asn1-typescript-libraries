/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_nsslapd_ldapiautodnsuffix } from "../LdapCore389/id-at-nsslapd-ldapiautodnsuffix.va.mjs";


/**
 * @summary nsslapd_ldapiautodnsuffix
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsslapd-ldapiautodnsuffix ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"nsslapd-ldapiautodnsuffix"}
 *   LDAP-DESC                 "Netscape defined attribute type"
 *   ID                        id-at-nsslapd-ldapiautodnsuffix }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const nsslapd_ldapiautodnsuffix: ATTRIBUTE = undefined;

/* eslint-enable */
