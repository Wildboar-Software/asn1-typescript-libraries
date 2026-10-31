/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsMessagingServerUser } from "../Ldapmigration50nsMail/id-oc-nsMessagingServerUser.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mailAccessDomain } from "./mailAccessDomain.oa.mjs";
import { mailAutoReplyMode } from "./mailAutoReplyMode.oa.mjs";
import { mailAutoReplyText } from "./mailAutoReplyText.oa.mjs";
import { mailDeliveryOption } from "./mailDeliveryOption.oa.mjs";
import { mailForwardingAddress } from "./mailForwardingAddress.oa.mjs";
import { mailMessageStore } from "./mailMessageStore.oa.mjs";
import { mailProgramDeliveryInfo } from "./mailProgramDeliveryInfo.oa.mjs";
import { mailQuota } from "./mailQuota.oa.mjs";
import { nswmExtendedUserPrefs } from "./nswmExtendedUserPrefs.oa.mjs";
import { vacationenddate } from "./vacationenddate.oa.mjs";
import { vacationstartdate } from "./vacationstartdate.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, mailAccessDomain, mailAutoReplyMode, mailAutoReplyText, mailDeliveryOption, mailForwardingAddress, mailMessageStore, mailProgramDeliveryInfo, mailQuota, nswmExtendedUserPrefs, vacationstartdate, vacationenddate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsMessagingServerUser"],
    "&id": id_oc_nsMessagingServerUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
