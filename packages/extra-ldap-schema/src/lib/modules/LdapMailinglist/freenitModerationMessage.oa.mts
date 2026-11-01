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
    NULL,
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
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { id_oc_freenitModerationMessage } from "../LdapMailinglist/id-oc-freenitModerationMessage.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mlidNumber } from "../LdapMailinglist/mlidNumber.oa.mjs";
import { createdAt } from "../LdapMailinglist/createdAt.oa.mjs";
import { mailinglistMessageId } from "../LdapMailinglist/mailinglistMessageId.oa.mjs";
import { mailinglistSubject } from "../LdapMailinglist/mailinglistSubject.oa.mjs";
import { mailinglistSender } from "../LdapMailinglist/mailinglistSender.oa.mjs";
import { sentAt } from "../LdapMailinglist/sentAt.oa.mjs";
import { textBody } from "../LdapMailinglist/textBody.oa.mjs";
import { htmlBody } from "../LdapMailinglist/htmlBody.oa.mjs";
import { mailinglistStatus } from "../LdapMailinglist/mailinglistStatus.oa.mjs";
import { decidedAt } from "../LdapMailinglist/decidedAt.oa.mjs";
// export { id_oc_freenitModerationMessage } from "../LdapMailinglist/id-oc-freenitModerationMessage.va.mjs";


/**
 * @summary freenitModerationMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * freenitModerationMessage OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | mlidNumber
 *                               | createdAt }
 *   MAY CONTAIN               { mailinglistMessageId
 *                               | mailinglistSubject
 *                               | mailinglistSender
 *                               | sentAt
 *                               | textBody
 *                               | htmlBody
 *                               | mailinglistStatus
 *                               | decidedAt }
 *   LDAP-NAME                 {"freenitModerationMessage"}
 *   LDAP-DESC                 "Freenit moderation message entry"
 *   ID                        id-oc-freenitModerationMessage }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const freenitModerationMessage: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, mlidNumber, createdAt, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailinglistMessageId, mailinglistSubject, mailinglistSender, sentAt, textBody, htmlBody, mailinglistStatus, decidedAt, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "freenitModerationMessage" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Freenit moderation message entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_freenitModerationMessage /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
