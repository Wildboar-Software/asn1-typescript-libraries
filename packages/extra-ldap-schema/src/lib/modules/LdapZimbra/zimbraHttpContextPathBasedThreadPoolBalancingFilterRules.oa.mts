/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraHttpContextPathBasedThreadPoolBalancingFilterRules } from "../LdapZimbra/id-at-zimbraHttpContextPathBasedThreadPoolBalancingFilterRules.va.mjs";


/**
 * @summary zimbraHttpContextPathBasedThreadPoolBalancingFilterRules
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraHttpContextPathBasedThreadPoolBalancingFilterRules ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraHttpContextPathBasedThreadPoolBalancingFilterRules"}
 *   LDAP-DESC                 "Rules for governing the allocation of threads to various web contexts for the current thread pool. Sample value: /zimbra:min=10;max=40% or /zimbraAdmin:min=5"
 *   ID                        id-at-zimbraHttpContextPathBasedThreadPoolBalancingFilterRules }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraHttpContextPathBasedThreadPoolBalancingFilterRules: ATTRIBUTE = undefined;

/* eslint-enable */
