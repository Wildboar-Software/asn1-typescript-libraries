/* eslint-disable */
import { memberURL } from "../DynGroup/memberURL.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_zimbraGroup } from "../LdapZimbra/id-oc-zimbraGroup.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraAdminConsoleUIComponents } from "./zimbraAdminConsoleUIComponents.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraDistributionListSubscriptionPolicy } from "./zimbraDistributionListSubscriptionPolicy.oa.mjs";
import { zimbraDistributionListUnsubscriptionPolicy } from "./zimbraDistributionListUnsubscriptionPolicy.oa.mjs";
import { zimbraHideInGal } from "./zimbraHideInGal.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraIsACLGroup } from "./zimbraIsACLGroup.oa.mjs";
import { zimbraIsAdminGroup } from "./zimbraIsAdminGroup.oa.mjs";
import { zimbraLocale } from "./zimbraLocale.oa.mjs";
import { zimbraMailAlias } from "./zimbraMailAlias.oa.mjs";
import { zimbraMailHost } from "./zimbraMailHost.oa.mjs";
import { zimbraMailStatus } from "./zimbraMailStatus.oa.mjs";
import { zimbraNotes } from "./zimbraNotes.oa.mjs";
import { zimbraPrefAllowAddressForDelegatedSender } from "./zimbraPrefAllowAddressForDelegatedSender.oa.mjs";
import { zimbraPrefReplyToAddress } from "./zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "./zimbraPrefReplyToDisplay.oa.mjs";
import { zimbraPrefReplyToEnabled } from "./zimbraPrefReplyToEnabled.oa.mjs";

/**
 * @summary zimbraGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { memberURL
 *                               | zimbraId
 *                               | zimbraIsACLGroup }
 *   MAY CONTAIN               { description
 *                               | displayName
 *                               | mail
 *                               | zimbraACE
 *                               | zimbraAdminConsoleUIComponents
 *                               | zimbraCreateTimestamp
 *                               | zimbraDistributionListSubscriptionPolicy
 *                               | zimbraDistributionListUnsubscriptionPolicy
 *                               | zimbraHideInGal
 *                               | zimbraIsAdminGroup
 *                               | zimbraLocale
 *                               | zimbraMailAlias
 *                               | zimbraMailHost
 *                               | zimbraMailStatus
 *                               | zimbraNotes
 *                               | zimbraPrefAllowAddressForDelegatedSender
 *                               | zimbraPrefReplyToAddress
 *                               | zimbraPrefReplyToDisplay
 *                               | zimbraPrefReplyToEnabled }
 *   LDAP-NAME                 {"zimbraGroup"}
 *   LDAP-DESC                 "hold attributes for dynamic groups"
 *   ID                        id-oc-zimbraGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [memberURL, zimbraId, zimbraIsACLGroup] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, displayName, mail, zimbraACE, zimbraAdminConsoleUIComponents, zimbraCreateTimestamp, zimbraDistributionListSubscriptionPolicy, zimbraDistributionListUnsubscriptionPolicy, zimbraHideInGal, zimbraIsAdminGroup, zimbraLocale, zimbraMailAlias, zimbraMailHost, zimbraMailStatus, zimbraNotes, zimbraPrefAllowAddressForDelegatedSender, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay, zimbraPrefReplyToEnabled] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraGroup"],
    "&ldapDesc": "hold attributes for dynamic groups" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
