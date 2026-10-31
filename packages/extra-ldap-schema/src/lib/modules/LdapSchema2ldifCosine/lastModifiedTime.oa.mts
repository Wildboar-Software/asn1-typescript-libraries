/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { utcTime } from "../SelectedAttributeTypes/utcTime.oa.mjs";
// export { id_at_lastModifiedTime } from "../LdapSchema2ldifCosine/id-at-lastModifiedTime.va.mjs";


/**
 * @summary lastModifiedTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lastModifiedTime ATTRIBUTE ::= {
 *   WITH SYNTAX               UTCTime
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               utcTime.&id
 *   LDAP-NAME                 {"lastModifiedTime"}
 *   LDAP-DESC                 "RFC1274: time of last modify, replaced by modifyTimestamp"
 *   OBSOLETE                  TRUE
 *   ID                        id-at-lastModifiedTime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const lastModifiedTime: ATTRIBUTE = undefined;

/* eslint-enable */
