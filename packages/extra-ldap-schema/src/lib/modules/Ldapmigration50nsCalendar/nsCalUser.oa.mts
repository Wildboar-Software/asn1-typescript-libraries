/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_nsCalUser } from "../Ldapmigration50nsCalendar/id-oc-nsCalUser.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { employeeNumber } from "../InetOrgPerson/employeeNumber.oa.mjs";
import { generationQualifier } from "../SelectedAttributeTypes/generationQualifier.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { nsCalAccess } from "../Ldapmigration50nsCalendar/nsCalAccess.oa.mjs";
import { nsCalAccessDomain } from "../Ldapmigration50nsCalendar/nsCalAccessDomain.oa.mjs";
import { nsCalAdmd } from "../Ldapmigration50nsCalendar/nsCalAdmd.oa.mjs";
import { nsCalDefaultNoteReminder } from "../Ldapmigration50nsCalendar/nsCalDefaultNoteReminder.oa.mjs";
import { nsCalDefaultReminder } from "../Ldapmigration50nsCalendar/nsCalDefaultReminder.oa.mjs";
import { nsCalDefaultTaskReminder } from "../Ldapmigration50nsCalendar/nsCalDefaultTaskReminder.oa.mjs";
import { nsCalDisplayPrefs } from "../Ldapmigration50nsCalendar/nsCalDisplayPrefs.oa.mjs";
import { nsCalFlags } from "../Ldapmigration50nsCalendar/nsCalFlags.oa.mjs";
import { nsCalHost } from "../Ldapmigration50nsCalendar/nsCalHost.oa.mjs";
import { nsCalLanguageId } from "../Ldapmigration50nsCalendar/nsCalLanguageId.oa.mjs";
import { nsCalNodeAlias } from "../Ldapmigration50nsCalendar/nsCalNodeAlias.oa.mjs";
import { nsCalNotifMechanism } from "../Ldapmigration50nsCalendar/nsCalNotifMechanism.oa.mjs";
import { nsCalOperatingPrefs } from "../Ldapmigration50nsCalendar/nsCalOperatingPrefs.oa.mjs";
import { nsCalOrgUnit2 } from "../Ldapmigration50nsCalendar/nsCalOrgUnit2.oa.mjs";
import { nsCalOrgUnit3 } from "../Ldapmigration50nsCalendar/nsCalOrgUnit3.oa.mjs";
import { nsCalOrgUnit4 } from "../Ldapmigration50nsCalendar/nsCalOrgUnit4.oa.mjs";
import { nsCalPasswordRequired } from "../Ldapmigration50nsCalendar/nsCalPasswordRequired.oa.mjs";
import { nsCalPrmd } from "../Ldapmigration50nsCalendar/nsCalPrmd.oa.mjs";
import { nsCalRefreshPrefs } from "../Ldapmigration50nsCalendar/nsCalRefreshPrefs.oa.mjs";
import { nsCalServerVersion } from "../Ldapmigration50nsCalendar/nsCalServerVersion.oa.mjs";
import { nsCalSysopCanWritePassword } from "../Ldapmigration50nsCalendar/nsCalSysopCanWritePassword.oa.mjs";
import { nsCalTimezone } from "../Ldapmigration50nsCalendar/nsCalTimezone.oa.mjs";
import { nsCalXItemId } from "../Ldapmigration50nsCalendar/nsCalXItemId.oa.mjs";
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
const nsCalUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ countryName, employeeNumber, generationQualifier, givenName, initials, mail, organizationName, organizationalUnitName, nsCalAccess, nsCalAccessDomain, nsCalAdmd, nsCalDefaultNoteReminder, nsCalDefaultReminder, nsCalDefaultTaskReminder, nsCalDisplayPrefs, nsCalFlags, nsCalHost, nsCalLanguageId, nsCalNodeAlias, nsCalNotifMechanism, nsCalOperatingPrefs, nsCalOrgUnit2, nsCalOrgUnit3, nsCalOrgUnit4, nsCalPasswordRequired, nsCalPrmd, nsCalRefreshPrefs, nsCalServerVersion, nsCalSysopCanWritePassword, nsCalTimezone, nsCalXItemId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsCalUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsCalUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
