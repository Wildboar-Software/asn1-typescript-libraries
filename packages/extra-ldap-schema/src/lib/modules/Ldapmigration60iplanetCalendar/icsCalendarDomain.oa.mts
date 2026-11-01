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
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_icsCalendarDomain } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarDomain.va.mjs";

import { icsAllowedServiceAccess } from "../Ldapmigration60iplanetCalendar/icsAllowedServiceAccess.oa.mjs";
import { icsAllowRights } from "../Ldapmigration60iplanetCalendar/icsAllowRights.oa.mjs";
import { icsAnonymousAllowWrite } from "../Ldapmigration60iplanetCalendar/icsAnonymousAllowWrite.oa.mjs";
import { icsAnonymousCalendar } from "../Ldapmigration60iplanetCalendar/icsAnonymousCalendar.oa.mjs";
import { icsAnonymousDefaultSet } from "../Ldapmigration60iplanetCalendar/icsAnonymousDefaultSet.oa.mjs";
import { icsAnonymousLogin } from "../Ldapmigration60iplanetCalendar/icsAnonymousLogin.oa.mjs";
import { icsAnonymousSet } from "../Ldapmigration60iplanetCalendar/icsAnonymousSet.oa.mjs";
import { icsDWPBackEndHosts } from "../Ldapmigration60iplanetCalendar/icsDWPBackEndHosts.oa.mjs";
import { icsExtended } from "../Ldapmigration60iplanetCalendar/icsExtended.oa.mjs";
import { icsExtendedDomainPrefs } from "../Ldapmigration60iplanetCalendar/icsExtendedDomainPrefs.oa.mjs";
import { icsDefaultAccess } from "../Ldapmigration60iplanetCalendar/icsDefaultAccess.oa.mjs";
import { icsDomainAllowed } from "../Ldapmigration60iplanetCalendar/icsDomainAllowed.oa.mjs";
import { icsDomainNames } from "../Ldapmigration60iplanetCalendar/icsDomainNames.oa.mjs";
import { icsDomainNotAllowed } from "../Ldapmigration60iplanetCalendar/icsDomainNotAllowed.oa.mjs";
import { icsMandatorySubscribed } from "../Ldapmigration60iplanetCalendar/icsMandatorySubscribed.oa.mjs";
import { icsMandatoryView } from "../Ldapmigration60iplanetCalendar/icsMandatoryView.oa.mjs";
import { icsPreferredHost } from "../Ldapmigration60iplanetCalendar/icsPreferredHost.oa.mjs";
import { icsQuota } from "../Ldapmigration60iplanetCalendar/icsQuota.oa.mjs";
import { icsRecurrenceBound } from "../Ldapmigration60iplanetCalendar/icsRecurrenceBound.oa.mjs";
import { icsRecurrenceDate } from "../Ldapmigration60iplanetCalendar/icsRecurrenceDate.oa.mjs";
import { icsSessionTimeout } from "../Ldapmigration60iplanetCalendar/icsSessionTimeout.oa.mjs";
import { icsSourceHtml } from "../Ldapmigration60iplanetCalendar/icsSourceHtml.oa.mjs";
import { icsStatus } from "../Ldapmigration60iplanetCalendar/icsStatus.oa.mjs";
import { icsTimezone } from "../Ldapmigration60iplanetCalendar/icsTimezone.oa.mjs";
import { davAllowedServices } from "../Ldapmigration60iplanetCalendar/davAllowedServices.oa.mjs";
import { icsDomainAcl } from "../Ldapmigration60iplanetCalendar/icsDomainAcl.oa.mjs";
/**
 * @summary icsCalendarDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsCalendarDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { icsAllowedServiceAccess
 *                               | icsAllowRights
 *                               | icsAnonymousAllowWrite
 *                               | icsAnonymousCalendar
 *                               | icsAnonymousDefaultSet
 *                               | icsAnonymousLogin
 *                               | icsAnonymousSet
 *                               | icsDWPBackEndHosts
 *                               | icsExtended
 *                               | icsExtendedDomainPrefs
 *                               | icsDefaultAccess
 *                               | icsDomainAllowed
 *                               | icsDomainNames
 *                               | icsDomainNotAllowed
 *                               | icsMandatorySubscribed
 *                               | icsMandatoryView
 *                               | icsPreferredHost
 *                               | icsQuota
 *                               | icsRecurrenceBound
 *                               | icsRecurrenceDate
 *                               | icsSessionTimeout
 *                               | icsSourceHtml
 *                               | icsStatus
 *                               | icsTimezone
 *                               | davAllowedServices
 *                               | icsDomainAcl }
 *   LDAP-NAME                 {"icsCalendarDomain"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-icsCalendarDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsCalendarDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ icsAllowedServiceAccess, icsAllowRights, icsAnonymousAllowWrite, icsAnonymousCalendar, icsAnonymousDefaultSet, icsAnonymousLogin, icsAnonymousSet, icsDWPBackEndHosts, icsExtended, icsExtendedDomainPrefs, icsDefaultAccess, icsDomainAllowed, icsDomainNames, icsDomainNotAllowed, icsMandatorySubscribed, icsMandatoryView, icsPreferredHost, icsQuota, icsRecurrenceBound, icsRecurrenceDate, icsSessionTimeout, icsSourceHtml, icsStatus, icsTimezone, davAllowedServices, icsDomainAcl, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "icsCalendarDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsCalendarDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
