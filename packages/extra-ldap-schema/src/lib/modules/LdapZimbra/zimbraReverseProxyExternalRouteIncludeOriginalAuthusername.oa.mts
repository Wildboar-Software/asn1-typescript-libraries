/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_zimbraReverseProxyExternalRouteIncludeOriginalAuthusername } from "../LdapZimbra/id-at-zimbraReverseProxyExternalRouteIncludeOriginalAuthusername.va.mjs";


/**
 * @summary zimbraReverseProxyExternalRouteIncludeOriginalAuthusername
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyExternalRouteIncludeOriginalAuthusername ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraReverseProxyExternalRouteIncludeOriginalAuthusername"}
 *   LDAP-DESC                 "During migrations Nginx lookup handler rewrites non-qualified username to fully qualified breaking proxy to external legacy mail platform. When zimbraReverseProxyUseExternalRoute is set to TRUE and zimbraReverseProxyExternalRouteIncludeOriginalAuthusername is set to FALSE nginx lookup handler drops the domain name from the userAccount and returns just the username."
 *   ID                        id-at-zimbraReverseProxyExternalRouteIncludeOriginalAuthusername }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraReverseProxyExternalRouteIncludeOriginalAuthusername: ATTRIBUTE = undefined;

/* eslint-enable */
