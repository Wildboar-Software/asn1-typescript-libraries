/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_mailRecipient } from "../Ldapmigration50nsMail/id-oc-mailRecipient.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { mailHost } from "../QMailSchema/mailHost.oa.mjs";
import { mailRoutingAddress } from "../InetMailSchema/mailRoutingAddress.oa.mjs";
import { mailAccessDomain } from "../Ldapmigration50nsMail/mailAccessDomain.oa.mjs";
import { mailAutoReplyMode } from "../Ldapmigration50nsMail/mailAutoReplyMode.oa.mjs";
import { mailAutoReplyText } from "../Ldapmigration50nsMail/mailAutoReplyText.oa.mjs";
import { mailDeliveryOption } from "../Ldapmigration50nsMail/mailDeliveryOption.oa.mjs";
import { mailForwardingAddress } from "../Ldapmigration50nsMail/mailForwardingAddress.oa.mjs";
import { mailMessageStore } from "../Ldapmigration50nsMail/mailMessageStore.oa.mjs";
import { mailProgramDeliveryInfo } from "../Ldapmigration50nsMail/mailProgramDeliveryInfo.oa.mjs";
import { mailQuota } from "../Ldapmigration50nsMail/mailQuota.oa.mjs";
import { multiLineDescription } from "../LdapCore389/multiLineDescription.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";


/**
 * @summary mailRecipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailRecipient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { commonName
 *                               | mail
 *                               | mailAlternateAddress
 *                               | mailHost
 *                               | mailRoutingAddress
 *                               | mailAccessDomain
 *                               | mailAutoReplyMode
 *                               | mailAutoReplyText
 *                               | mailDeliveryOption
 *                               | mailForwardingAddress
 *                               | mailMessageStore
 *                               | mailProgramDeliveryInfo
 *                               | mailQuota
 *                               | multiLineDescription
 *                               | uid
 *                               | userPassword }
 *   LDAP-NAME                 {"mailRecipient"}
 *   ID                        id-oc-mailRecipient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailRecipient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, mail, mailAlternateAddress, mailHost, mailRoutingAddress, mailAccessDomain, mailAutoReplyMode, mailAutoReplyText, mailDeliveryOption, mailForwardingAddress, mailMessageStore, mailProgramDeliveryInfo, mailQuota, multiLineDescription, uid, userPassword, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailRecipient" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailRecipient /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

