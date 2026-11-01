/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetMailGroup } from "../Ldapmigration56imsSchema/id-oc-inetMailGroup.va.mjs";
import { mgrpErrorsTo } from "../Ldapmigration50nsMail/mgrpErrorsTo.oa.mjs";
import { mgrpAddHeader } from "../Ldapmigration50nsMail/mgrpAddHeader.oa.mjs";
import { mgrpRemoveHeader } from "../Ldapmigration50nsMail/mgrpRemoveHeader.oa.mjs";
import { mgrpModerator } from "../Ldapmigration50nsMail/mgrpModerator.oa.mjs";
import { mgrpRequestTo } from "../Ldapmigration56imsSchema/mgrpRequestTo.oa.mjs";
import { mgrpAuthPassword } from "../Ldapmigration56imsSchema/mgrpAuthPassword.oa.mjs";
import { mgrpAllowedDomain } from "../Ldapmigration50nsMail/mgrpAllowedDomain.oa.mjs";
import { mgrpDisallowedDomain } from "../Ldapmigration56imsSchema/mgrpDisallowedDomain.oa.mjs";
import { mgrpAllowedBroadcaster } from "../Ldapmigration50nsMail/mgrpAllowedBroadcaster.oa.mjs";
import { mgrpDisallowedBroadcaster } from "../Ldapmigration56imsSchema/mgrpDisallowedBroadcaster.oa.mjs";
import { inetMailGroupStatus } from "../Ldapmigration56imsSchema/inetMailGroupStatus.oa.mjs";
import { mailDeliveryFileURL } from "../Ldapmigration56imsSchema/mailDeliveryFileURL.oa.mjs";
import { mailDeliveryOption } from "../Ldapmigration50nsMail/mailDeliveryOption.oa.mjs";
import { mailProgramDeliveryInfo } from "../Ldapmigration50nsMail/mailProgramDeliveryInfo.oa.mjs";
import { mgrpRFC822MailMember } from "../LdapSolaris/mgrpRFC822MailMember.oa.mjs";
import { mgrpDeliverTo } from "../Ldapmigration50nsMail/mgrpDeliverTo.oa.mjs";
import { mgrpBroadcasterPolicy } from "../Ldapmigration50nsMail/mgrpBroadcasterPolicy.oa.mjs";
import { mgrpMsgMaxSize } from "../Ldapmigration50nsMail/mgrpMsgMaxSize.oa.mjs";
import { mgrpMsgRejectAction } from "../Ldapmigration50nsMail/mgrpMsgRejectAction.oa.mjs";
import { mgrpMsgRejectText } from "../Ldapmigration50nsMail/mgrpMsgRejectText.oa.mjs";
import { mgrpNoDuplicateChecks } from "../Ldapmigration50nsMail/mgrpNoDuplicateChecks.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { dataSource } from "../Ldapmigration56imsSchema/dataSource.oa.mjs";
import { mailEquivalentAddress } from "../Ldapmigration56imsSchema/mailEquivalentAddress.oa.mjs";
import { mailMsgMaxBlocks } from "../Ldapmigration56imsSchema/mailMsgMaxBlocks.oa.mjs";
import { mailConversionTag } from "../Ldapmigration56imsSchema/mailConversionTag.oa.mjs";
import { mailDeferProcessing } from "../Ldapmigration56imsSchema/mailDeferProcessing.oa.mjs";
import { mgrpMsgPrefixText } from "../Ldapmigration56imsSchema/mgrpMsgPrefixText.oa.mjs";
import { mgrpMsgSuffixText } from "../Ldapmigration56imsSchema/mgrpMsgSuffixText.oa.mjs";
import { mailSieveRuleSource } from "../LdapSchema2ldifPostfixBook/mailSieveRuleSource.oa.mjs";
import { groupid } from "../Ldapmigration56imsSchema/groupid.oa.mjs";
import { mgrpUniqueId } from "../Ldapmigration56imsSchema/mgrpUniqueId.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mgrpDescription } from "../Ldapmigration56imsSchema/mgrpDescription.oa.mjs";
import { mgrpDelayNotifications } from "../Ldapmigration56imsSchema/mgrpDelayNotifications.oa.mjs";
import { mgrpDigestInterval } from "../Ldapmigration56imsSchema/mgrpDigestInterval.oa.mjs";
import { mgrpMaxMessagesPerDay } from "../Ldapmigration56imsSchema/mgrpMaxMessagesPerDay.oa.mjs";
import { mgrpAdvertised } from "../Ldapmigration56imsSchema/mgrpAdvertised.oa.mjs";
import { mgrpPublicRoster } from "../Ldapmigration56imsSchema/mgrpPublicRoster.oa.mjs";
import { mgrpSubscribePolicy } from "../Ldapmigration56imsSchema/mgrpSubscribePolicy.oa.mjs";
import { mgrpUnsubscribePolicy } from "../Ldapmigration56imsSchema/mgrpUnsubscribePolicy.oa.mjs";
import { mgrpJettisonBroadcasters } from "../Ldapmigration56imsSchema/mgrpJettisonBroadcasters.oa.mjs";
import { mgrpJettisonDomain } from "../Ldapmigration56imsSchema/mgrpJettisonDomain.oa.mjs";
import { mgrpTrustNewMembers } from "../Ldapmigration56imsSchema/mgrpTrustNewMembers.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mgrpListTag } from "../Ldapmigration56imsSchema/mgrpListTag.oa.mjs";
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
const inetMailGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mgrpErrorsTo, mgrpAddHeader, mgrpRemoveHeader, mgrpModerator, mgrpRequestTo, mgrpAuthPassword, mgrpAllowedDomain, mgrpDisallowedDomain, mgrpAllowedBroadcaster, mgrpDisallowedBroadcaster, inetMailGroupStatus, mailDeliveryFileURL, mailDeliveryOption, mailProgramDeliveryInfo, mgrpRFC822MailMember, mgrpDeliverTo, mgrpBroadcasterPolicy, mgrpMsgMaxSize, mgrpMsgRejectAction, mgrpMsgRejectText, mgrpNoDuplicateChecks, preferredLanguage, dataSource, mailEquivalentAddress, mailMsgMaxBlocks, mailConversionTag, mailDeferProcessing, mgrpMsgPrefixText, mgrpMsgSuffixText, mailSieveRuleSource, groupid, mgrpUniqueId, commonName, mgrpDescription, mgrpDelayNotifications, mgrpDigestInterval, mgrpMaxMessagesPerDay, mgrpAdvertised, mgrpPublicRoster, mgrpSubscribePolicy, mgrpUnsubscribePolicy, mgrpJettisonBroadcasters, mgrpJettisonDomain, mgrpTrustNewMembers, mail, mgrpListTag, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetMailGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for mailing lists" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
