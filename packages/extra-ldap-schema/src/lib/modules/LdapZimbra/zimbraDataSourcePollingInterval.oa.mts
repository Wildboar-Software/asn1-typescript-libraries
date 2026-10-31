/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_zimbraDataSourcePollingInterval } from "../LdapZimbra/id-at-zimbraDataSourcePollingInterval.va.mjs";


/**
 * @summary zimbraDataSourcePollingInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDataSourcePollingInterval ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..32))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraDataSourcePollingInterval"}
 *   LDAP-DESC                 "Prior to 6.0.0: The time interval between automated data imports for a data source, or all data sources owned by an account. If unset or 0, the data source will not be scheduled for automated polling. Since 6.0.0: Deprecated on account/cos since 6.0.0. Values on account/cos are migrated to protocol specific zimbraDataSource{proto}PollingInterval attributes. 1. if zimbraDataSourcePollingInterval is set on data source, use it 2. otherwise use the zimbraDataSource{Proto}PollingInterval on account/cos 3. if zimbraDataSource{Proto}PollingInterval is not set on account/cos, use the attribute's default if one is specified. See individual attribute descriptions for defaults. . Must be in valid duration format: {digits}{time-unit}. digits: 0-9, time-unit: [hmsd]|ms. h - hours, m - minutes, s - seconds, d - days, ms - milliseconds. If time unit is not specified, the default is s(seconds)."
 *   ID                        id-at-zimbraDataSourcePollingInterval }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraDataSourcePollingInterval: ATTRIBUTE = undefined;

/* eslint-enable */
