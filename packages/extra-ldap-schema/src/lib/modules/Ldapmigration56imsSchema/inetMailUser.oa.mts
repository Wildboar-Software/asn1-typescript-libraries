/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mailQuota } from "../LdapDbmail/mailQuota.oa.mjs";
import { mailSieveRuleSource } from "../LdapSchema2ldifPostfixBook/mailSieveRuleSource.oa.mjs";
import { mailAutoReplyMode } from "../Ldapmigration50nsMail/mailAutoReplyMode.oa.mjs";
import { mailAutoReplyText } from "../Ldapmigration50nsMail/mailAutoReplyText.oa.mjs";
import { mailDeliveryOption } from "../Ldapmigration50nsMail/mailDeliveryOption.oa.mjs";
import { mailProgramDeliveryInfo } from "../Ldapmigration50nsMail/mailProgramDeliveryInfo.oa.mjs";
import { nswmExtendedUserPrefs } from "../Ldapmigration50nsMail/nswmExtendedUserPrefs.oa.mjs";
import { id_oc_inetMailUser } from "../Ldapmigration56imsSchema/id-oc-inetMailUser.va.mjs";
import { mailForwardingAddress } from "../QMailSchema/mailForwardingAddress.oa.mjs";
import { mailMessageStore } from "../QMailSchema/mailMessageStore.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { aclGroupAddr } from "./aclGroupAddr.oa.mjs";
import { dataSource } from "./dataSource.oa.mjs";
import { mailAllowedServiceAccess } from "./mailAllowedServiceAccess.oa.mjs";
import { mailAntiUBEService } from "./mailAntiUBEService.oa.mjs";
import { mailAutoReplySubject } from "./mailAutoReplySubject.oa.mjs";
import { mailAutoReplyTextInternal } from "./mailAutoReplyTextInternal.oa.mjs";
import { mailAutoReplyTimeout } from "./mailAutoReplyTimeout.oa.mjs";
import { mailConversionTag } from "./mailConversionTag.oa.mjs";
import { mailDeferProcessing } from "./mailDeferProcessing.oa.mjs";
import { mailEquivalentAddress } from "./mailEquivalentAddress.oa.mjs";
import { mailEventNotificationDestination } from "./mailEventNotificationDestination.oa.mjs";
import { mailFolderDefaultAcl } from "./mailFolderDefaultAcl.oa.mjs";
import { mailMsgMaxBlocks } from "./mailMsgMaxBlocks.oa.mjs";
import { mailMsgQuota } from "./mailMsgQuota.oa.mjs";
import { mailParentalControl } from "./mailParentalControl.oa.mjs";
import { mailSMTPSubmitChannel } from "./mailSMTPSubmitChannel.oa.mjs";
import { mailSieveRuleRef } from "./mailSieveRuleRef.oa.mjs";
import { mailUserStatus } from "./mailUserStatus.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mailAutoReplyTimeout, mailAutoReplySubject, mailAutoReplyText, mailAutoReplyTextInternal, mailAutoReplyMode, mailDeliveryOption, mailForwardingAddress, mailMessageStore, mailProgramDeliveryInfo, mailQuota, mailMsgQuota, mailSieveRuleSource, mailSMTPSubmitChannel, nswmExtendedUserPrefs, mailAllowedServiceAccess, mailUserStatus, commonName, dataSource, mailEquivalentAddress, mailMsgMaxBlocks, mailConversionTag, mailDeferProcessing, mailAntiUBEService, mailFolderDefaultAcl, aclGroupAddr, mailParentalControl, mailSieveRuleRef, mailEventNotificationDestination] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetMailUser"],
    "&ldapDesc": "auxiliary class for a messaging server user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
