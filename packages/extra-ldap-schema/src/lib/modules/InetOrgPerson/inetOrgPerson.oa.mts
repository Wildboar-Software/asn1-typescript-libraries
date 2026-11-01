/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
// export { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
import { id_oc_inetOrgPerson } from "../InetOrgPerson/id-oc-inetOrgPerson.va.mjs";
import { audio } from "../Cosine/audio.oa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { carLicense } from "../InetOrgPerson/carLicense.oa.mjs";
import { departmentNumber } from "../InetOrgPerson/departmentNumber.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { employeeNumber } from "../InetOrgPerson/employeeNumber.oa.mjs";
import { employeeType } from "../InetOrgPerson/employeeType.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { homeTelephoneNumber } from "../Cosine/homeTelephoneNumber.oa.mjs";
import { homePostalAddress } from "../Cosine/homePostalAddress.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { mail } from "../Cosine/mail.oa.mjs";
import { manager } from "../Cosine/manager.oa.mjs";
import { mobileTelephoneNumber } from "../Cosine/mobileTelephoneNumber.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { pagerTelephoneNumber } from "../Cosine/pagerTelephoneNumber.oa.mjs";
import { roomNumber } from "../Cosine/roomNumber.oa.mjs";
import { secretary } from "../Cosine/secretary.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
// export { id_oc_inetOrgPerson } from "../InetOrgPerson/id-oc-inetOrgPerson.va.mjs";


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
    "&OptionalAttributes": [ audio, businessCategory, carLicense, departmentNumber, displayName, employeeNumber, employeeType, givenName, homeTelephoneNumber, homePostalAddress, initials, labeledURI, mail, manager, mobileTelephoneNumber, organizationName, pagerTelephoneNumber, roomNumber, secretary, uid, userCertificate, uniqueIdentifier, preferredLanguage, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetOrgPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC2798: Internet Organizational Person" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetOrgPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
