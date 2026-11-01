/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
import { id_oc_inetOrgPerson } from "../InetOrgPerson/id-oc-inetOrgPerson.va.mjs";

import { audio } from "../LdapSchema2ldifCosine/audio.oa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { carLicense } from "../InetOrgPerson/carLicense.oa.mjs";
import { departmentNumber } from "../InetOrgPerson/departmentNumber.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { employeeNumber } from "../InetOrgPerson/employeeNumber.oa.mjs";
import { employeeType } from "../InetOrgPerson/employeeType.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { homePhone } from "../LdapSchema2ldifCosine/homePhone.oa.mjs";
import { homePostalAddress } from "../LdapSchema2ldifCosine/homePostalAddress.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { manager } from "../LdapSchema2ldifCosine/manager.oa.mjs";
import { mobile } from "../LdapSchema2ldifCosine/mobile.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { pager } from "../LdapSchema2ldifCosine/pager.oa.mjs";
import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { secretary } from "../LdapSchema2ldifCosine/secretary.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
/**
 * @summary inetOrgPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetOrgPerson OBJECT-CLASS ::= {
 *     SUBCLASS OF     {organizationalPerson}
 *     KIND            structural
 *     MAY CONTAIN        {
 *         audio
 *         | businessCategory
 *         | carLicense
 *         | departmentNumber
 *         | displayName
 *         | employeeNumber
 *         | employeeType
 *         | givenName
 *         | homeTelephoneNumber
 *         | homePostalAddress
 *         | initials
 *         -- | jpegPhoto
 *         | labeledURI
 *         | mail
 *         | manager
 *         | mobileTelephoneNumber
 *         | organizationName
 *         | pagerTelephoneNumber
 *         -- | photo
 *         | roomNumber
 *         | secretary
 *         | uid
 *         | userCertificate
 *         | uniqueIdentifier
 *         | preferredLanguage
 *         -- | userSMIMECertificate
 *         -- | userPKCS12
 *     }
 *     LDAP-NAME        {"inetOrgPerson"}
 *     LDAP-DESC        "RFC2798: Internet Organizational Person"
 *     ID                id-oc-inetOrgPerson
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetOrgPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalPerson, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ audio, businessCategory, carLicense, departmentNumber, displayName, employeeNumber, employeeType, givenName, homePhone, homePostalAddress, initials, labeledURI, mail, manager, mobile, organizationName, pager, roomNumber, secretary, uid, userCertificate, uniqueIdentifier, preferredLanguage, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetOrgPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC2798: Internet Organizational Person" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetOrgPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
