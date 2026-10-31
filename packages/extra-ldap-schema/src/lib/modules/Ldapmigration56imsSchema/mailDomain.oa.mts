/* eslint-disable */
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mailQuota } from "../LdapDbmail/mailQuota.oa.mjs";
import { id_oc_mailDomain } from "../Ldapmigration56imsSchema/id-oc-mailDomain.va.mjs";
import { mailAccessProxyPreAuth } from "./mailAccessProxyPreAuth.oa.mjs";
import { mailAccessProxyReplay } from "./mailAccessProxyReplay.oa.mjs";
import { mailAntiUBEService } from "./mailAntiUBEService.oa.mjs";
import { mailClientAttachmentQuota } from "./mailClientAttachmentQuota.oa.mjs";
import { mailDomainAllowedServiceAccess } from "./mailDomainAllowedServiceAccess.oa.mjs";
import { mailDomainCatchAllAddress } from "./mailDomainCatchAllAddress.oa.mjs";
import { mailDomainConversionTag } from "./mailDomainConversionTag.oa.mjs";
import { mailDomainDiskQuota } from "./mailDomainDiskQuota.oa.mjs";
import { mailDomainMsgMaxBlocks } from "./mailDomainMsgMaxBlocks.oa.mjs";
import { mailDomainMsgQuota } from "./mailDomainMsgQuota.oa.mjs";
import { mailDomainReportAddress } from "./mailDomainReportAddress.oa.mjs";
import { mailDomainSieveRuleSource } from "./mailDomainSieveRuleSource.oa.mjs";
import { mailDomainStatus } from "./mailDomainStatus.oa.mjs";
import { mailDomainWelcomeMessage } from "./mailDomainWelcomeMessage.oa.mjs";
import { mailFolderDefaultAcl } from "./mailFolderDefaultAcl.oa.mjs";
import { mailRoutingHosts } from "./mailRoutingHosts.oa.mjs";
import { mailRoutingSmartHost } from "./mailRoutingSmartHost.oa.mjs";
import { preferredMailHost } from "./preferredMailHost.oa.mjs";
import { preferredMailMessageStore } from "./preferredMailMessageStore.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mailRoutingHosts, mailRoutingSmartHost, preferredMailHost, preferredMailMessageStore, mailAccessProxyReplay, mailDomainAllowedServiceAccess, mailDomainWelcomeMessage, mailDomainDiskQuota, mailDomainMsgQuota, mailClientAttachmentQuota, mailQuota, mailAccessProxyPreAuth, mailDomainStatus, preferredLanguage, mailDomainReportAddress, mailDomainMsgMaxBlocks, mailDomainSieveRuleSource, mailDomainConversionTag, mailDomainCatchAllAddress, mailAntiUBEService, mailFolderDefaultAcl] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mailDomain"],
    "&ldapDesc": "auxiliary class for a messaging server hosted domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
