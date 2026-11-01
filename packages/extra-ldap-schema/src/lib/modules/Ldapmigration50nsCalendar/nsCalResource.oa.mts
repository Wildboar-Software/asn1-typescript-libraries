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
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_nsCalResource } from "../Ldapmigration50nsCalendar/id-oc-nsCalResource.va.mjs";
// export { id_oc_nsCalResource } from "../Ldapmigration50nsCalendar/id-oc-nsCalResource.va.mjs";


import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { nsCalAccess } from "../Ldapmigration50nsCalendar/nsCalAccess.oa.mjs";
import { nsCalAccessDomain } from "../Ldapmigration50nsCalendar/nsCalAccessDomain.oa.mjs";
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
import { nsCalPasswordRequired } from "../Ldapmigration50nsCalendar/nsCalPasswordRequired.oa.mjs";
import { nsCalRefreshPrefs } from "../Ldapmigration50nsCalendar/nsCalRefreshPrefs.oa.mjs";
import { nsCalResourceCapacity } from "../Ldapmigration50nsCalendar/nsCalResourceCapacity.oa.mjs";
import { nsCalResourceNumber } from "../Ldapmigration50nsCalendar/nsCalResourceNumber.oa.mjs";
import { nsCalServerVersion } from "../Ldapmigration50nsCalendar/nsCalServerVersion.oa.mjs";
import { nsCalSysopCanWritePassword } from "../Ldapmigration50nsCalendar/nsCalSysopCanWritePassword.oa.mjs";
import { nsCalTimezone } from "../Ldapmigration50nsCalendar/nsCalTimezone.oa.mjs";
import { nsCalXItemId } from "../Ldapmigration50nsCalendar/nsCalXItemId.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, facsimileTelephoneNumber, givenName, mail, postalAddress, surname, telephoneNumber, userPassword, nsCalAccess, nsCalAccessDomain, nsCalDefaultNoteReminder, nsCalDefaultReminder, nsCalDefaultTaskReminder, nsCalDisplayPrefs, nsCalFlags, nsCalHost, nsCalLanguageId, nsCalNodeAlias, nsCalNotifMechanism, nsCalOperatingPrefs, nsCalPasswordRequired, nsCalRefreshPrefs, nsCalResourceCapacity, nsCalResourceNumber, nsCalServerVersion, nsCalSysopCanWritePassword, nsCalTimezone, nsCalXItemId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsCalResource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsCalResource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
