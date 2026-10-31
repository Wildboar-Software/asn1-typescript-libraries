/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaMailAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaMailAccount.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { acl } from "./acl.oa.mjs";
import { gosaMailAlternateAddress } from "./gosaMailAlternateAddress.oa.mjs";
import { gosaMailDeliveryMode } from "./gosaMailDeliveryMode.oa.mjs";
import { gosaMailForwardingAddress } from "./gosaMailForwardingAddress.oa.mjs";
import { gosaMailMaxSize } from "./gosaMailMaxSize.oa.mjs";
import { gosaMailQuota } from "./gosaMailQuota.oa.mjs";
import { gosaMailServer } from "./gosaMailServer.oa.mjs";
import { gosaSharedFolderTarget } from "./gosaSharedFolderTarget.oa.mjs";
import { gosaSpamMailbox } from "./gosaSpamMailbox.oa.mjs";
import { gosaSpamSortLevel } from "./gosaSpamSortLevel.oa.mjs";
import { gosaVacationMessage } from "./gosaVacationMessage.oa.mjs";
import { gosaVacationStart } from "./gosaVacationStart.oa.mjs";
import { gosaVacationStop } from "./gosaVacationStop.oa.mjs";

/**
 * @summary gosaMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail
 *                               | gosaMailServer
 *                               | gosaMailDeliveryMode }
 *   MAY CONTAIN               { gosaMailQuota
 *                               | gosaMailAlternateAddress
 *                               | gosaMailForwardingAddress
 *                               | gosaMailMaxSize
 *                               | gosaSpamSortLevel
 *                               | gosaSpamMailbox
 *                               | gosaVacationMessage
 *                               | gosaVacationStart
 *                               | gosaVacationStop
 *                               | gosaSharedFolderTarget
 *                               | acl }
 *   LDAP-NAME                 {"gosaMailAccount"}
 *   LDAP-DESC                 "Class to mark MailAccounts for GOsa (v2.7)"
 *   ID                        id-oc-gosaMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaMailAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mail, gosaMailServer, gosaMailDeliveryMode] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gosaMailQuota, gosaMailAlternateAddress, gosaMailForwardingAddress, gosaMailMaxSize, gosaSpamSortLevel, gosaSpamMailbox, gosaVacationMessage, gosaVacationStart, gosaVacationStop, gosaSharedFolderTarget, acl] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaMailAccount"],
    "&ldapDesc": "Class to mark MailAccounts for GOsa (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaMailAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
