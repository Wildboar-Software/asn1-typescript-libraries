/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_inetMailGroup } from "../Ldapmigration56imsSchema/id-oc-inetMailGroup.va.mjs";


/**
 * @summary inetMailGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mgrpErrorsTo
 *                               | mgrpAddHeader
 *                               | mgrpRemoveHeader
 *                               | mgrpModerator
 *                               | mgrpRequestTo
 *                               | mgrpAuthPassword
 *                               | mgrpAllowedDomain
 *                               | mgrpDisallowedDomain
 *                               | mgrpAllowedBroadcaster
 *                               | mgrpDisallowedBroadcaster
 *                               | inetMailGroupStatus
 *                               | mailDeliveryFileURL
 *                               | mailDeliveryOption
 *                               | mailProgramDeliveryInfo
 *                               | mgrpRFC822MailMember
 *                               | mgrpDeliverTo
 *                               | mgrpBroadcasterPolicy
 *                               | mgrpMsgMaxSize
 *                               | mgrpMsgRejectAction
 *                               | mgrpMsgRejectText
 *                               | mgrpNoDuplicateChecks
 *                               | preferredLanguage
 *                               | dataSource
 *                               | mailEquivalentAddress
 *                               | mailMsgMaxBlocks
 *                               | mailConversionTag
 *                               | mailDeferProcessing
 *                               | mgrpMsgPrefixText
 *                               | mgrpMsgSuffixText
 *                               | mailSieveRuleSource
 *                               | groupid
 *                               | mgrpUniqueId
 *                               | commonName
 *                               | mgrpDescription
 *                               | mgrpDelayNotifications
 *                               | mgrpDigestInterval
 *                               | mgrpMaxMessagesPerDay
 *                               | mgrpAdvertised
 *                               | mgrpPublicRoster
 *                               | mgrpSubscribePolicy
 *                               | mgrpUnsubscribePolicy
 *                               | mgrpJettisonBroadcasters
 *                               | mgrpJettisonDomain
 *                               | mgrpTrustNewMembers
 *                               | mail
 *                               | mgrpListTag }
 *   LDAP-NAME                 {"inetMailGroup"}
 *   LDAP-DESC                 "auxiliary class for mailing lists"
 *   ID                        id-oc-inetMailGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
