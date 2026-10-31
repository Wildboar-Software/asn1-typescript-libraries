/* eslint-disable */
import { employeeNumber } from "../InetOrgPerson/employeeNumber.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_nsCalUser } from "../Ldapmigration50nsCalendar/id-oc-nsCalUser.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { generationQualifier } from "../SelectedAttributeTypes/generationQualifier.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { nsCalAccess } from "./nsCalAccess.oa.mjs";
import { nsCalAccessDomain } from "./nsCalAccessDomain.oa.mjs";
import { nsCalAdmd } from "./nsCalAdmd.oa.mjs";
import { nsCalDefaultNoteReminder } from "./nsCalDefaultNoteReminder.oa.mjs";
import { nsCalDefaultReminder } from "./nsCalDefaultReminder.oa.mjs";
import { nsCalDefaultTaskReminder } from "./nsCalDefaultTaskReminder.oa.mjs";
import { nsCalDisplayPrefs } from "./nsCalDisplayPrefs.oa.mjs";
import { nsCalFlags } from "./nsCalFlags.oa.mjs";
import { nsCalHost } from "./nsCalHost.oa.mjs";
import { nsCalLanguageId } from "./nsCalLanguageId.oa.mjs";
import { nsCalNodeAlias } from "./nsCalNodeAlias.oa.mjs";
import { nsCalNotifMechanism } from "./nsCalNotifMechanism.oa.mjs";
import { nsCalOperatingPrefs } from "./nsCalOperatingPrefs.oa.mjs";
import { nsCalOrgUnit2 } from "./nsCalOrgUnit2.oa.mjs";
import { nsCalOrgUnit3 } from "./nsCalOrgUnit3.oa.mjs";
import { nsCalOrgUnit4 } from "./nsCalOrgUnit4.oa.mjs";
import { nsCalPasswordRequired } from "./nsCalPasswordRequired.oa.mjs";
import { nsCalPrmd } from "./nsCalPrmd.oa.mjs";
import { nsCalRefreshPrefs } from "./nsCalRefreshPrefs.oa.mjs";
import { nsCalServerVersion } from "./nsCalServerVersion.oa.mjs";
import { nsCalSysopCanWritePassword } from "./nsCalSysopCanWritePassword.oa.mjs";
import { nsCalTimezone } from "./nsCalTimezone.oa.mjs";
import { nsCalXItemId } from "./nsCalXItemId.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [countryName, employeeNumber, generationQualifier, givenName, initials, mail, organizationName, organizationalUnitName, nsCalAccess, nsCalAccessDomain, nsCalAdmd, nsCalDefaultNoteReminder, nsCalDefaultReminder, nsCalDefaultTaskReminder, nsCalDisplayPrefs, nsCalFlags, nsCalHost, nsCalLanguageId, nsCalNodeAlias, nsCalNotifMechanism, nsCalOperatingPrefs, nsCalOrgUnit2, nsCalOrgUnit3, nsCalOrgUnit4, nsCalPasswordRequired, nsCalPrmd, nsCalRefreshPrefs, nsCalServerVersion, nsCalSysopCanWritePassword, nsCalTimezone, nsCalXItemId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsCalUser"],
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsCalUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
