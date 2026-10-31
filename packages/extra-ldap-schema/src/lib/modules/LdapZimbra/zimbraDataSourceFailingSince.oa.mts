/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa.mjs";
// export { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.mjs";
// export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.mjs";
// export { id_at_zimbraDataSourceFailingSince } from "../LdapZimbra/id-at-zimbraDataSourceFailingSince.va.mjs";


/**
 * @summary zimbraDataSourceFailingSince
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDataSourceFailingSince ATTRIBUTE ::= {
 *   WITH SYNTAX               GeneralizedTime
 *   EQUALITY MATCHING RULE    generalizedTimeMatch
 *   ORDERING MATCHING RULE    generalizedTimeOrderingMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               generalizedTime.&id
 *   LDAP-NAME                 {"zimbraDataSourceFailingSince"}
 *   LDAP-DESC                 "Timestamp of the first sync error for a data source. This value is unset after a successful sync."
 *   ID                        id-at-zimbraDataSourceFailingSince }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraDataSourceFailingSince: ATTRIBUTE = undefined;

/* eslint-enable */
