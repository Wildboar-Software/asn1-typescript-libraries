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
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_icsCalendarUser } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarUser.va.mjs";
// export { id_oc_icsCalendarUser } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarUser.va.mjs";


import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { icsAllowedServiceAccess } from "../Ldapmigration60iplanetCalendar/icsAllowedServiceAccess.oa.mjs";
import { icsCalendar } from "../Ldapmigration60iplanetCalendar/icsCalendar.oa.mjs";
import { icsCalendarOwned } from "../Ldapmigration60iplanetCalendar/icsCalendarOwned.oa.mjs";
import { icsDefaultSet } from "../Ldapmigration60iplanetCalendar/icsDefaultSet.oa.mjs";
import { icsDWPHost } from "../Ldapmigration60iplanetCalendar/icsDWPHost.oa.mjs";
import { icsExtended } from "../Ldapmigration60iplanetCalendar/icsExtended.oa.mjs";
import { icsExtendedUserPrefs } from "../Ldapmigration55imsIcal/icsExtendedUserPrefs.oa.mjs";
import { icsFirstDay } from "../Ldapmigration60iplanetCalendar/icsFirstDay.oa.mjs";
import { icsFreeBusy } from "../Ldapmigration60iplanetCalendar/icsFreeBusy.oa.mjs";
import { icsGeo } from "../Ldapmigration60iplanetCalendar/icsGeo.oa.mjs";
import { icsPartition } from "../Ldapmigration60iplanetCalendar/icsPartition.oa.mjs";
import { icsPreferredHost } from "../Ldapmigration60iplanetCalendar/icsPreferredHost.oa.mjs";
import { icsQuota } from "../Ldapmigration60iplanetCalendar/icsQuota.oa.mjs";
import { icsSet } from "../Ldapmigration60iplanetCalendar/icsSet.oa.mjs";
import { icsStatus } from "../Ldapmigration60iplanetCalendar/icsStatus.oa.mjs";
import { icsSubscribed } from "../Ldapmigration60iplanetCalendar/icsSubscribed.oa.mjs";
import { icsTimezone } from "../Ldapmigration60iplanetCalendar/icsTimezone.oa.mjs";
import { nswcalDisallowAccess } from "../LdapNsWcal/nswcalDisallowAccess.oa.mjs";
import { aclGroupAddr } from "../Ldapmigration56imsSchema/aclGroupAddr.oa.mjs";
/**
 * @summary icsCalendarUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsCalendarUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { commonName
 *                               | givenName
 *                               | mail
 *                               | mailAlternateAddress
 *                               | preferredLanguage
 *                               | surname
 *                               | uid
 *                               | userPassword
 *                               | icsAllowedServiceAccess
 *                               | icsCalendar
 *                               | icsCalendarOwned
 *                               | icsDefaultSet
 *                               | icsDWPHost
 *                               | icsExtended
 *                               | icsExtendedUserPrefs
 *                               | icsFirstDay
 *                               | icsFreeBusy
 *                               | icsGeo
 *                               | icsPartition
 *                               | icsPreferredHost
 *                               | icsQuota
 *                               | icsSet
 *                               | icsStatus
 *                               | icsSubscribed
 *                               | icsTimezone
 *                               | nswcalDisallowAccess
 *                               | aclGroupAddr }
 *   LDAP-NAME                 {"icsCalendarUser"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-icsCalendarUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsCalendarUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, givenName, mail, mailAlternateAddress, preferredLanguage, surname, uid, userPassword, icsAllowedServiceAccess, icsCalendar, icsCalendarOwned, icsDefaultSet, icsDWPHost, icsExtended, icsExtendedUserPrefs, icsFirstDay, icsFreeBusy, icsGeo, icsPartition, icsPreferredHost, icsQuota, icsSet, icsStatus, icsSubscribed, icsTimezone, nswcalDisallowAccess, aclGroupAddr, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "icsCalendarUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsCalendarUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
