/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_nsCalUser } from "../Ldapmigration50nsCalendar/id-oc-nsCalUser.va.mjs";


/**
 * @summary nsCalUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsCalUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { countryName
 *                               | employeeNumber
 *                               | generationQualifier
 *                               | givenName
 *                               | initials
 *                               | mail
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | nsCalAccess
 *                               | nsCalAccessDomain
 *                               | nsCalAdmd
 *                               | nsCalDefaultNoteReminder
 *                               | nsCalDefaultReminder
 *                               | nsCalDefaultTaskReminder
 *                               | nsCalDisplayPrefs
 *                               | nsCalFlags
 *                               | nsCalHost
 *                               | nsCalLanguageId
 *                               | nsCalNodeAlias
 *                               | nsCalNotifMechanism
 *                               | nsCalOperatingPrefs
 *                               | nsCalOrgUnit2
 *                               | nsCalOrgUnit3
 *                               | nsCalOrgUnit4
 *                               | nsCalPasswordRequired
 *                               | nsCalPrmd
 *                               | nsCalRefreshPrefs
 *                               | nsCalServerVersion
 *                               | nsCalSysopCanWritePassword
 *                               | nsCalTimezone
 *                               | nsCalXItemId }
 *   LDAP-NAME                 {"nsCalUser"}
 *   LDAP-DESC                 "iPlanet defined objectclass"
 *   ID                        id-oc-nsCalUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsCalUser: OBJECT_CLASS = undefined;

/* eslint-enable */
