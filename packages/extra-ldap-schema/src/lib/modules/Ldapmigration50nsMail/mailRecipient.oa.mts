/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { mailRoutingAddress } from "../InetMailSchema/mailRoutingAddress.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { multiLineDescription } from "../LdapCore389/multiLineDescription.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_mailRecipient } from "../Ldapmigration50nsMail/id-oc-mailRecipient.va.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { mailHost } from "../QMailSchema/mailHost.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { mailAccessDomain } from "./mailAccessDomain.oa.mjs";
import { mailAutoReplyMode } from "./mailAutoReplyMode.oa.mjs";
import { mailAutoReplyText } from "./mailAutoReplyText.oa.mjs";
import { mailDeliveryOption } from "./mailDeliveryOption.oa.mjs";
import { mailForwardingAddress } from "./mailForwardingAddress.oa.mjs";
import { mailMessageStore } from "./mailMessageStore.oa.mjs";
import { mailProgramDeliveryInfo } from "./mailProgramDeliveryInfo.oa.mjs";
import { mailQuota } from "./mailQuota.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, mail, mailAlternateAddress, mailHost, mailRoutingAddress, mailAccessDomain, mailAutoReplyMode, mailAutoReplyText, mailDeliveryOption, mailForwardingAddress, mailMessageStore, mailProgramDeliveryInfo, mailQuota, multiLineDescription, uid, userPassword] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mailRecipient"],
    "&id": id_oc_mailRecipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
