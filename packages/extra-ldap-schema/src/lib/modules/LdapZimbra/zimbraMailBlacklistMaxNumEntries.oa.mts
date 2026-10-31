/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraMailBlacklistMaxNumEntries } from "../LdapZimbra/id-at-zimbraMailBlacklistMaxNumEntries.va.mjs";


/**
 * @summary zimbraMailBlacklistMaxNumEntries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailBlacklistMaxNumEntries ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMailBlacklistMaxNumEntries"}
 *   LDAP-DESC                 "Maximum number of entries for per user black list. This restricts the number of values that can be set on the amavisBlacklistSender attribute of an account. If set to 0, the per user white list feature is disabled."
 *   ID                        id-at-zimbraMailBlacklistMaxNumEntries }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraMailBlacklistMaxNumEntries: ATTRIBUTE = undefined;

/* eslint-enable */
