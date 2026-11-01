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
import { id_oc_qldapAdmin } from "../LdapQmailNew/id-oc-qldapAdmin.va.mjs";

import { qlaUidPrefix } from "../QMailSchema/qlaUidPrefix.oa.mjs";
import { qlaQmailUid } from "../QMailSchema/qlaQmailUid.oa.mjs";
import { qlaQmailGid } from "../QMailSchema/qlaQmailGid.oa.mjs";
import { qlaMailQuotaSize } from "../QMailSchema/qlaMailQuotaSize.oa.mjs";
import { qlaMailQuotaCount } from "../QMailSchema/qlaMailQuotaCount.oa.mjs";
import { qlaMailSizeMax } from "../QMailSchema/qlaMailSizeMax.oa.mjs";
import { qladnmanager } from "../QMailSchema/qladnmanager.oa.mjs";
import { qlaDomainList } from "../QMailSchema/qlaDomainList.oa.mjs";
import { qlaMailMStorePrefix } from "../QMailSchema/qlaMailMStorePrefix.oa.mjs";
import { qlaMailHostList } from "../QMailSchema/qlaMailHostList.oa.mjs";
/**
 * @summary qldapAdmin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * qldapAdmin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { qladnmanager
 *                               | qlaDomainList
 *                               | qlaMailMStorePrefix
 *                               | qlaMailHostList }
 *   MAY CONTAIN               { qlaUidPrefix
 *                               | qlaQmailUid
 *                               | qlaQmailGid
 *                               | qlaMailQuotaSize
 *                               | qlaMailQuotaCount
 *                               | qlaMailSizeMax }
 *   LDAP-NAME                 {"qldapAdmin"}
 *   LDAP-DESC                 "QMail-LDAP Subtree Admin"
 *   ID                        id-oc-qldapAdmin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const qldapAdmin: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ qladnmanager, qlaDomainList, qlaMailMStorePrefix, qlaMailHostList, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ qlaUidPrefix, qlaQmailUid, qlaQmailGid, qlaMailQuotaSize, qlaMailQuotaCount, qlaMailSizeMax, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "qldapAdmin" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "QMail-LDAP Subtree Admin" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_qldapAdmin /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
