/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection } from "../LdapZimbra/id-at-zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection.va.mjs";


/**
 * @summary zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection"}
 *   LDAP-DESC                 "Deprecated since: 8.0.0. Deprecated per bug 69886.. Orig desc: When set to TRUE, Calendar folders and Todo folders in Zimbra will be advertised as Calendar only and Todo only via CalDAV. When set to FALSE, Calendar folders will be able to store both appointments and tasks, and Todo folders will not be advertised as CalDAV enabled."
 *   ID                        id-at-zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection: ATTRIBUTE = undefined;

/* eslint-enable */
