/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
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
const gosaMailAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
