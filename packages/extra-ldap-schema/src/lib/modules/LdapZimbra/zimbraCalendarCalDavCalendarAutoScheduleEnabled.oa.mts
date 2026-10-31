/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_zimbraCalendarCalDavCalendarAutoScheduleEnabled } from "../LdapZimbra/id-at-zimbraCalendarCalDavCalendarAutoScheduleEnabled.va.mjs";


/**
 * @summary zimbraCalendarCalDavCalendarAutoScheduleEnabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCalendarCalDavCalendarAutoScheduleEnabled ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraCalendarCalDavCalendarAutoScheduleEnabled"}
 *   LDAP-DESC                 "Enable support for the the ""calendar-auto-schedule"" feature of CalDAV - see RFC6638. If FALSE, the ""calendar-schedule"" feature of CalDAV is advertised instead - see draft-desruisseaux-caldav-sched-03. Note that the value of ""zimbraCalendarCalDavDisableScheduling"" takes precedence over this attribute."
 *   ID                        id-at-zimbraCalendarCalDavCalendarAutoScheduleEnabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraCalendarCalDavCalendarAutoScheduleEnabled: ATTRIBUTE = undefined;

/* eslint-enable */
