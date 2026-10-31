/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
// export { id_at_eduPersonPrimaryOrgUnitDN } from "../Ldappc/id-at-eduPersonPrimaryOrgUnitDN.va.mjs";


/**
 * @summary eduPersonPrimaryOrgUnitDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eduPersonPrimaryOrgUnitDN ATTRIBUTE ::= {
 *   EQUALITY MATCHING RULE    distinguishedNameMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-NAME                 {"eduPersonPrimaryOrgUnitDN"}
 *   LDAP-DESC                 "eduPerson per Internet2 and EDUCAUSE"
 *   ID                        id-at-eduPersonPrimaryOrgUnitDN }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const eduPersonPrimaryOrgUnitDN: ATTRIBUTE = undefined;

/* eslint-enable */
