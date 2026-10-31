/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_at_storageQuota } from "../LdapCloudos/id-at-storageQuota.va.mjs";


/**
 * @summary storageQuota
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * storageQuota ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..50))
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"storageQuota"}
 *   LDAP-DESC                 "Storage quota in bytes. Should be larger than mailQuota"
 *   ID                        id-at-storageQuota }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const storageQuota: ATTRIBUTE = undefined;

/* eslint-enable */
