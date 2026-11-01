/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaMailAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaMailAccount.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { gosaMailServer } from "../LdapGosaCoreGosaSamba3/gosaMailServer.oa.mjs";
import { gosaMailDeliveryMode } from "../LdapGosaCoreGosaSamba3/gosaMailDeliveryMode.oa.mjs";
import { gosaMailQuota } from "../LdapGosaCoreGosaSamba3/gosaMailQuota.oa.mjs";
import { gosaMailAlternateAddress } from "../LdapGosaCoreGosaSamba3/gosaMailAlternateAddress.oa.mjs";
import { gosaMailForwardingAddress } from "../LdapGosaCoreGosaSamba3/gosaMailForwardingAddress.oa.mjs";
import { gosaMailMaxSize } from "../LdapGosaCoreGosaSamba3/gosaMailMaxSize.oa.mjs";
import { gosaSpamSortLevel } from "../LdapGosaCoreGosaSamba3/gosaSpamSortLevel.oa.mjs";
import { gosaSpamMailbox } from "../LdapGosaCoreGosaSamba3/gosaSpamMailbox.oa.mjs";
import { gosaVacationMessage } from "../LdapGosaCoreGosaSamba3/gosaVacationMessage.oa.mjs";
import { gosaVacationStart } from "../LdapGosaCoreGosaSamba3/gosaVacationStart.oa.mjs";
import { gosaVacationStop } from "../LdapGosaCoreGosaSamba3/gosaVacationStop.oa.mjs";
import { gosaSharedFolderTarget } from "../LdapGosaCoreGosaSamba3/gosaSharedFolderTarget.oa.mjs";
import { acl } from "../LdapGosaCoreGosaSamba3/acl.oa.mjs";
// export { id_oc_gosaMailAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaMailAccount.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, gosaMailServer, gosaMailDeliveryMode, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gosaMailQuota, gosaMailAlternateAddress, gosaMailForwardingAddress, gosaMailMaxSize, gosaSpamSortLevel, gosaSpamMailbox, gosaVacationMessage, gosaVacationStart, gosaVacationStop, gosaSharedFolderTarget, acl, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaMailAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class to mark MailAccounts for GOsa (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaMailAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
