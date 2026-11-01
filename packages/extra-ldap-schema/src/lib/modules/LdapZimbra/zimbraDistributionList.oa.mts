/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraDistributionList } from "../LdapZimbra/id-oc-zimbraDistributionList.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraAdminConsoleUIComponents } from "../LdapZimbra/zimbraAdminConsoleUIComponents.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraDistributionListSendShareMessageFromAddress } from "../LdapZimbra/zimbraDistributionListSendShareMessageFromAddress.oa.mjs";
import { zimbraDistributionListSendShareMessageToNewMembers } from "../LdapZimbra/zimbraDistributionListSendShareMessageToNewMembers.oa.mjs";
import { zimbraDistributionListSubscriptionPolicy } from "../LdapZimbra/zimbraDistributionListSubscriptionPolicy.oa.mjs";
import { zimbraDistributionListUnsubscriptionPolicy } from "../LdapZimbra/zimbraDistributionListUnsubscriptionPolicy.oa.mjs";
import { zimbraGroupId } from "../LdapZimbra/zimbraGroupId.oa.mjs";
import { zimbraIsAdminGroup } from "../LdapZimbra/zimbraIsAdminGroup.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";
import { zimbraNotes } from "../LdapZimbra/zimbraNotes.oa.mjs";
import { zimbraPrefAllowAddressForDelegatedSender } from "../LdapZimbra/zimbraPrefAllowAddressForDelegatedSender.oa.mjs";
import { zimbraPrefReplyToAddress } from "../LdapZimbra/zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "../LdapZimbra/zimbraPrefReplyToDisplay.oa.mjs";
import { zimbraPrefReplyToEnabled } from "../LdapZimbra/zimbraPrefReplyToEnabled.oa.mjs";
import { zimbraShareInfo } from "../LdapZimbra/zimbraShareInfo.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
/**
 * @summary zimbraDistributionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDistributionList OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { uid
 *                               | zimbraId }
 *   MAY CONTAIN               { commonName
 *                               | description
 *                               | displayName
 *                               | mail
 *                               | zimbraACE
 *                               | zimbraAdminConsoleUIComponents
 *                               | zimbraCreateTimestamp
 *                               | zimbraDistributionListSendShareMessageFromAddress
 *                               | zimbraDistributionListSendShareMessageToNewMembers
 *                               | zimbraDistributionListSubscriptionPolicy
 *                               | zimbraDistributionListUnsubscriptionPolicy
 *                               | zimbraGroupId
 *                               | zimbraIsAdminGroup
 *                               | zimbraLocale
 *                               | zimbraNotes
 *                               | zimbraPrefAllowAddressForDelegatedSender
 *                               | zimbraPrefReplyToAddress
 *                               | zimbraPrefReplyToDisplay
 *                               | zimbraPrefReplyToEnabled
 *                               | zimbraShareInfo }
 *   LDAP-NAME                 {"zimbraDistributionList"}
 *   LDAP-DESC                 "Distribution List object"
 *   ID                        id-oc-zimbraDistributionList }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraDistributionList: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, description, displayName, mail, zimbraACE, zimbraAdminConsoleUIComponents, zimbraCreateTimestamp, zimbraDistributionListSendShareMessageFromAddress, zimbraDistributionListSendShareMessageToNewMembers, zimbraDistributionListSubscriptionPolicy, zimbraDistributionListUnsubscriptionPolicy, zimbraGroupId, zimbraIsAdminGroup, zimbraLocale, zimbraNotes, zimbraPrefAllowAddressForDelegatedSender, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay, zimbraPrefReplyToEnabled, zimbraShareInfo, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraDistributionList" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Distribution List object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraDistributionList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
