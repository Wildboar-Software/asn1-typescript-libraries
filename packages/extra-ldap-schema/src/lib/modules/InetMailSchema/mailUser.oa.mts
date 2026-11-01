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
import { id_oc_mailUser } from "../InetMailSchema/id-oc-mailUser.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mailbox } from "../InetMailSchema/mailbox.oa.mjs";
import { maildest } from "../InetMailSchema/maildest.oa.mjs";
import { mailaccess } from "../InetMailSchema/mailaccess.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { maildrop } from "../InetMailSchema/maildrop.oa.mjs";
/**
 * @summary mailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailUser OBJECT-CLASS ::= {
 *     KIND            auxiliary
 *     MUST CONTAIN    {uid | mail | maildrop}
 *     MAY CONTAIN     {commonName | mailbox | maildest | mailaccess}
 *     LDAP-NAME       {"mailUser"}
 *     LDAP-DESC       "E-Mail User"
 *     ID              id-oc-mailUser
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, mail, maildrop, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, mailbox, maildest, mailaccess, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "E-Mail User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
