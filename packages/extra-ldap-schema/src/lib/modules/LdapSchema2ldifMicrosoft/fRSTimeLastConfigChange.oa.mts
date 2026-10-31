/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { utcTime } from "../SelectedAttributeTypes/utcTime.oa.mjs";
// export { id_at_fRSTimeLastConfigChange } from "../LdapSchema2ldifMicrosoft/id-at-fRSTimeLastConfigChange.va.mjs";


/**
 * @summary fRSTimeLastConfigChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fRSTimeLastConfigChange ATTRIBUTE ::= {
 *   WITH SYNTAX               UTCTime
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               utcTime.&id
 *   LDAP-NAME                 {"fRSTimeLastConfigChange"}
 *   ID                        id-at-fRSTimeLastConfigChange }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const fRSTimeLastConfigChange: ATTRIBUTE = undefined;

/* eslint-enable */
