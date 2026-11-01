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
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goFonQueue } from "../LdapGosaCoreGofon/id-oc-goFonQueue.va.mjs";
// export { id_oc_goFonQueue } from "../LdapGosaCoreGofon/id-oc-goFonQueue.va.mjs";


import { goFonTimeOut } from "../LdapGosaCoreGofon/goFonTimeOut.oa.mjs";
import { goFonMaxLen } from "../LdapGosaCoreGofon/goFonMaxLen.oa.mjs";
import { goFonAnnounceFrequency } from "../LdapGosaCoreGofon/goFonAnnounceFrequency.oa.mjs";
import { goFonDialOption } from "../LdapGosaCoreGofon/goFonDialOption.oa.mjs";
import { goFonMusiconHold } from "../LdapGosaCoreGofon/goFonMusiconHold.oa.mjs";
import { goFonWelcomeMusic } from "../LdapGosaCoreGofon/goFonWelcomeMusic.oa.mjs";
import { goFonQueueReportHold } from "../LdapGosaCoreGofon/goFonQueueReportHold.oa.mjs";
import { goFonQueueYouAreNext } from "../LdapGosaCoreGofon/goFonQueueYouAreNext.oa.mjs";
import { goFonQueueThereAre } from "../LdapGosaCoreGofon/goFonQueueThereAre.oa.mjs";
import { goFonQueueCallsWaiting } from "../LdapGosaCoreGofon/goFonQueueCallsWaiting.oa.mjs";
import { goFonQueueThankYou } from "../LdapGosaCoreGofon/goFonQueueThankYou.oa.mjs";
import { goFonQueueMinutes } from "../LdapGosaCoreGofon/goFonQueueMinutes.oa.mjs";
import { goFonQueueSeconds } from "../LdapGosaCoreGofon/goFonQueueSeconds.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { goFonQueueLanguage } from "../LdapGosaCoreGofon/goFonQueueLanguage.oa.mjs";
import { goFonQueueStrategy } from "../LdapGosaCoreGofon/goFonQueueStrategy.oa.mjs";
import { goFonQueueAnnounceHoldtime } from "../LdapGosaCoreGofon/goFonQueueAnnounceHoldtime.oa.mjs";
import { goFonQueueAnnounce } from "../LdapGosaCoreGofon/goFonQueueAnnounce.oa.mjs";
import { goFonQueueRetry } from "../LdapGosaCoreGofon/goFonQueueRetry.oa.mjs";
import { goFonQueueLessThan } from "../LdapGosaCoreGofon/goFonQueueLessThan.oa.mjs";
import { goFonHomeServer } from "../LdapGosaCoreGofon/goFonHomeServer.oa.mjs";
/**
 * @summary goFonQueue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonQueue OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goFonTimeOut
 *                               | goFonMaxLen
 *                               | goFonAnnounceFrequency
 *                               | goFonDialOption
 *                               | goFonMusiconHold
 *                               | goFonWelcomeMusic
 *                               | goFonQueueReportHold
 *                               | goFonQueueYouAreNext
 *                               | goFonQueueThereAre
 *                               | goFonQueueCallsWaiting
 *                               | goFonQueueThankYou
 *                               | goFonQueueMinutes
 *                               | goFonQueueSeconds
 *                               | telephoneNumber
 *                               | goFonQueueLanguage
 *                               | goFonQueueStrategy
 *                               | goFonQueueAnnounceHoldtime
 *                               | goFonQueueAnnounce
 *                               | goFonQueueRetry
 *                               | goFonQueueLessThan
 *                               | goFonHomeServer }
 *   LDAP-NAME                 {"goFonQueue"}
 *   LDAP-DESC                 "Queue definitions for asterisk machines (v2.7)"
 *   ID                        id-oc-goFonQueue }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonQueue: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ goFonTimeOut, goFonMaxLen, goFonAnnounceFrequency, goFonDialOption, goFonMusiconHold, goFonWelcomeMusic, goFonQueueReportHold, goFonQueueYouAreNext, goFonQueueThereAre, goFonQueueCallsWaiting, goFonQueueThankYou, goFonQueueMinutes, goFonQueueSeconds, telephoneNumber, goFonQueueLanguage, goFonQueueStrategy, goFonQueueAnnounceHoldtime, goFonQueueAnnounce, goFonQueueRetry, goFonQueueLessThan, goFonHomeServer, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goFonQueue" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Queue definitions for asterisk machines (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonQueue /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
