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
import { id_oc_mailDomain } from "../Ldapmigration56imsSchema/id-oc-mailDomain.va.mjs";
// export { id_oc_mailDomain } from "../Ldapmigration56imsSchema/id-oc-mailDomain.va.mjs";


import { mailRoutingHosts } from "../Ldapmigration56imsSchema/mailRoutingHosts.oa.mjs";
import { mailRoutingSmartHost } from "../Ldapmigration56imsSchema/mailRoutingSmartHost.oa.mjs";
import { preferredMailHost } from "../Ldapmigration56imsSchema/preferredMailHost.oa.mjs";
import { preferredMailMessageStore } from "../Ldapmigration56imsSchema/preferredMailMessageStore.oa.mjs";
import { mailAccessProxyReplay } from "../Ldapmigration56imsSchema/mailAccessProxyReplay.oa.mjs";
import { mailDomainAllowedServiceAccess } from "../Ldapmigration56imsSchema/mailDomainAllowedServiceAccess.oa.mjs";
import { mailDomainWelcomeMessage } from "../Ldapmigration56imsSchema/mailDomainWelcomeMessage.oa.mjs";
import { mailDomainDiskQuota } from "../Ldapmigration56imsSchema/mailDomainDiskQuota.oa.mjs";
import { mailDomainMsgQuota } from "../Ldapmigration56imsSchema/mailDomainMsgQuota.oa.mjs";
import { mailClientAttachmentQuota } from "../Ldapmigration56imsSchema/mailClientAttachmentQuota.oa.mjs";
import { mailQuota } from "../LdapDbmail/mailQuota.oa.mjs";
import { mailAccessProxyPreAuth } from "../Ldapmigration56imsSchema/mailAccessProxyPreAuth.oa.mjs";
import { mailDomainStatus } from "../Ldapmigration56imsSchema/mailDomainStatus.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { mailDomainReportAddress } from "../Ldapmigration56imsSchema/mailDomainReportAddress.oa.mjs";
import { mailDomainMsgMaxBlocks } from "../Ldapmigration56imsSchema/mailDomainMsgMaxBlocks.oa.mjs";
import { mailDomainSieveRuleSource } from "../Ldapmigration56imsSchema/mailDomainSieveRuleSource.oa.mjs";
import { mailDomainConversionTag } from "../Ldapmigration56imsSchema/mailDomainConversionTag.oa.mjs";
import { mailDomainCatchAllAddress } from "../Ldapmigration56imsSchema/mailDomainCatchAllAddress.oa.mjs";
import { mailAntiUBEService } from "../Ldapmigration56imsSchema/mailAntiUBEService.oa.mjs";
import { mailFolderDefaultAcl } from "../Ldapmigration56imsSchema/mailFolderDefaultAcl.oa.mjs";
/**
 * @summary mailDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mailRoutingHosts
 *                               | mailRoutingSmartHost
 *                               | preferredMailHost
 *                               | preferredMailMessageStore
 *                               | mailAccessProxyReplay
 *                               | mailDomainAllowedServiceAccess
 *                               | mailDomainWelcomeMessage
 *                               | mailDomainDiskQuota
 *                               | mailDomainMsgQuota
 *                               | mailClientAttachmentQuota
 *                               | mailQuota
 *                               | mailAccessProxyPreAuth
 *                               | mailDomainStatus
 *                               | preferredLanguage
 *                               | mailDomainReportAddress
 *                               | mailDomainMsgMaxBlocks
 *                               | mailDomainSieveRuleSource
 *                               | mailDomainConversionTag
 *                               | mailDomainCatchAllAddress
 *                               | mailAntiUBEService
 *                               | mailFolderDefaultAcl }
 *   LDAP-NAME                 {"mailDomain"}
 *   LDAP-DESC                 "auxiliary class for a messaging server hosted domain"
 *   ID                        id-oc-mailDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailRoutingHosts, mailRoutingSmartHost, preferredMailHost, preferredMailMessageStore, mailAccessProxyReplay, mailDomainAllowedServiceAccess, mailDomainWelcomeMessage, mailDomainDiskQuota, mailDomainMsgQuota, mailClientAttachmentQuota, mailQuota, mailAccessProxyPreAuth, mailDomainStatus, preferredLanguage, mailDomainReportAddress, mailDomainMsgMaxBlocks, mailDomainSieveRuleSource, mailDomainConversionTag, mailDomainCatchAllAddress, mailAntiUBEService, mailFolderDefaultAcl, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for a messaging server hosted domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
