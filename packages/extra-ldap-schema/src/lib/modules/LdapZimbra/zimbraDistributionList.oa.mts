/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_zimbraDistributionList } from "../LdapZimbra/id-oc-zimbraDistributionList.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraAdminConsoleUIComponents } from "./zimbraAdminConsoleUIComponents.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraDistributionListSendShareMessageFromAddress } from "./zimbraDistributionListSendShareMessageFromAddress.oa.mjs";
import { zimbraDistributionListSendShareMessageToNewMembers } from "./zimbraDistributionListSendShareMessageToNewMembers.oa.mjs";
import { zimbraDistributionListSubscriptionPolicy } from "./zimbraDistributionListSubscriptionPolicy.oa.mjs";
import { zimbraDistributionListUnsubscriptionPolicy } from "./zimbraDistributionListUnsubscriptionPolicy.oa.mjs";
import { zimbraGroupId } from "./zimbraGroupId.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraIsAdminGroup } from "./zimbraIsAdminGroup.oa.mjs";
import { zimbraLocale } from "./zimbraLocale.oa.mjs";
import { zimbraNotes } from "./zimbraNotes.oa.mjs";
import { zimbraPrefAllowAddressForDelegatedSender } from "./zimbraPrefAllowAddressForDelegatedSender.oa.mjs";
import { zimbraPrefReplyToAddress } from "./zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "./zimbraPrefReplyToDisplay.oa.mjs";
import { zimbraPrefReplyToEnabled } from "./zimbraPrefReplyToEnabled.oa.mjs";
import { zimbraShareInfo } from "./zimbraShareInfo.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [uid, zimbraId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, description, displayName, mail, zimbraACE, zimbraAdminConsoleUIComponents, zimbraCreateTimestamp, zimbraDistributionListSendShareMessageFromAddress, zimbraDistributionListSendShareMessageToNewMembers, zimbraDistributionListSubscriptionPolicy, zimbraDistributionListUnsubscriptionPolicy, zimbraGroupId, zimbraIsAdminGroup, zimbraLocale, zimbraNotes, zimbraPrefAllowAddressForDelegatedSender, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay, zimbraPrefReplyToEnabled, zimbraShareInfo] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraDistributionList"],
    "&ldapDesc": "Distribution List object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraDistributionList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
