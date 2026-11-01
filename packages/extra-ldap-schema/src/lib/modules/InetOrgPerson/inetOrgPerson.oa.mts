/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
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
