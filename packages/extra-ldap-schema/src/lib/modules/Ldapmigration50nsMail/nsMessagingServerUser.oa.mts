/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_nsMessagingServerUser } from "../Ldapmigration50nsMail/id-oc-nsMessagingServerUser.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mailAccessDomain } from "../Ldapmigration50nsMail/mailAccessDomain.oa.mjs";
import { mailAutoReplyMode } from "../Ldapmigration50nsMail/mailAutoReplyMode.oa.mjs";
import { mailAutoReplyText } from "../Ldapmigration50nsMail/mailAutoReplyText.oa.mjs";
import { mailDeliveryOption } from "../Ldapmigration50nsMail/mailDeliveryOption.oa.mjs";
import { mailForwardingAddress } from "../Ldapmigration50nsMail/mailForwardingAddress.oa.mjs";
import { mailMessageStore } from "../Ldapmigration50nsMail/mailMessageStore.oa.mjs";
import { mailProgramDeliveryInfo } from "../Ldapmigration50nsMail/mailProgramDeliveryInfo.oa.mjs";
import { mailQuota } from "../Ldapmigration50nsMail/mailQuota.oa.mjs";
import { nswmExtendedUserPrefs } from "../Ldapmigration50nsMail/nswmExtendedUserPrefs.oa.mjs";
import { vacationstartdate } from "../Ldapmigration50nsMail/vacationstartdate.oa.mjs";
import { vacationenddate } from "../Ldapmigration50nsMail/vacationenddate.oa.mjs";
/**
 * @summary nsMessagingServerUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsMessagingServerUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { commonName
 *                               | mailAccessDomain
 *                               | mailAutoReplyMode
 *                               | mailAutoReplyText
 *                               | mailDeliveryOption
 *                               | mailForwardingAddress
 *                               | mailMessageStore
 *                               | mailProgramDeliveryInfo
 *                               | mailQuota
 *                               | nswmExtendedUserPrefs
 *                               | vacationstartdate
 *                               | vacationenddate }
 *   LDAP-NAME                 {"nsMessagingServerUser"}
 *   ID                        id-oc-nsMessagingServerUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsMessagingServerUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, mailAccessDomain, mailAutoReplyMode, mailAutoReplyText, mailDeliveryOption, mailForwardingAddress, mailMessageStore, mailProgramDeliveryInfo, mailQuota, nswmExtendedUserPrefs, vacationstartdate, vacationenddate, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsMessagingServerUser" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsMessagingServerUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
