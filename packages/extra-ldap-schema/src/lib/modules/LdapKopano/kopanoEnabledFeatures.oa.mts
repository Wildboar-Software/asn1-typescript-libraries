/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
// export { id_at_kopanoEnabledFeatures } from "../LdapKopano/id-at-kopanoEnabledFeatures.va.mjs";


/**
 * @summary kopanoEnabledFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopanoEnabledFeatures ATTRIBUTE ::= {
 *   WITH SYNTAX               PrintableString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   LDAP-SYNTAX               printableString.&id
 *   LDAP-NAME                 {"kopanoEnabledFeatures"}
 *   LDAP-DESC                 "KOPANO: This user has these features explicitly enabled"
 *   ID                        id-at-kopanoEnabledFeatures }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const kopanoEnabledFeatures: ATTRIBUTE = undefined;

/* eslint-enable */
