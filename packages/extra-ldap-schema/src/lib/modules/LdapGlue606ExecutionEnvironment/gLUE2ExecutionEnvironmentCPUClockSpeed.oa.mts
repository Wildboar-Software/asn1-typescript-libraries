/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_gLUE2ExecutionEnvironmentCPUClockSpeed } from "../LdapGlue606ExecutionEnvironment/id-at-gLUE2ExecutionEnvironmentCPUClockSpeed.va.mjs";


/**
 * @summary gLUE2ExecutionEnvironmentCPUClockSpeed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ExecutionEnvironmentCPUClockSpeed ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   ORDERING MATCHING RULE    integerOrderingMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"GLUE2ExecutionEnvironmentCPUClockSpeed"}
 *   LDAP-DESC                 "Nominal clock speed of the physical CPU"
 *   ID                        id-at-gLUE2ExecutionEnvironmentCPUClockSpeed }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const gLUE2ExecutionEnvironmentCPUClockSpeed: ATTRIBUTE = undefined;

/* eslint-enable */
