/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraGroup } from "../LdapZimbra/id-oc-zimbraGroup.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraAdminConsoleUIComponents } from "../LdapZimbra/zimbraAdminConsoleUIComponents.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraDistributionListSubscriptionPolicy } from "../LdapZimbra/zimbraDistributionListSubscriptionPolicy.oa.mjs";
import { zimbraDistributionListUnsubscriptionPolicy } from "../LdapZimbra/zimbraDistributionListUnsubscriptionPolicy.oa.mjs";
import { zimbraHideInGal } from "../LdapZimbra/zimbraHideInGal.oa.mjs";
import { zimbraIsAdminGroup } from "../LdapZimbra/zimbraIsAdminGroup.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";
import { zimbraMailAlias } from "../LdapZimbra/zimbraMailAlias.oa.mjs";
import { zimbraMailHost } from "../LdapZimbra/zimbraMailHost.oa.mjs";
import { zimbraMailStatus } from "../LdapZimbra/zimbraMailStatus.oa.mjs";
import { zimbraNotes } from "../LdapZimbra/zimbraNotes.oa.mjs";
import { zimbraPrefAllowAddressForDelegatedSender } from "../LdapZimbra/zimbraPrefAllowAddressForDelegatedSender.oa.mjs";
import { zimbraPrefReplyToAddress } from "../LdapZimbra/zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "../LdapZimbra/zimbraPrefReplyToDisplay.oa.mjs";
import { zimbraPrefReplyToEnabled } from "../LdapZimbra/zimbraPrefReplyToEnabled.oa.mjs";
import { memberURL } from "../DynGroup/memberURL.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
import { zimbraIsACLGroup } from "../LdapZimbra/zimbraIsACLGroup.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ memberURL, zimbraId, zimbraIsACLGroup, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, displayName, mail, zimbraACE, zimbraAdminConsoleUIComponents, zimbraCreateTimestamp, zimbraDistributionListSubscriptionPolicy, zimbraDistributionListUnsubscriptionPolicy, zimbraHideInGal, zimbraIsAdminGroup, zimbraLocale, zimbraMailAlias, zimbraMailHost, zimbraMailStatus, zimbraNotes, zimbraPrefAllowAddressForDelegatedSender, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay, zimbraPrefReplyToEnabled, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "hold attributes for dynamic groups" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
