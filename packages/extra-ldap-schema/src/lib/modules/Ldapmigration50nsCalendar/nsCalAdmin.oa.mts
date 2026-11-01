/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_nsCalAdmin } from "../Ldapmigration50nsCalendar/id-oc-nsCalAdmin.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { generationQualifier } from "../SelectedAttributeTypes/generationQualifier.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { nsCalAccess } from "../Ldapmigration50nsCalendar/nsCalAccess.oa.mjs";
import { nsCalAccessDomain } from "../Ldapmigration50nsCalendar/nsCalAccessDomain.oa.mjs";
import { nsCalAdmd } from "../Ldapmigration50nsCalendar/nsCalAdmd.oa.mjs";
import { nsCalFlags } from "../Ldapmigration50nsCalendar/nsCalFlags.oa.mjs";
import { nsCalHost } from "../Ldapmigration50nsCalendar/nsCalHost.oa.mjs";
import { nsCalLanguageId } from "../Ldapmigration50nsCalendar/nsCalLanguageId.oa.mjs";
import { nsCalNodeAlias } from "../Ldapmigration50nsCalendar/nsCalNodeAlias.oa.mjs";
import { nsCalOrgUnit2 } from "../Ldapmigration50nsCalendar/nsCalOrgUnit2.oa.mjs";
import { nsCalOrgUnit3 } from "../Ldapmigration50nsCalendar/nsCalOrgUnit3.oa.mjs";
import { nsCalOrgUnit4 } from "../Ldapmigration50nsCalendar/nsCalOrgUnit4.oa.mjs";
import { nsCalPasswordRequired } from "../Ldapmigration50nsCalendar/nsCalPasswordRequired.oa.mjs";
import { nsCalPrmd } from "../Ldapmigration50nsCalendar/nsCalPrmd.oa.mjs";
import { nsCalServerVersion } from "../Ldapmigration50nsCalendar/nsCalServerVersion.oa.mjs";
import { nsCalSysopCanWritePassword } from "../Ldapmigration50nsCalendar/nsCalSysopCanWritePassword.oa.mjs";
import { nsCalXItemId } from "../Ldapmigration50nsCalendar/nsCalXItemId.oa.mjs";


/**
 * @summary nsCalAdmin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsCalAdmin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { countryName
 *                               | commonName
 *                               | facsimileTelephoneNumber
 *                               | generationQualifier
 *                               | givenName
 *                               | initials
 *                               | mail
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | postalAddress
 *                               | surname
 *                               | telephoneNumber
 *                               | userPassword
 *                               | nsCalAccess
 *                               | nsCalAccessDomain
 *                               | nsCalAdmd
 *                               | nsCalFlags
 *                               | nsCalHost
 *                               | nsCalLanguageId
 *                               | nsCalNodeAlias
 *                               | nsCalOrgUnit2
 *                               | nsCalOrgUnit3
 *                               | nsCalOrgUnit4
 *                               | nsCalPasswordRequired
 *                               | nsCalPrmd
 *                               | nsCalServerVersion
 *                               | nsCalSysopCanWritePassword
 *                               | nsCalXItemId }
 *   LDAP-NAME                 {"nsCalAdmin"}
 *   LDAP-DESC                 "iPlanet defined objectclass"
 *   ID                        id-oc-nsCalAdmin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsCalAdmin: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ countryName, commonName, facsimileTelephoneNumber, generationQualifier, givenName, initials, mail, organizationName, organizationalUnitName, postalAddress, surname, telephoneNumber, userPassword, nsCalAccess, nsCalAccessDomain, nsCalAdmd, nsCalFlags, nsCalHost, nsCalLanguageId, nsCalNodeAlias, nsCalOrgUnit2, nsCalOrgUnit3, nsCalOrgUnit4, nsCalPasswordRequired, nsCalPrmd, nsCalServerVersion, nsCalSysopCanWritePassword, nsCalXItemId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsCalAdmin" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsCalAdmin /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

