/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_nsCalResource } from "../Ldapmigration50nsCalendar/id-oc-nsCalResource.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { nsCalAccess } from "./nsCalAccess.oa.mjs";
import { nsCalAccessDomain } from "./nsCalAccessDomain.oa.mjs";
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
import { nsCalPasswordRequired } from "./nsCalPasswordRequired.oa.mjs";
import { nsCalRefreshPrefs } from "./nsCalRefreshPrefs.oa.mjs";
import { nsCalResourceCapacity } from "./nsCalResourceCapacity.oa.mjs";
import { nsCalResourceNumber } from "./nsCalResourceNumber.oa.mjs";
import { nsCalServerVersion } from "./nsCalServerVersion.oa.mjs";
import { nsCalSysopCanWritePassword } from "./nsCalSysopCanWritePassword.oa.mjs";
import { nsCalTimezone } from "./nsCalTimezone.oa.mjs";
import { nsCalXItemId } from "./nsCalXItemId.oa.mjs";

/**
 * @summary nsCalResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsCalResource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { commonName
 *                               | facsimileTelephoneNumber
 *                               | givenName
 *                               | mail
 *                               | postalAddress
 *                               | surname
 *                               | telephoneNumber
 *                               | userPassword
 *                               | nsCalAccess
 *                               | nsCalAccessDomain
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
 *                               | nsCalPasswordRequired
 *                               | nsCalRefreshPrefs
 *                               | nsCalResourceCapacity
 *                               | nsCalResourceNumber
 *                               | nsCalServerVersion
 *                               | nsCalSysopCanWritePassword
 *                               | nsCalTimezone
 *                               | nsCalXItemId }
 *   LDAP-NAME                 {"nsCalResource"}
 *   LDAP-DESC                 "iPlanet defined objectclass"
 *   ID                        id-oc-nsCalResource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsCalResource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, facsimileTelephoneNumber, givenName, mail, postalAddress, surname, telephoneNumber, userPassword, nsCalAccess, nsCalAccessDomain, nsCalDefaultNoteReminder, nsCalDefaultReminder, nsCalDefaultTaskReminder, nsCalDisplayPrefs, nsCalFlags, nsCalHost, nsCalLanguageId, nsCalNodeAlias, nsCalNotifMechanism, nsCalOperatingPrefs, nsCalPasswordRequired, nsCalRefreshPrefs, nsCalResourceCapacity, nsCalResourceNumber, nsCalServerVersion, nsCalSysopCanWritePassword, nsCalTimezone, nsCalXItemId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsCalResource"],
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsCalResource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
