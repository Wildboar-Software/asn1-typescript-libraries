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
import { id_oc_inetMailUser } from "../Ldapmigration56imsSchema/id-oc-inetMailUser.va.mjs";

import { mailAutoReplyTimeout } from "../Ldapmigration56imsSchema/mailAutoReplyTimeout.oa.mjs";
import { mailAutoReplySubject } from "../Ldapmigration56imsSchema/mailAutoReplySubject.oa.mjs";
import { mailAutoReplyText } from "../Ldapmigration50nsMail/mailAutoReplyText.oa.mjs";
import { mailAutoReplyTextInternal } from "../Ldapmigration56imsSchema/mailAutoReplyTextInternal.oa.mjs";
import { mailAutoReplyMode } from "../Ldapmigration50nsMail/mailAutoReplyMode.oa.mjs";
import { mailDeliveryOption } from "../Ldapmigration50nsMail/mailDeliveryOption.oa.mjs";
import { mailForwardingAddress } from "../QMailSchema/mailForwardingAddress.oa.mjs";
import { mailMessageStore } from "../QMailSchema/mailMessageStore.oa.mjs";
import { mailProgramDeliveryInfo } from "../Ldapmigration50nsMail/mailProgramDeliveryInfo.oa.mjs";
import { mailQuota } from "../LdapDbmail/mailQuota.oa.mjs";
import { mailMsgQuota } from "../Ldapmigration56imsSchema/mailMsgQuota.oa.mjs";
import { mailSieveRuleSource } from "../LdapSchema2ldifPostfixBook/mailSieveRuleSource.oa.mjs";
import { mailSMTPSubmitChannel } from "../Ldapmigration56imsSchema/mailSMTPSubmitChannel.oa.mjs";
import { nswmExtendedUserPrefs } from "../Ldapmigration50nsMail/nswmExtendedUserPrefs.oa.mjs";
import { mailAllowedServiceAccess } from "../Ldapmigration56imsSchema/mailAllowedServiceAccess.oa.mjs";
import { mailUserStatus } from "../Ldapmigration56imsSchema/mailUserStatus.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { dataSource } from "../Ldapmigration56imsSchema/dataSource.oa.mjs";
import { mailEquivalentAddress } from "../Ldapmigration56imsSchema/mailEquivalentAddress.oa.mjs";
import { mailMsgMaxBlocks } from "../Ldapmigration56imsSchema/mailMsgMaxBlocks.oa.mjs";
import { mailConversionTag } from "../Ldapmigration56imsSchema/mailConversionTag.oa.mjs";
import { mailDeferProcessing } from "../Ldapmigration56imsSchema/mailDeferProcessing.oa.mjs";
import { mailAntiUBEService } from "../Ldapmigration56imsSchema/mailAntiUBEService.oa.mjs";
import { mailFolderDefaultAcl } from "../Ldapmigration56imsSchema/mailFolderDefaultAcl.oa.mjs";
import { aclGroupAddr } from "../Ldapmigration56imsSchema/aclGroupAddr.oa.mjs";
import { mailParentalControl } from "../Ldapmigration56imsSchema/mailParentalControl.oa.mjs";
import { mailSieveRuleRef } from "../Ldapmigration56imsSchema/mailSieveRuleRef.oa.mjs";
import { mailEventNotificationDestination } from "../Ldapmigration56imsSchema/mailEventNotificationDestination.oa.mjs";
/**
 * @summary inetMailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mailAutoReplyTimeout
 *                               | mailAutoReplySubject
 *                               | mailAutoReplyText
 *                               | mailAutoReplyTextInternal
 *                               | mailAutoReplyMode
 *                               | mailDeliveryOption
 *                               | mailForwardingAddress
 *                               | mailMessageStore
 *                               | mailProgramDeliveryInfo
 *                               | mailQuota
 *                               | mailMsgQuota
 *                               | mailSieveRuleSource
 *                               | mailSMTPSubmitChannel
 *                               | nswmExtendedUserPrefs
 *                               | mailAllowedServiceAccess
 *                               | mailUserStatus
 *                               | commonName
 *                               | dataSource
 *                               | mailEquivalentAddress
 *                               | mailMsgMaxBlocks
 *                               | mailConversionTag
 *                               | mailDeferProcessing
 *                               | mailAntiUBEService
 *                               | mailFolderDefaultAcl
 *                               | aclGroupAddr
 *                               | mailParentalControl
 *                               | mailSieveRuleRef
 *                               | mailEventNotificationDestination }
 *   LDAP-NAME                 {"inetMailUser"}
 *   LDAP-DESC                 "auxiliary class for a messaging server user"
 *   ID                        id-oc-inetMailUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailAutoReplyTimeout, mailAutoReplySubject, mailAutoReplyText, mailAutoReplyTextInternal, mailAutoReplyMode, mailDeliveryOption, mailForwardingAddress, mailMessageStore, mailProgramDeliveryInfo, mailQuota, mailMsgQuota, mailSieveRuleSource, mailSMTPSubmitChannel, nswmExtendedUserPrefs, mailAllowedServiceAccess, mailUserStatus, commonName, dataSource, mailEquivalentAddress, mailMsgMaxBlocks, mailConversionTag, mailDeferProcessing, mailAntiUBEService, mailFolderDefaultAcl, aclGroupAddr, mailParentalControl, mailSieveRuleRef, mailEventNotificationDestination, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetMailUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for a messaging server user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
