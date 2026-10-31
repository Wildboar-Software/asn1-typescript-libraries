/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mailDomain } from "../Ldapmigration56imsSchema/id-oc-mailDomain.va.mjs";


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
const mailDomain: OBJECT_CLASS = undefined;

/* eslint-enable */
