/* eslint-disable */
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mailSieveRuleSource } from "../LdapSchema2ldifPostfixBook/mailSieveRuleSource.oa.mjs";
import { mgrpRFC822MailMember } from "../LdapSolaris/mgrpRFC822MailMember.oa.mjs";
import { mailDeliveryOption } from "../Ldapmigration50nsMail/mailDeliveryOption.oa.mjs";
import { mailProgramDeliveryInfo } from "../Ldapmigration50nsMail/mailProgramDeliveryInfo.oa.mjs";
import { mgrpAddHeader } from "../Ldapmigration50nsMail/mgrpAddHeader.oa.mjs";
import { mgrpAllowedBroadcaster } from "../Ldapmigration50nsMail/mgrpAllowedBroadcaster.oa.mjs";
import { mgrpAllowedDomain } from "../Ldapmigration50nsMail/mgrpAllowedDomain.oa.mjs";
import { mgrpBroadcasterPolicy } from "../Ldapmigration50nsMail/mgrpBroadcasterPolicy.oa.mjs";
import { mgrpDeliverTo } from "../Ldapmigration50nsMail/mgrpDeliverTo.oa.mjs";
import { mgrpErrorsTo } from "../Ldapmigration50nsMail/mgrpErrorsTo.oa.mjs";
import { mgrpModerator } from "../Ldapmigration50nsMail/mgrpModerator.oa.mjs";
import { mgrpMsgMaxSize } from "../Ldapmigration50nsMail/mgrpMsgMaxSize.oa.mjs";
import { mgrpMsgRejectAction } from "../Ldapmigration50nsMail/mgrpMsgRejectAction.oa.mjs";
import { mgrpMsgRejectText } from "../Ldapmigration50nsMail/mgrpMsgRejectText.oa.mjs";
import { mgrpNoDuplicateChecks } from "../Ldapmigration50nsMail/mgrpNoDuplicateChecks.oa.mjs";
import { mgrpRemoveHeader } from "../Ldapmigration50nsMail/mgrpRemoveHeader.oa.mjs";
import { id_oc_inetMailGroup } from "../Ldapmigration56imsSchema/id-oc-inetMailGroup.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { dataSource } from "./dataSource.oa.mjs";
import { groupid } from "./groupid.oa.mjs";
import { inetMailGroupStatus } from "./inetMailGroupStatus.oa.mjs";
import { mailConversionTag } from "./mailConversionTag.oa.mjs";
import { mailDeferProcessing } from "./mailDeferProcessing.oa.mjs";
import { mailDeliveryFileURL } from "./mailDeliveryFileURL.oa.mjs";
import { mailEquivalentAddress } from "./mailEquivalentAddress.oa.mjs";
import { mailMsgMaxBlocks } from "./mailMsgMaxBlocks.oa.mjs";
import { mgrpAdvertised } from "./mgrpAdvertised.oa.mjs";
import { mgrpAuthPassword } from "./mgrpAuthPassword.oa.mjs";
import { mgrpDelayNotifications } from "./mgrpDelayNotifications.oa.mjs";
import { mgrpDescription } from "./mgrpDescription.oa.mjs";
import { mgrpDigestInterval } from "./mgrpDigestInterval.oa.mjs";
import { mgrpDisallowedBroadcaster } from "./mgrpDisallowedBroadcaster.oa.mjs";
import { mgrpDisallowedDomain } from "./mgrpDisallowedDomain.oa.mjs";
import { mgrpJettisonBroadcasters } from "./mgrpJettisonBroadcasters.oa.mjs";
import { mgrpJettisonDomain } from "./mgrpJettisonDomain.oa.mjs";
import { mgrpListTag } from "./mgrpListTag.oa.mjs";
import { mgrpMaxMessagesPerDay } from "./mgrpMaxMessagesPerDay.oa.mjs";
import { mgrpMsgPrefixText } from "./mgrpMsgPrefixText.oa.mjs";
import { mgrpMsgSuffixText } from "./mgrpMsgSuffixText.oa.mjs";
import { mgrpPublicRoster } from "./mgrpPublicRoster.oa.mjs";
import { mgrpRequestTo } from "./mgrpRequestTo.oa.mjs";
import { mgrpSubscribePolicy } from "./mgrpSubscribePolicy.oa.mjs";
import { mgrpTrustNewMembers } from "./mgrpTrustNewMembers.oa.mjs";
import { mgrpUniqueId } from "./mgrpUniqueId.oa.mjs";
import { mgrpUnsubscribePolicy } from "./mgrpUnsubscribePolicy.oa.mjs";

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
const inetMailGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mgrpErrorsTo, mgrpAddHeader, mgrpRemoveHeader, mgrpModerator, mgrpRequestTo, mgrpAuthPassword, mgrpAllowedDomain, mgrpDisallowedDomain, mgrpAllowedBroadcaster, mgrpDisallowedBroadcaster, inetMailGroupStatus, mailDeliveryFileURL, mailDeliveryOption, mailProgramDeliveryInfo, mgrpRFC822MailMember, mgrpDeliverTo, mgrpBroadcasterPolicy, mgrpMsgMaxSize, mgrpMsgRejectAction, mgrpMsgRejectText, mgrpNoDuplicateChecks, preferredLanguage, dataSource, mailEquivalentAddress, mailMsgMaxBlocks, mailConversionTag, mailDeferProcessing, mgrpMsgPrefixText, mgrpMsgSuffixText, mailSieveRuleSource, groupid, mgrpUniqueId, commonName, mgrpDescription, mgrpDelayNotifications, mgrpDigestInterval, mgrpMaxMessagesPerDay, mgrpAdvertised, mgrpPublicRoster, mgrpSubscribePolicy, mgrpUnsubscribePolicy, mgrpJettisonBroadcasters, mgrpJettisonDomain, mgrpTrustNewMembers, mail, mgrpListTag] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetMailGroup"],
    "&ldapDesc": "auxiliary class for mailing lists" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
