/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraTableMaintenanceGrowthFactor } from "../LdapZimbra/id-at-zimbraTableMaintenanceGrowthFactor.va.mjs";


/**
 * @summary zimbraTableMaintenanceGrowthFactor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraTableMaintenanceGrowthFactor ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraTableMaintenanceGrowthFactor"}
 *   LDAP-DESC                 "Deprecated since: 4.5.7. We now maintain all tables unconditionally. See bug 19145. Orig desc: table maintenance will be performed if the number of rows grows by this factor"
 *   ID                        id-at-zimbraTableMaintenanceGrowthFactor }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraTableMaintenanceGrowthFactor: ATTRIBUTE = undefined;

/* eslint-enable */
